package com.stackroute.userprofileservice.controller;


import com.stackroute.userprofileservice.entity.User;
import com.stackroute.userprofileservice.exception.UserNotFoundException;
import com.stackroute.userprofileservice.exception.UsernameAlreadyExist;
import com.stackroute.userprofileservice.service.JwtService;
import com.stackroute.userprofileservice.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController

public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    JwtService jwtService;

    @PostMapping("/user")
    public ResponseEntity saveUser(@RequestBody User user){
        try{
            return new ResponseEntity<>(userService.saveUser(user), HttpStatus.ACCEPTED);
        }
        catch (UsernameAlreadyExist exception)
        {
            return new ResponseEntity<>("Username is already exist", HttpStatus.CONFLICT);
        }

    }
    @GetMapping("/user/{username}")
    public ResponseEntity getUser(@PathVariable String username){
        try {
            return new ResponseEntity<>(userService.getUserById(username), HttpStatus.OK);
        }
        catch (UserNotFoundException ex){
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }
    }
   @PutMapping ("/user/update")
    public ResponseEntity<?> updateUser( @RequestBody User user) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(userService.updateUser(user));
        }
        catch (UserNotFoundException ex){
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }
    }
    @PutMapping("/user/contactno")
    public ResponseEntity<?> updateProfile(@RequestBody User user) {
        try {
            return ResponseEntity.status(HttpStatus.OK).body(userService.updateProfile(user));
        }
        catch (UserNotFoundException ex){
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }
    }


    @PostMapping("/userprofile")
    public ResponseEntity<?> login(@RequestBody User user)
    {
        try {
            Map<String, String> map = null;

            if (userService.checkingLoginDetails(user)) {
                map = jwtService.generateToken(user);
                return new ResponseEntity(map, HttpStatus.OK);

            }
            else{
                return new ResponseEntity<>("password does not match", HttpStatus.NOT_FOUND);

            }

        }
        catch (UserNotFoundException ex){
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }

   }
    @PutMapping("/password")
    public ResponseEntity<?> changpassword(@RequestBody User user){
        try {
            return new ResponseEntity<>(userService.changePassword(user), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/balance")
    public ResponseEntity<?> updateBalance(@RequestBody User user){
        try {
            return new ResponseEntity<>(userService.updateBalance(user), HttpStatus.OK);
        }catch (UserNotFoundException ex){
            return new ResponseEntity<>("User does not exist", HttpStatus.NOT_FOUND);
        }
    }




}
