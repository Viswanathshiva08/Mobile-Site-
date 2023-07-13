import React from 'react'
import { useState } from 'react';

import { useNavigate } from "react-router";
import { addUser,loginuser } from '../../service/userserviceprofile';


import  EditUser from '../EditUser'
import './Login.css';
import {
	MDBCol,
	MDBContainer,
	MDBRow,
	
  } from 'mdb-react-ui-kit';

  import { MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';


export default function Login() {

	
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




	const [showSignin, setshowSignin] = useState(true);
	const [showSignUp, setshowSignUp] = useState(false);





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
		 setshowSignin(true),
		 setshowSignUp(false)
		 )
		 .catch((error)=>console.error(error))
		}

 
	const Navigate=useNavigate()
	
	const login=(e)=>{
		e.preventDefault()

		let userdata={
			"username":username,"password":password

		}
		

		 loginuser(userdata)
		.then((data)=>{console.log(data);localStorage.setItem('username',username);
		if(data.data){
			Navigate("/Dashboard")
		}
		}
		)
		.catch((error)=>{console.error(error);
			if(error){setErrormessage('Please enter Correct username and password');}
			
			console.log(errorMesaage)

		})
		
	}


	


	
	const SignIn=(e)=>{

		setshowSignin(true)
		setshowSignUp(false)
	}

	
	const SignUp=(e)=>{

		Navigate("/Register")
		
	}




	return (

		
		
<MDBContainer fluid className="  p-2 my-5 h-custom  Loginpage" >
	
		{ showSignin &&

		

			<MDBContainer fluid className="p-2 my-5 h-custom " >
				<div className='logo1'>
<img src='https://play-lh.googleusercontent.com/zTPmNq1iG9UAOOqANdIbzAq93ozmlfD4mtv1l_2n-pJ-a_evQDNFh7II670y3uWXj8SN' height='80vh' borderRadius= '5px' ></img>
  <span className="lead fw-normal mb-0 me-3" style={{fontWeight:"bolder",fontFamily:"cursive"}}>- &nbsp;&nbsp;Works For You </span>
  </div>

<MDBRow>

  <MDBCol col='10' md='6'>
	<img src="https://img.freepik.com/free-vector/sign-page-abstract-concept-illustration_335657-3875.jpg?w=740&t=st=1670093491~exp=1670094091~hmac=8e76627ca035bc81f660c78ed6c4a77fbbd3d71b2cf33b7f03323ff545136e74" class="img-fluid" alt="Sample image"  style={{ mixBlendMode: 'multiply'}}/>
  </MDBCol>

  <MDBCol col='4' md='6' style={{marginTop:"10vh"}}>
  

	<div className="d-flex flex-row align-items-center justify-content-center" style={{paddding:'10vh'}}>
		

	  <p className="lead fw-normal mb-0 me-3" ><h2 style={{paddding:'20vh'}} >Sign in</h2> </p>


	</div>



	<MDBInput wrapperClass='mb-4' label='Username'  id='formControlLg' type='text' size="lg"  value={username} onChange={(e) => setName(e.target.value) }/>
	<MDBInput wrapperClass='mb-4' label='Password'  id='formControlLg' type='password' size="lg"  value={password} onChange={(e) => setPassword(e.target.value) }/>
	<p className='forget1'>{errorMesaage}</p>

	<div className="d-flex justify-content-between mb-4">
	<EditUser/>
	</div>

	<div className='text-center text-md-start mt-4 pt-2'>
	  <MDBBtn className="mb-0 px-5" size='lg' onClick={login} >Login</MDBBtn>
	  <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <a className="link-danger" onClick={SignUp}>Register</a></p>
	</div>

  </MDBCol>

</MDBRow>



</MDBContainer>


		}


{/* SignUp */}


 
{/* { showSignUp &&
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
	  <p className="small fw-bold mt-2 pt-1 mb-2">Already a registered user?<a className="link-danger"onClick={SignIn}>&nbsp;&nbsp;&nbsp;Login</a></p>
	</div>

  </MDBCol>

</MDBRow>



</MDBContainer>
} */}



		
	
</MDBContainer>
		
)
} 
		


	
		
		
		
		
		
		
		
		
		

		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

		
		
