package com.example.autoshow20.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Setter
@Getter
@NoArgsConstructor
@Entity(name = "employee")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "name")
    private String name;

    @Column(name = "surname")
    private String surname;

    @Column(name = "post")
    private String post;

    @Column(name = "email")
    private String email;

    @Column(name = "login")
    private String login;

    @Column(name = "password")
    private String password;


    public Employee(int id, String name, String surname, String post, String email, String login, String password) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.post = post;
        this.email = email;
        this.login = login;
        this.password = password;
    }
}
