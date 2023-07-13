import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { savePay } from "../service/pay.service";
import './AccountDetails.css'
import { updateBalence } from "../service/user.service";
import NavBar from "./Navbar/NavBar";
import './AddPay.css'



const AddPay = () => {
  const [pay, setPay] = useState({
    customerName: localStorage.getItem("username"),
    beneficiaryIfsccode: "",
    beneficiaryAccountnumber: "",
    email: "",
    phoneNumber: "",
    amount: "",
    description: "",
  });
  const [msg , setMsg] = useState("");

  

  const handleChange = (e) => {
    const value = e.target.value;
    setPay({ ...pay, [e.target.name]: value });
  };

  const navigate = useNavigate();
  function home (){
    navigate("/Home")

  }

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement('script')
      script.src = src
      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }
      document.body.appendChild(script)
    })
  }

  const payment = async (amount) => {
    const script = await loadScript("https://checkout.razorpay.com/v1/checkout.js")
    if (!script) {
      alert('razorpay failed to load')
      return
    }
    let option = {
      key: "rzp_test_1Ciavp4Q4u9nKS",
      amount: amount*100,
      name: "M-Site",
      description: "payment",
      handler: function (res) {
        onSuccess(res);
      },
      "prefill": {
        "name": pay.customerName,
        "email": pay.email,
        "contact": pay.phoneNumber,

      }
    };
    let razorpay = new window.Razorpay(
      option
    )
    razorpay.open();
  }

function onSuccess(res){
  console.log("Inside onsuccess method", res)
  if (res.razorpay_payment_id) {
    let obj = {
      "customerName": localStorage.getItem("username"),
      "beneficiaryIfsccode": pay.beneficiaryIfsccode,
      "beneficiaryAccountnumber": pay.beneficiaryAccountnumber,
      "email": pay.email,
      "phoneNumber": pay.phoneNumber,
      "amount": pay.amount,
      "description": pay.description
    }
    savePay(obj).then((res) => { console.log("save details", res) }).catch((err) => { console.log(err) 
      if(err){
        setMsg("Plz!.. Fill Correct Details")
      }
    });
    let userdata={"username":pay.customerName,"balance":pay.amount}
    updateBalence(userdata).then((res)=>{console.log(res)}).catch(err=>{console.log(err)})
  }
  
}

  
  return (
    <div>
      <NavBar></NavBar>
      <div className="addpay">
    <div className="container-boarder">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header text-center fs-3" style={{fontFamily:" sans-serif"}}>
              Beneficiary Details
              {msg && <p className="text-success">{msg}</p>}
            </div>

            <div className="card-body">
              <div >
                <div className="mb-3">
                  <label>Enter Customer Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="customerName"
                    value={pay.customerName}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Beneficiary IFSC Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="beneficiaryIfsccode"
                    value={pay.beneficiaryIfsccode}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Beneficiary Account Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="beneficiaryAccountnumber"
                    value={pay.beneficiaryAccountnumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter Email </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={pay.email}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter phoneNumber</label>
                  <input
                    type="text"
                    className="form-control"
                    name="phoneNumber"
                    value={pay.phoneNumber}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="mb-3">
                  <label>Enter amount</label>
                  <input
                    type="number"
                    className="form-control"
                    name="amount"
                    value={pay.amount}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
                <div className="mb-3">
                  <label>Enter description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="description"
                    value={pay.description}
                    onChange={(e) => handleChange(e)}
                  />
                </div>

                <div className="text-center">
                  <button className="btn btn-success" onClick={() => payment(pay.amount)}><h3>....Pay....</h3></button>
                  <button className="btn btn-warning ms-2" onClick={home}><h3>History</h3></button>
                  {/* <input
                    type="Reset"
                    className="btn btn-secondary ms-2"
                    value="History"
                  /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default AddPay;