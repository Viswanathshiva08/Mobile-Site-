package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.entity.User;

import java.util.Map;

public interface TokenGenerator {
    Map<String,String> generateToken(User user);
}
