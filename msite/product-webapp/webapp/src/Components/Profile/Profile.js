import React from 'react'
import axios from "axios";
import { getPayBycustomerName } from '../../service/pay.service';
import { useEffect,useState} from "react";
import { showUser } from '../../service/profileservice';
import NavBar from '../Navbar/NavBar';
import { useNavigate } from "react-router-dom";
import './profile.css'
import Button from 'react-bootstrap/Button';


import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
  } from 'mdb-react-ui-kit';







function Profile(){
    const [user, setUser] = useState({});
    const [] = useState("");
    useEffect(() => {    
      init();
    }, []);
    const init = () => {
      const username=localStorage.getItem('username')
    
        showUser(username)
        .then((res) => {
          console.log(res);
          setUser(res.data);
          
        })
        .catch((error) => {
          console.log(error);                           
        });
    };
   


    const navigate = useNavigate();
	function updateUserinfo (){
	  navigate("/updateprofile")
  }





  return (
    
    <div>
        <NavBar></NavBar>
    <div className='Profile'>
    {/* <h2 style={{textAlign: 'center'}}> Profile settings</h2>  */}
        <MDBContainer className="py-5">
              <MDBRow>
                  <MDBCol lg="4">
                    <MDBCard className="mb-4">
                      <MDBCardBody className="text-center">
                        <MDBCardImage
                          src="https://cdn.pixabay.com/photo/2016/10/14/15/45/icon-1740415_960_720.png"
                          alt="avatar"
                          className="rounded-circle "
                          style={{ width: '150px' , marginLeft:"auto",marginRight:"auto"}}
                          fluid  /><br/>
                        <p className="text-muted mb-1"><b>{user.username}</b></p>
                        
                        <Button variant="primary" onClick={updateUserinfo}>Update</Button>
   
                      
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
                            <MDBCardText><i class="bi bi-person-fill"></i>&nbsp;&#160;<b>Username</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.username}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>User Email</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.email}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-envelope-fill"></i>&#160;&#160;<b>Contact No</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.contactno}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                       
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>House No</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.houseNo}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Street Name</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.streetName}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Area</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.area}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>City </b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.city}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Country</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.country}</MDBCardText>
                          </MDBCol>
                        </MDBRow>
                        <hr />
                        <MDBRow>
                          <MDBCol sm="3">
                            <MDBCardText><i class="bi bi-person-vcard-fill"></i>&#160;&#160;<b>Pincode</b></MDBCardText>
                          </MDBCol>
                          <MDBCol sm="9">
                            <MDBCardText className="text-muted">{user.pincode}</MDBCardText>
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
}

export default Profile