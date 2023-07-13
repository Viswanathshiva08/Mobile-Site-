package com.stackroute.userprofileservice.repository;

import com.stackroute.userprofileservice.entity.Cards;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardsRepo extends JpaRepository<Cards,String> {
    List<Cards> findCardsByUsername(String username);
}
