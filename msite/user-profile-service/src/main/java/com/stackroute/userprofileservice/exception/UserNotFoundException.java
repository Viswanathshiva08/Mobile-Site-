package com.stackroute.userprofileservice.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.NOT_FOUND,reason = "user does not exist")

public class UserNotFoundException extends Exception{
}
