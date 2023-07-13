package com.stackroute.paymentservice.Repository;

import com.stackroute.paymentservice.Entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PaymentRepository extends JpaRepository<Payment,String> {
    List<Payment> findPaymentByCustomerName(String customerName);
}
