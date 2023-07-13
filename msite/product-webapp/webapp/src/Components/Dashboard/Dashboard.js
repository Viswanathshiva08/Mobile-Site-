import React from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import './Dashboard.css'
import NavBar from '../Navbar/NavBar';
import { useNavigate } from 'react-router';










function Dashboard() {
  const navigate=useNavigate();
  function userProfile(){
    navigate("/Profile")
  }
  function account(){
    navigate("/accountDetails")
  }
  function payment(){
    navigate("/Home")
  }
  function card(){
    navigate("/Main")
  }
  return (
    
    <div>
      <NavBar></NavBar> 
    <div className='dashboard'>
      
    
    
  <Container>
  
  <div class="card2">
  
    
     <img  align = 'left'width = '130px' className='img2' style={{display:'flex !important' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9WWAC4XM5zsFKZkPe2OU24BjAB5arQFN2IvJomJXmDp2qdHAQSB1mGVDpWbnTmWYgpg&usqp=CAU'/> 
      
      <div>
      <div className='text2'>
     <a onClick={userProfile}> <h2 style = {{color:'black'}} >User details</h2></a>
        
        
          <p>User can check and update their informations associated with the bank<a href="/Profile" ></a></p>
        
       
  
        </div>
        </div> 
     </div>

    </Container>
   

    <Container>
  
  <div class="card3">
  
    
     <img  align = 'left'width = '130px' className='img3' style={{display:'flex !important' }} src='data:image/png;base64,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'/> 
      
      <div className='text3'>
      <a onClick={payment}><h2 style={{color:"black"}}>Payment  details</h2></a>
        
        
          <p>User can make payment and view their transaction history</p>
        
       
        
      
      
        </div>
       
  </div>
    

     <div>

     </div>
    </Container>


<Container>
 <div class="card4">
     <img  align = 'left'width = '130px' className='img4' style={{display:'flex !important' }} src='http://cdn.onlinewebfonts.com/svg/img_220387.png'/> 
      <div className='text4'>

      <a onClick={account} ><h2 style={{color:"black",}}>Account details</h2></a> 
        
        
          <p>User can view their account details and update their existing details</p>
      
        </div>
       
  </div>
    </Container>

    <Container>
  
  <div class="card5">
  
    
     <img  align = 'left'width = '130px' className='img5' style={{display:'flex !important' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGEjkQ8-jzM8PE3ITAuI_9-pmV3fgk-C7Pu86Q_dKudrn7VtxyXutQcv8FmwMSl0F7nv8&usqp=CAU'/> 
      
      <div className='text5'>
      <a onClick={card}><h2 style={{color:"black"}}>Card settings</h2></a>
        
        
          <p>User can check and update their card details  </p>
      
        </div> 
       
  </div>
     <div>

     </div>
    </Container>

</div>
</div>

  
  )
}

export default Dashboard