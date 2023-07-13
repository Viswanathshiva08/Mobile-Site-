package com.stackroute.userprofileservice.exception;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "username is already exist")
public class UsernameAlreadyExist extends Exception {

}
