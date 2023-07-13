package com.stackroute.userprofileservice.service;


import com.stackroute.userprofileservice.entity.User;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Service

public class JwtService implements TokenGenerator{


    public Map<String,String> generateToken(User user)
    {
        String token = Jwts.builder().setSubject(user.getUsername())
                .setIssuedAt(new Date()).signWith(SignatureAlgorithm.HS256,"secret_key").compact();
        Map<String,String> data=new HashMap<>();
        data.put("token",token);
        data.put("message","Authentication successful");
        return data;

    }

}
