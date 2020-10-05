package com.team.web.user;

import com.querydsl.jpa.impl.JPAQueryFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.support.QuerydslRepositorySupport;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
interface CustomedUserRepository{
    Optional<User> findByUserId(String userId);

    Optional<User> findByUserNameAndEmail(String name, String email);

    Optional<User> findByUserIdNameAndEmail(String userId, String name, String email);
}
public class UserRepositoryImpl  extends QuerydslRepositorySupport implements CustomedUserRepository {
    @Autowired
    JPAQueryFactory queryFactory;

    UserRepositoryImpl() {
        super(User.class);
    }
    @Override
    public Optional<User> findByUserId(String userId) {
        System.out.println(userId);
        QUser qUser = QUser.user;
        User findOne = queryFactory.selectFrom(qUser).where(qUser.userId.like(userId)).fetchOne();
        System.out.println("repo : " + findOne);
        return Optional.of(findOne);
    }

    @Override
    public Optional<User> findByUserNameAndEmail(String name, String email) {
        QUser qUser = QUser.user;
        User findOne = queryFactory.selectFrom(qUser).where(qUser.name.eq(name), qUser.email.eq(email)).fetchOne();
        return Optional.ofNullable(findOne);
    }

    @Override
    public Optional<User> findByUserIdNameAndEmail(String userId, String name, String email) {
        QUser qUser= QUser.user;
        User findOne = queryFactory.selectFrom(qUser).where(qUser.userId.eq(userId),
                qUser.name.eq(name),qUser.email.eq(email)).fetchOne();
        return Optional.ofNullable(findOne);
    }
}
