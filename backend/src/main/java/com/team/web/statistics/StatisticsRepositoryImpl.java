package com.team.web.statistics;

import static com.team.web.statistics.QStatistics.statistics;

import antlr.Parser;
import antlr.StringUtils;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.ExpressionUtils;
import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.StringPath;
import com.querydsl.jpa.JPAExpressions;
import com.querydsl.jpa.JPQLQuery;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.text.SimpleDateFormat;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Expression;
import java.util.List;
import java.util.Map;

@Repository
interface IStatisticsRepository{
    Map<?,?> test();
    List<AvgRainVO> avgRain();
    List<AvgRainVO> rainProb();


}
public class StatisticsRepositoryImpl extends QuerydslRepositorySupport implements IStatisticsRepository{
    private final JPAQueryFactory queryFactory;

    public StatisticsRepositoryImpl(JPAQueryFactory queryFactory) {
        super(Statistics.class);
        this.queryFactory = queryFactory;
    }

    @Override
    public Map<?, ?> test() {
        // SimpleDateFormat simpleDateFormat = new SimpleDateFormat("yyyy-MM-dd");

        Long ts = queryFactory.select(statistics.precipitationDate).from(statistics)
                .where(statistics.precipitationDate.like("%"+"08-15"+"%"))
                .fetchCount();

        System.out.println(ts.toString());
        return null;
    }
    @Override
    public List<AvgRainVO> avgRain() {

        return queryFactory.select(Projections.fields(AvgRainVO.class,
                statistics.precipitationDate,statistics.precipitationDaily.avg().as("avgRain")))
                .from(statistics)
                .groupBy(statistics.precipitationDate).fetch();
    }

    public List<AvgRainVO> rainProb() {
        return queryFactory.select(Projections.fields(
                AvgRainVO.class, statistics.precipitationDate, statistics.pbRain.as("rainProb")
        )).from(statistics).groupBy(statistics.precipitationDate).fetch();
    }
}
