package com.stackroute.userprofileservice.repository;

import com.stackroute.userprofileservice.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User,String> {

   // User update(User user);
}
