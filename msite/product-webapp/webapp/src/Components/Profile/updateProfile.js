import React from 'react'
import { useNavigate} from "react-router-dom";
import { updateUserProfile } from '../../service/userprofileupdate';
import { useState ,useEffect} from 'react';
import './UpdateProfile.css'
import NavBar from '../Navbar/NavBar';
import { showUser } from '../../service/profileservice';

      
function UpdateProfile() {
    


        const [user, setUser] = useState({
            username: localStorage.getItem("username"),
            contactno:"",
            houseNo:"",
            streetName:"",
            area:"",
            city:"",
            state:"",
            country:"",
            pincode:"",          
          
          });
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
      
          const [msg, setMsg] = useState("");
        
          
           const navigate = useNavigate();
        
          
        
          const handleChange = (e) => {
            const value = e.target.value;
            setUser({ ...user, [e.target.name]: value });
          };
        

         function updateProfileInformation(e){
    e.preventDefault();
      let data = {
        "username":localStorage.getItem("username"),
        "contactno":user.contactno,
        "houseNo":user.houseNo,
        "streetName":user.streetName,
        "area":user.area,
        "city":user.city,
        "state":user.state,
        "country":user.country,
        "pincode":user.pincode
        
      }
      updateUserProfile(
        data
      ).then((res) => {
        console.log(res);
        navigate("/Profile")
        
      })
      .catch((error)=>{
        console.log(error)
        if(error){
          setMsg("Please fill correct informations")
        }
      });
    }










  return (
    <div>
      <NavBar></NavBar>
    <div className='Addcard'>
        <div className="container-md">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header text-center fs-3">
                  Update Profile Information
                  {msg && <p className="text-danger">{msg}</p>}
                </div>
  
                <div className="card-body">
                  <form >
                  <div className="mb-3">
                      <label>Enter Contact Number </label>
                      <input
                        type="text"
                        className="form-control"
                        name="contactno"
                        value={user.contactno}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Enter House No </label>
                      <input
                        type="text"
                        className="form-control"
                        name="houseNo"
                        value={user.houseNo}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
  
                    <div className="mb-3">
                      <label>Enter Street Name   </label>
                      <input
                        type="text"
                        className="form-control"
                        name="streetName"
                        value={user.streetName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Enter Area </label>
                      <input
                        type="text"
                        className="form-control"
                        name="area"
                        value={user.area}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Enter city   </label>
                      <input
                        type="text"
                        className="form-control"
                        name="city"
                        value={user.city}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Enter State    </label>
                      <input
                        type="text"
                        className="form-control"
                        name="state"
                        value={user.state}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Enter Country  </label>
                      <input
                        type="text"
                        className="form-control"
                        name="country"
                        value={user.country}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>

                    <div className="mb-3">
                      <label>Enter pincode  </label>
                      <input
                        type="text"
                        className="form-control"
                        name="pincode"
                        value={user.pincode}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>



                    <div className="text-center">
                      <button className="btn btn-success" onClick={updateProfileInformation}>Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        

        


    </div>
    </div>
  )
}

export default UpdateProfile