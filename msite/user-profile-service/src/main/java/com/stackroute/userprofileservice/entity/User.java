package com.stackroute.userprofileservice.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class User{
    @Id
    private String username;
    private String email;
    private String password;
    private String contactno;
    @Column(unique = true)
    private String accountNo;
    private  String ifsccode;
    private String branch;
    private  int balance;
    private String accountType;
    private String accountHoldername;
    private String transactionPin;
    private String houseNo;
    private String streetName;
    private String area;
    private String city;
    private String state;
    private String country;
    private String pincode;
}
