package com.team.web.user;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.team.web.board.Board;
import com.team.web.order.Order;
import com.team.web.statistics.Statistics;
import lombok.*;

import java.time.LocalDate;
import java.util.List;


@NoArgsConstructor(access=AccessLevel.PROTECTED)
@Getter
@Setter

@Entity
@Table(name= "user", uniqueConstraints = {@UniqueConstraint(columnNames = {"user_id"})})
public class User {
    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @Column(name = "user_id") private String userId;
    @Column(name = "name") private String name;
    @Column(name = "password") private String password;
    @Column(name = "birth_date") private LocalDate birthDate;
    @Column(name = "gender") private String gender;
    @Column(name = "address") private String address;
    @Column(name = "latitude") private String latitude;
    @Column(name = "longitude") private String longitude;
    @Column(name = "email") private String email;
    @Column(name = "join_date") private LocalDate joinDate;
    @Column(name = "optional_addr") private String optionalAddr;
    @Column(name = "phone_number") private String phoneNumber;


    @Builder
    private User(String userId,
                 String password,
                 String name,
                 LocalDate birthDate,
                 String phoneNumber,
                 String address,
                 String email,
                 LocalDate joinDate) {
        this.userId = userId;
        this.password = password;
        this.name = name;
        this.birthDate = birthDate;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.email = email;
        this.joinDate = joinDate;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }


    public void setPassword(String password) {
        this.password = password;
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate;
    }


    public void setAddress(String address) {
        this.address = address;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setJoinDate(LocalDate joinDate) {
        this.joinDate = joinDate;
    }


    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Order> orderList;
    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Statistics> statistics;
    @JsonIgnore
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL)
    private List<Board> board;


}