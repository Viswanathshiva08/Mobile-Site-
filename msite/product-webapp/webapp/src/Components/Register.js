
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router";
import { addUser,loginuser } from '../service/userserviceprofile';
import { Navigate} from "react-router-dom";
import './Register.css'



import {
	MDBCol,
	MDBContainer,
	MDBRow,
	
  } from 'mdb-react-ui-kit';

  import { MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function Register() {

    const [username, setName] = useState('');
	const [email,setEmail]= useState('');
	const [password, setPassword] = useState([]);
	const [contactno,setcontactno]=useState('');
	const [accountNo,setAccountno]= useState('');
	const [ifsccode,setisfccode]= useState('');
	const [branch,setbranch]= useState('');
	const [accountType,setAccounttype]= useState('');
	const [accountHoldername,setAccountHoldername]= useState('');
	const [transactionPin,settransactionPin]= useState('');
	const [errorMesaage,setErrormessage]=useState('');





    const navigate = useNavigate();

    const onSubmitSignUp = (e) => {
        e.preventDefault()
         if(!username) {
             alert('Please add name')
             return
         }
 
         let user={
			"username":username,"email":email,"password":password,"contactno":contactno,"accountNo":accountNo,
			"ifsccode":ifsccode,"branch":branch,"accountType":accountType,"accountHoldername":accountHoldername,"transactionPin":transactionPin

		 }
		 addUser(user)
		 .then((data)=>console.log(data),
         SignIn()
		 
		 )
		 .catch((error)=>console.error(error))
		}
        const SignIn=(e)=>{
            
                navigate("/")
            

            
        }

        
	



  return (
    <div>
        <MDBContainer fluid className="p-3 my-5 h-custom" >
<div className='logo'>
  <img src='https://play-lh.googleusercontent.com/zTPmNq1iG9UAOOqANdIbzAq93ozmlfD4mtv1l_2n-pJ-a_evQDNFh7II670y3uWXj8SN' height='80vh' ></img>
  <span className="lead fw-normal mb-0 me-3" style={{fontWeight:"bolder",fontFamily:"cursive",marginTop:"-40vh"}}>- &nbsp;&nbsp;Works For You </span>
  </div>
<MDBRow style={{marginRight:'7vw'}}>

  <MDBCol col='10' md='6'>
	<img src="https://img.freepik.com/free-vector/unemployment-insurance-abstract-concept-vector-illustration-unemployment-benefits-lost-job-tired-stressed-businessman-claim-form-workers-compensation-paper-work-interview-abstract-metaphor_335657-1355.jpg?w=740&t=st=1669970620~exp=1669971220~hmac=7d54b92c7967bee53402a8745aa58e3e3985e8009dadeef719874c7aa6b40b73" class="img-fluid" alt="Sample image" height="100vh" style={{ mixBlendMode: 'multiply'}} />
  </MDBCol>
  

  <MDBCol col='4' md='6' style={{marginTop:"15vh"}}>
	

	<div className="d-flex flex-row align-items-center justify-content-center" style={{marginTop:'-10vh'}}>
		
		

	  <p className="lead fw-normal mb-4 me-3"><h2>Sign Up</h2> </p>


	</div>



	<MDBInput wrapperClass='mb-4' label='Username'  id='formControlLg' type='text' size="lg"  value={username} onChange={(e) => setName(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Email' id='formControlLg' type='email' size="lg"  value={email} onChange={(e) => setEmail(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg"  value={password} onChange={(e) => setPassword(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Contact Number' id='formControlLg' type='text' size="lg"  value={contactno} onChange={(e) => setcontactno(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Account Number' id='formControlLg' type='text' size="lg"  value={accountNo} onChange={(e) => setAccountno(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='IFSC Code' id='formControlLg' type='text' size="lg"  value={ifsccode} onChange={(e) => setisfccode(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Branch Name' id='formControlLg' type='text' size="lg"  value={branch} onChange={(e) => setbranch(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Account Type' id='formControlLg' type='text' size="lg"  value={accountType} onChange={(e) => setAccounttype(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Account Holder Name' id='formControlLg' type='text' size="lg"  value={accountHoldername} onChange={(e) => setAccountHoldername(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Transacion Pin' id='formControlLg' type='password' size="lg"  value={transactionPin} onChange={(e) => settransactionPin(e.target.value) }/>
	
	


	

	<div className='text-center text-md-start mt-4 pt-2'>
	  <MDBBtn className="mb-0 px-5" size='lg' onClick={onSubmitSignUp} >SignUp</MDBBtn>
	  <p className="small fw-bold mt-2 pt-1 mb-2">Already a registered user?<a  className="link-danger"onClick={SignIn}>&nbsp;&nbsp;&nbsp;Login</a></p>
	</div>

  </MDBCol>

</MDBRow>



</MDBContainer>



    </div>
  )
}

export default Register