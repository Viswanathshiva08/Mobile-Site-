import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getPayBycustomerName } from "../service/pay.service";
import { useNavigate } from "react-router";
import NavBar from "./Navbar/NavBar";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './Home.css'

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';
const Home = () => {
  const [payList, setPayList] = useState([]);
  const [msg] = useState("");
  useEffect(() => {    
    init();
  }, []);

  const init = () => {
    const username =localStorage.getItem("username");
      getPayBycustomerName(username)
      .then((res) => {
        console.log(res.data);
        setPayList(res.data);
      })
      .catch((error) => {
        console.log(error);                           
      });
  };
  const navigate = useNavigate();
  function DoPayment (){
    navigate("/addPay")

  }

 

  return (
    <div className="payment">
      <NavBar></NavBar>
      
    <Button variant="primary" onClick={DoPayment}>
    Payment
  </Button>

    <div className="container-boarder">
      <div className="text-left-dowm">
    
                </div>
      <h1 className="text-center mt-3" style={{color:"black"}} >Transaction History</h1>
      {msg && <p className="text-center text-uppercase">{msg}</p>}
      <Table responsive striped bordered  variant="default">
      <thead >
          <tr >
            <th className="table-primary">Transaction Id</th>
            <th className="table-primary">Beneficary IFSCcode</th>
            <th className="table-primary">Beneficary AccountNumber</th>
            <th className="table-primary"> Email</th>
            <th className="table-primary">Phone Number</th>
            <th className="table-primary">Amount</th>
            <th className="table-primary" >Description</th>
          </tr>
        </thead>
      <tbody>
      
          {payList.map((pay, num) => (
            <tr>
              <td>{pay.paymentId}</td>
              <td>{pay.beneficiaryIfsccode}</td>
              <td>{pay.beneficiaryAccountnumber}</td>
              <td>{pay.email}</td>
              <td>{pay.phoneNumber}</td>
              <td>{pay.amount}</td>
              <td>{pay.description}</td>
              
            </tr>
          ))}
        </tbody>
      
    </Table>
    

      {/* <table class="table table-bordered">
        <thead className="thead-light text-center">
          <tr>
            <th scope="col">S No</th>
            <th scope="col">Beneficary IFSCcode</th>
            <th scope="col">Beneficary AccountNumber</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Amount</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>
          {payList.map((pay, num) => (
            <tr>
              <th scope="row">{num + 1}</th>
              <td>{pay.beneficiaryIfsccode}</td>
              <td>{pay.beneficiaryAccountnumber}</td>
              <td>{pay.email}</td>
              <td>{pay.phoneNumber}</td>
              <td>{pay.amount}</td>
              <td>{pay.description}</td>
            </tr>
          ))}
        </tbody>
      </table> */}
    </div>
    </div>


     








  );
};

export default Home;