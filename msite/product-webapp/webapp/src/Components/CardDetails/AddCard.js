import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { saveCard } from "../../service/Card.service";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import NavBar from "../Navbar/NavBar";
import './AddCard.css'

import {omit} from 'lodash'



const AddCard = () => {
    const [Card, setCard] = useState({
        cardno: "",
        username:localStorage.getItem("username"),
        expiryyear: "",
        cardtype: "",
      
    });
    const [msg] = useState("");
  
    const handleChange = (e) => {
      const value = e.target.value;
      setCard({ ...Card, [e.target.name]: value });
    };
    const navigate = useNavigate();
    function Main (){
    navigate("/Main")

  }
  
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  const validate = (event,name,value) => {

    switch(name){

      case'cardno':
      if(value.length <= 4){
        setErrors({
          ...errors,
          cardno:'have to enter proper card number '
      })
    }else{
     
      let newObj = omit(errors, "cardno");
      setErrors(newObj);
    }
    break;
    case'username':
    if(value.length <= 4){
      setErrors({
        ...errors,
        username:'Username atleast have 5 letters'
      })
    }else{
       
        let newObj = omit(errors, "username");
        setErrors(newObj);
        
    }
    break;
    // case'expiryyear'
    default:
      break;


    }
    const handleChange = (event) => {
      event.persist();
      let name = event.target.name;
        let val = event.target.value;
        
        validate(event,name,val);
        setValues({
          ...values,
          [name]:val,
      })

  }
  return {
    values,
    errors,
    handleChange,
}

}



    function Submitcards (res){
        console.log("Inside onsuccess method", res)
        
          let obj = {
            "cardno": Card.cardno,
            "username":localStorage.getItem("username"),
            "expiryyear": Card.expiryyear,
            "cardtype": Card.cardtype
           
          }
          saveCard(obj).then((res) => { console.log("save details", res); 
        if(res){ handleClose();Main();}  }).catch((err) => { console.log(err) });

          handleClose();
          Main();
          
      }
      const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
      



  

  



  
      
 
return (
  
  <><Button variant="primary" onClick={handleShow}>
    Add New Card
  </Button>
  <Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}
  >
      
      <Modal.Body>
       

        <div >
        <div className="card-header text-center fs-3">
        Card details
                 
                  {msg && <p className="text-success">{msg}</p>}
                </div>
                <div className="mb-3">
                      <label>Enter Card number</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cardno"
                        value={Card.cardno}
                        onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="mb-3">
                      <label>Enter User Name</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={Card.username}
                        onChange={(e) => handleChange(e)} />
                    </div>
                    <div className="mb-3">
                      <label>Enter Expiry Year </label>
                      <input
                        type="text"
                        className="form-control"
                        name="expiryyear"
                        value={Card.expiryyear}
                        onChange={(e) => handleChange(e)} />
                    </div>

                    <div className="mb-3">
                      <label>Enter Card Type</label>
                      <input
                        type="text"
                        className="form-control"
                        name="cardtype"
                        value={Card.cardtype}
                        onChange={(e) => handleChange(e)} />
                    </div>

        </div>

        <div>
        
        </div>
        

      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button className="btn btn-success" onClick={Submitcards}>Submit</button>
        
      </Modal.Footer>
    </Modal></>
    

   
      
      
    
    
  );

}



  
    export default AddCard;
