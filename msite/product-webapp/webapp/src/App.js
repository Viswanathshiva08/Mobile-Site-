import './App.css'
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCard from './Components/CardDetails/AddCard';
import { Routes ,Route, Link} from 'react-router-dom';
import Home from './Components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddPay from './Components/AddPay';
import './App.css';
import AccountDetails from './Components/AccountDetails';
import EditUser from './Components/EditUser';
import Profile from './Components/Profile/Profile';
import Navbar from './Components/Navbar/NavBar';
import UpdateProfile from './Components/Profile/updateProfile';
import Main from './Components/CardDetails/Main';
import UpdatePassword from './Components/UpdatePassword';
import Register from './Components/Register';

function App() {

  
  return (
   
    <div>      
      <Routes>    

        <Route path='/' element={< Login />}></Route>
        <Route path='/home' element={< Home />}></Route>
        <Route path='/accountDetails' element={< AccountDetails />}></Route>
        <Route path='/edituser' element={< EditUser />}></Route>
        <Route path='/updateProfile' element={< UpdateProfile />}></Route>
        <Route path='/AddCard' element={< AddCard />}></Route>
        <Route path='/Main' element={< Main />}></Route>
        <Route path='/updatePassword' element={< UpdatePassword/>}></Route>
        <Route path='/Register' element={< Register/>}></Route>

  
        <Route path='/addPay' element={< AddPay />}></Route>
        
        <Route path='/Dashboard' element={<Dashboard/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/Navbar' element={<Navbar/>}>
          




        </Route>
        
      </Routes>
  </div>
  );
}

  


export default App;


