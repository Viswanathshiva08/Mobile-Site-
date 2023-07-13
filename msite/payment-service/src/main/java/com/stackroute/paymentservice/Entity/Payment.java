package com.stackroute.paymentservice.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.math.BigInteger;

@Entity
@Table(name="payment_table")
@Data
@AllArgsConstructor(staticName = "build")
@NoArgsConstructor
public class Payment {


    String customerName;
    String beneficiaryAccountnumber;
    String beneficiaryIfsccode;
    String email;
    String phoneNumber;
    String amount;
    @Id
    String paymentId;
    String description;
    String Date;
    String paymentstatus;
}
