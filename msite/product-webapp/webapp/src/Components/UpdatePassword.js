import React from 'react'
import { useNavigate } from "react-router-dom";
import { getForget } from "../service/forget.service";
import { useState,useEffect} from "react";
import './UpdatePassword.css'
import NavBar from './Navbar/NavBar';
import { showUser } from '../service/profileservice';

const UpdatePassword = () => {
    const [user, setUser] = useState({
        username: localStorage.getItem("username"),
        password: "",
        oldpassword:""
      
      });
      
      const [msg, setMsg] = useState("");
      const [] = useState("");
      
      

      const navigate = useNavigate();

      const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
      };


      function forget(e){
        e.preventDefault();
        let data = {
          "username":localStorage.getItem("username"),
          "password":user.password
        }
        showUser(data.username)
          .then((res) => {
            console.log(res);
          if(res.data.password==user.oldpassword){
            getForget(
              data
            ).then((res) => {
              console.log(res);
              navigate("/Dashboard")
              
            })
          }
        else{
          setMsg("Give your correct old password")
        }})
        
         
      }
        
      return (
        <div>
          <NavBar></NavBar>
       
        <div className='update'>
          <div className="container-md">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="card">
                  <div className="card-header text-center fs-3">
                    Upadate Password 
                    {msg && <p className="text-danger">{msg}</p>}
                  </div>
    
                  <div className="card-body">
                    <form >
                      <div className="mb-3">
                        <label>Enter username</label>
                        <input
                          type="text"
                          className="form-control"
                          name="username"
                          value={user.username}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="mb-3">
                        <label>Enter Old password    </label>
                        <input
                          type="password"
                          className="form-control"
                          name="oldpassword"
                          value={user.oldpassword}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
    
                      <div className="mb-3">
                        <label>Enter New password    </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          value={user.password}
                          onChange={(e) => handleChange(e)}
                        />
                      </div>
                      <div className="text-center">
                        <button className="btn btn-success" onClick={forget}>Submit</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      );
  }
  

export default UpdatePassword