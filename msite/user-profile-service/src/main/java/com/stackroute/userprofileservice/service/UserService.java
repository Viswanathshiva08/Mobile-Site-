package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.entity.User;
import com.stackroute.userprofileservice.exception.UserNotFoundException;
import com.stackroute.userprofileservice.exception.UsernameAlreadyExist;
import com.stackroute.userprofileservice.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepo userRepo;
    public User saveUser(User user) throws UsernameAlreadyExist {
        if (userRepo.findById(user.getUsername()).isPresent())
        {
            throw new UsernameAlreadyExist();
        }
        user.setBalance(50000);
        return userRepo.save(user);
    }
    public User getUserById(String username) throws UserNotFoundException{

        if(userRepo.findById(username).isEmpty()){
            throw new UserNotFoundException();
        }
        return userRepo.findById(username).get();
    }

    public User updateUser(User user) throws UserNotFoundException
    {
        if(userRepo.findById(user.getUsername()).isEmpty()){
            throw new UserNotFoundException();
        }
        return userRepo.save(user);
    }



    public User updateProfile(User user) throws UserNotFoundException
    {
        User user1 = userRepo.findById(user.getUsername()).get();
        if(user1==null){
            throw new UserNotFoundException();
        }
        user1.setContactno(user.getContactno());
        user1.setHouseNo(user.getHouseNo());
        user1.setStreetName(user.getStreetName());
        user1.setArea(user.getArea());
        user1.setCity(user.getCity());
        user1.setState(user.getState());
        user1.setCountry(user.getCountry());
        user1.setPincode(user.getPincode());
        return userRepo.save(user1);

    }
    public boolean checkingLoginDetails(User user) throws UserNotFoundException{

        User retrieveUser=userRepo.findById(user.getUsername()).get();
        if(retrieveUser==null){
            throw new UserNotFoundException();
        }
        if(user.getPassword().equals(retrieveUser.getPassword())){
            return true;
        }

        return false;
    }

    public User changePassword(User user) throws UserNotFoundException {
        User existingUser=userRepo.findById(user.getUsername()).get();
        if(existingUser==null){
            throw new UserNotFoundException();
        }
        existingUser.setPassword(user.getPassword());
        return userRepo.save(existingUser);
    }

    public User updateBalance(User user) throws UserNotFoundException {
        User existingUser=userRepo.findById(user.getUsername()).get();
        if(existingUser==null){
            throw new UserNotFoundException();
        }
        int balance=existingUser.getBalance()-user.getBalance();
        existingUser.setBalance(balance);
        return userRepo.save(existingUser);
    }




}
