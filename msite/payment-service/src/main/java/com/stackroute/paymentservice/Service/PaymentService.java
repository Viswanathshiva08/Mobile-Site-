package com.stackroute.paymentservice.Service;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;
import com.stackroute.paymentservice.Entity.Payment;
import com.stackroute.paymentservice.Repository.PaymentRepository;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class PaymentService {
    @Autowired
    private PaymentRepository paymentRepository;
    public Payment savePaymentOnSuccess(Payment payment) throws RazorpayException {
        RazorpayClient client= new RazorpayClient("rzp_test_1Ciavp4Q4u9nKS","dhg7LWrRr3wqgeq2Cnsok2OO");
        JSONObject object= new JSONObject();
        object.put("amount",payment.getAmount());
        object.put("currency", "INR");
        Order object2= client.Orders.create(object);
        payment.setPaymentId(object2.get("id"));
        payment.setPaymentstatus(object2.get("status"));
        payment.setDate(String.valueOf(LocalDate.now()));

        Payment payment1 = Payment.build(payment.getCustomerName(),payment.getBeneficiaryAccountnumber(), payment.getBeneficiaryIfsccode(), payment.getEmail(),
                payment.getPhoneNumber(),payment.getAmount(),payment.getPaymentId(),
                payment.getDescription(),payment.getDate(),payment.getPaymentstatus());
        return paymentRepository.save(payment1);
    }
    public Payment savePaymentOnFailure(Payment payment){
        
        payment.setPaymentstatus("failure");
        payment.setDate(String.valueOf(LocalDate.now()));
        Payment payment2 = Payment.build(payment.getCustomerName(),payment.getBeneficiaryAccountnumber(), payment.getBeneficiaryIfsccode(), payment.getEmail(),payment.getPhoneNumber(),
                payment.getAmount(),payment.getAmount(), payment.getDescription(),payment.getDate(),payment.getPaymentstatus());
        return paymentRepository.save(payment2);
    }

    public List<Payment> GetPayment(String customerName){
        return paymentRepository.findPaymentByCustomerName(customerName);

    }
    public List<Payment> seeAllPayments(){
        return paymentRepository.findAll();
    }
}


