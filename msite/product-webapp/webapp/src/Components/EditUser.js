import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { getForget } from "../service/forget.service";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const EditUser = () => {
  const [user, setUser] = useState({
      username: "",
      password: "",
    
    });
    const [msg, setMsg] = useState("");
  
    
     const navigate = useNavigate();
  
    
  
    const handleChange = (e) => {
      const value = e.target.value;
      setUser({ ...user, [e.target.name]: value });
    };
  
   
    function forget(e){
      e.preventDefault();
      let data = {
        "username":user.username,
        "password":user.password
      }
      getForget(
        data
      ).then((res) => {
        console.log(res);
        navigate("/Login")
        
      })
      .catch((error)=>{
        console.log(error)
        if(error){
          setMsg("Plz!.. Write your Correct Username")
        }
      });

    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
  


    return (
    
      <><a style={{cursor:'pointer',color:'Red'}} onClick={handleShow}>Forget Password!</a><Modal
    show={show}
    onHide={handleClose}
    backdrop="static"
    keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Forget Password </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card-header text-left fs-3">
                  
                  {msg && <p className="text-danger">{msg}</p>}
                </div>
  
                <div className="card-body">
                  <form >
                    <div className="mb-3">
                      <label>Enter UserName</label>
                      <input
                        type="text"
                        className="form-control"
                        name="username"
                        value={user.username}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
  
                    <div className="mb-3">
                      <label>Enter New Password    </label>
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        value={user.password}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {/* <div className="text-center">
                      <button className="btn btn-success" onClick={forget}>Submit</button>
                    </div> */}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <button className="btn btn-success" onClick={forget}>Submit</button>
      </Modal.Footer>
    </Modal></>

    );
}

export default EditUser
