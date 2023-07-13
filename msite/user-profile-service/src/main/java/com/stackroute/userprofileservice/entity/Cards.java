package com.stackroute.userprofileservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@Table(name="cards")
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Cards {
    @Id
    private String cardno;
    private String username;
    private String expiryyear;
    private String cardtype;
}
