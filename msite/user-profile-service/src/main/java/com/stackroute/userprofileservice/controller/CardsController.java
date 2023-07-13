package com.stackroute.userprofileservice.controller;

import com.stackroute.userprofileservice.entity.Cards;
import com.stackroute.userprofileservice.exception.CardAlreadyExist;
import com.stackroute.userprofileservice.service.CardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController

public class CardsController {
    @Autowired
    private CardService cardService;
    @PostMapping("/card")
    public ResponseEntity<?> saveCard(@RequestBody Cards cards){
        try {
            return new ResponseEntity<>(cardService.saveCard(cards), HttpStatus.ACCEPTED);
        }
        catch(CardAlreadyExist exception1)
        {
            return new ResponseEntity<>("Cardno is already exist",HttpStatus.CONFLICT);
        }

    }
    @GetMapping("/card/{cardno}")
    public ResponseEntity getCard(@PathVariable String cardno){
        return new ResponseEntity<>(cardService.getCardById(cardno), HttpStatus.OK);
    }
    @GetMapping("/card/user/{username}")
    public ResponseEntity getCardbyUsername(@PathVariable String username){
        return new ResponseEntity<>(cardService.getCardByUserName(username), HttpStatus.OK);
    }

}
