package com.stackroute.userprofileservice.service;

import com.stackroute.userprofileservice.entity.Cards;
import com.stackroute.userprofileservice.entity.User;
import com.stackroute.userprofileservice.exception.CardAlreadyExist;
import com.stackroute.userprofileservice.repository.CardsRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

@Service
public class CardService {
    @Autowired
    private CardsRepo cardsRepo;
    public Cards saveCard(Cards cards) throws CardAlreadyExist{
        if (cardsRepo.findById(cards.getCardno()).isPresent())
        {
            throw new CardAlreadyExist();
        }
        return cardsRepo.save(cards);
    }
    public Cards getCardById(String cardsno){
        return cardsRepo.findById(cardsno).get();
    }
    public List<Cards> getCardByUserName(String username){
        return  cardsRepo.findCardsByUsername(username);
    }
}
