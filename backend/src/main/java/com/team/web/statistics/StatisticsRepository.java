package com.team.web.statistics;

import com.amazonaws.services.datapipeline.model.EvaluateExpressionRequest;
import com.amazonaws.services.dynamodbv2.datamodeling.marshallers.S3LinkToStringMarshaller;
import net.bytebuddy.agent.builder.AgentBuilder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

@Repository
public interface StatisticsRepository extends JpaRepository<Statistics,Long>,IStatisticsRepository {

@Query(value = "SELECT Statistics.PRECIPITATION_DATE,SUM(Statistics.rain)*100/COUNT(Statistics.PRECIPITATION_DATE) AS PB_RAIN,AVG(Statistics.PRECIPITATION_DAILY) AS AVG_RAIN FROM statistics GROUP BY Statistics.PRECIPITATION_DATE", nativeQuery = true)
public List<Statistics> findStatistics();

}
