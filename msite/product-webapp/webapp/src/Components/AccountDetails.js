import React from 'react'
import './AccountDetails.css'
// import img1 from "../images/msite.png";
import { useState } from "react";
import { useEffect } from "react";
import { getPayByuserame } from "../service/user.service";
import NavBar from './Navbar/NavBar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
} from 'mdb-react-ui-kit';

const AccountDetails = () => {
    const [user, setUser] = useState({});
    const [] = useState("");
    useEffect(() => {    
      init();
    }, []);
    const init = () => {
    
      const username=localStorage.getItem('username')
        getPayByuserame(username)
        .then((res) => {
          console.log(res);
          setUser(res.data);
          
        })
        .catch((error) => {
          console.log(error);                           
        });
    };



  return (
    <div>
      <NavBar></NavBar>
      <div className='accountwhole'>
      <div className='Heading'> 
      <h2 > Account Details</h2></div>
    

    
    {/* <div class="float-container">

  <div class="float-child1">
    <div>
        <img src={img1} alt=""/>
    </div>
  </div>
  
  <div class="float-child2">
    <div className='bank2'><h2>Account Details</h2></div>   
    <table>
      <tr>
        <td class="bank">Account No</td>
        <td>{user.accountNo}</td>
      </tr>
      <tr>
        <td class="bank">IFSC No</td>
        <td>{user.ifsccode}</td>
      </tr>
      <tr>
        <td class="bank">Branch</td>
        <td>{user.branch}</td>
      </tr>
      <tr>
        <td class="bank">Account Type</td>
        <td>{user.accountType}</td>
      </tr>
      <tr>
        <td class="bank">Account Holder Name</td>
        <td>{user.accountHoldername}</td>
      </tr>
      <tr>
        <td class="bank">Balance</td>
        <td>{user.balance}</td>
      </tr>
      </table>  
  </div>
</div> */}

{/* 
<div className='left'>
<Table  responsive="md"striped bordered hover variant="secondary">
<tr>
        <td class="bank">Account No</td>
        <td class="bank1">{user.accountNo}</td>
      </tr>
      <tr>
        <td class="bank">IFSC No</td>
        <td class="bank1">{user.ifsccode}</td>
      </tr>
      <tr>
        <td class="bank">Branch</td>
        <td class="bank1">{user.branch}</td>
      </tr>
      <tr>
        <td class="bank">Account Type</td>
        <td class="bank1">{user.accountType}</td>
      </tr>
      <tr>
        <td class="bank">Account Holder Name</td>
        <td class="bank1">{user.accountHoldername}</td>
      </tr>
      <tr>
        <td class="bank">Balance</td>
        <td class="bank1">{user.balance}</td>
      </tr>
      </Table>
    </div> */}



      
      {/* <thead >
          <tr>
            <th >Account Number</th>
            <th >IFSCcode</th>
            <th >Branch</th>
            <th > Account type</th>
            <th >Account Holder Name</th>
            <th >Balance</th>
          </tr>
        </thead>
      <tbody>
      
          {user.map((user, num) => (
            <tr>
              <th scope="row">{num + 1}</th>
              <td>{user.accountNo}</td>
              <td>{user.ifsccode}</td>
              <td>{user.branch}</td>
              <td>{user.accountType}</td>
              <td>{user.accountHoldername}</td>
              <td>{user.balance}</td>
            </tr>
          ))}
        </tbody>
       */}


<MDBContainer className="py-5">
              <MDBRow>
                  <MDBCol lg="4">
                    <MDBCard className="mb-4">
                      <MDBCardBody className="text-center">
                        <MDBCardImage
                          src="https://img.freepik.com/free-vector/employees-cv-candidates-resume-corporate-workers-students-id-isolate-flat-design-element-job-applications-avatars-personal-information_335657-2605.jpg?w=740&t=st=1669786588~exp=1669787188~hmac=cdff61c67d20be92d300e18e86de99c8d4e070f37e6b919f5871b70a53ca7025"
                          alt="avatar"
                          className="rounded-circle "
                          style={{width: '30vw' ,height:'40vh', marginLeft:"auto",marginRight:"auto"}}
                          fluid  /><br/>
                        
                        
                        
   
                      
                        <br></br>
                        
                        <div className="d-flex justify-content-center mb-2">
                          
                        </div>
                        
                      </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                  <MDBCol lg="8">
                    <MDBCard className="mb-4">
                      <MDBCardBody>
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText style={{fontFamily:"sans-serif"}}><i class="bi bi-person-fill"></i>&nbsp;&#160;<b>Account No</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText style={{ marginLeft:'12vw'}} className="text-muted">{user.accountNo}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText style={{fontFamily:"sans-serif"}}><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>IFSC Code</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText  style={{ marginLeft:'12vw'}} className="text-muted">{user.ifsccode}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText style={{fontFamily:"sans-serif"}}><i class="bi bi-envelope-fill"></i>&#160;&#160;<b>Branch</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText  style={{ marginLeft:'12vw'}} className="text-muted">{user.branch}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                       
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText style={{fontFamily:"sans-serif"}}><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Account Type</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText style={{ marginLeft:'12vw'}} className="text-muted">{user.accountType}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText style={{fontFamily:"sans-serif"}}><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Account Holder Name</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText style={{ marginLeft:'12vw'}} className="text-muted">{user.accountHoldername}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText style={{fontFamily:"sans-serif"}} ><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Balance</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText style={{ marginLeft:'12vw'}} className="text-muted">{user.balance}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        
                        
                        
                       
                       
                      </MDBCardBody>
                    </MDBCard>
                    </MDBCol>
                </MDBRow>
              </MDBContainer>


    


    





    </div>
</div>

  )
};


export default AccountDetails
