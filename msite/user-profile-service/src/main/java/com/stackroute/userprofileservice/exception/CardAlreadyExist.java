package com.stackroute.userprofileservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.CONFLICT,reason = "carddetail is already exist")

public class CardAlreadyExist extends Exception{
}
