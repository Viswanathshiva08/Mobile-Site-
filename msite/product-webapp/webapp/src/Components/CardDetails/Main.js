import React from "react"
import { useState } from "react";
import { useEffect } from "react";
import { getCardbyUsername } from "../../service/Card.service";
import { useNavigate } from "react-router";
import AddCard from "./AddCard";
import NavBar from "../Navbar/NavBar";
import './Main.css'
import Table from 'react-bootstrap/Table';

const Main = () => {
    const [CardList, setCardList] = useState([]);
  const [msg] = useState("");
  useEffect(() => {    
    init();
  }, []);

  const init = () => {
    const username = localStorage.getItem("username");
    getCardbyUsername(username)
    .then((res) => {
        console.log(res.data);
        setCardList(res.data);
    })

    .catch((error) => {
        console.log(error);                           
      });
    };

      const navigate = useNavigate();
      function ShowDetils (){
       navigate("/AddCard")
    }



return (
  <div>
    <NavBar></NavBar>
    <div className="card22">
    <div className="container-xxl">
      <div className="text-left-dowm">
      <AddCard/>
      </div>
<div className="cardetails">
<h1 className="text-center mt-3">Card Details</h1>
{msg && <p className="text-center text-uppercase">{msg}</p>}
<div className="table">
<table class="table responsive  table-bordered ">
  <thead className="table  table-striped text-center">
    <tr>
      <th className="bg-info">Card No</th>
      <th className="bg-info">User Name</th>
      <th className="bg-info">Expiry Year</th>
      <th className="bg-info">Card Type</th>
   
      </tr>
      </thead>

      {/* viswanath */}
      {/* <Table striped="columns"  variant="info" >
      <thead>
        <tr>
          
          <th className="bg-info">Card No</th>
          <th className="bg-info">User Name</th>
          <th className="bg-info">Expiry Year</th>
          <th className="bg-info">Card Type</th>
        </tr>
      </thead>
       */}
      {
      CardList.map((Card, num) => (
            <tr>
             
              <td>{Card.cardno}</td>
              <td>{Card.username}</td>
              <td>{Card.expiryyear}</td>
              <td>{Card.cardtype}</td>
             
            </tr>
         
      
        //     <tbody>
        // <tr>
        //   <td>{Card.cardno}</td>
        //   <td>{Card.username}</td>
        //   <td>{Card.expiryyear}</td>
        //   <td>{Card.cardtype}</td>
        // </tr>
        // </tbody>
        ))}
        
      </table>
      </div>
      </div>
        </div>
        </div>
        </div>
        );
    
        
    

};
      export default Main

