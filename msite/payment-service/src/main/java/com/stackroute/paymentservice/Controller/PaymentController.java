package com.stackroute.paymentservice.Controller;

import com.razorpay.RazorpayException;
import com.stackroute.paymentservice.Entity.Payment;
import com.stackroute.paymentservice.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController

@RequestMapping("/")
public class PaymentController {
    @Autowired
    private PaymentService paymentService;
    @PostMapping("/onSuccess")
    public Payment savePaymentSuccess(@RequestBody Payment payment) throws RazorpayException {
        return paymentService.savePaymentOnSuccess(payment);
    }
    @PostMapping("/onFailure")
    public Payment savePaymentOnFailure(@RequestBody Payment payment){
        return paymentService.savePaymentOnFailure(payment);
    }

    @GetMapping("/paymnets/{customerName}")
    public List<Payment> GetPayment(@PathVariable String customerName){
        return paymentService.GetPayment(customerName);
    }
    @GetMapping("/listofPayments")
    public List<Payment> seeAllPayments(){
        return paymentService.seeAllPayments();
    }
}
