import {useEffect, useState} from "react";
import { FaUser, FaEnvelope, FaLock, FaGenderless, FaMale, FaFemale } from 'react-icons/fa';

import './App.css';

function App() {

// const[events,updateEvents]= useState({});

const [newUser,updateNewUser] = useState({firstName:"",lastName:"",emailId:"",password:"",gender:"",accounttype:""});


useEffect(()=>{

  let targetapi = "http://localhost:3001/events/newuser";

  fetch(targetapi).then(response => response.json()).then(response =>{
    updateNewUser(response);
  } )
},[])

const handleSubmit = (e)=> {
  e.preventDefault();
  let targetapi = "http://localhost:3001/events/newuser";


 
    const requestOptions = {

      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newUser)
    }
    alert(JSON.stringify(newUser));
   fetch(targetapi, requestOptions).then(response => response.json())
   .catch(error =>{

    console.error("there was an error!", error);
   } )}

  


  return (
<div className="app">
<h1> Registration </h1>
   
      <form className="registration-form" onSubmit={handleSubmit}>

      <div className="radio-button-container">
      <label>
        <input
          type="radio"
           value="personal"
          checked={newUser.accounttype === 'personal'}
          onChange={(e)=>updateNewUser({...newUser,accounttype:e.target.value})}
        />
        Personal
        <input
          type="radio"
           value="business"
          checked={newUser.accounttype === 'business'}
          onChange={(e)=>updateNewUser({...newUser,accounttype:e.target.value})}
        />
        Business
      </label>
    </div>
      <div >
      <label>

      <FaUser className="styleicon"/>

        <input class="input-field" type="text" 
        value={newUser.firstName}
        onChange={(e)=>updateNewUser({...newUser,firstName:e.target.value})} />
</label>
        </div>
        <div >
        <label>

        <FaUser className="styleicon"/>
        <input class="input-field" type="text" 
        value={newUser.lastName}
        onChange={(e)=>updateNewUser({...newUser,lastName:e.target.value})} />
</label>
        </div>
        <div >

        <label>
          <FaEnvelope className="styleicon"/>
                  <input class="input-field" type="text" 
        value={newUser.emailId}
        onChange={(e)=>updateNewUser({...newUser,emailId:e.target.value})} />
</label>
        </div>
        <div >
        <label>
          <FaLock className="styleicon"/>
        <input class="input-field" type="password" 
        value={newUser.password}
        onChange={(e)=>updateNewUser({...newUser,password:e.target.value})} />
</label>
        </div>
         
        <div className="gender-radio">
        <label>
          <FaMale/>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={newUser.gender === 'male'}
            onChange={(e)=>updateNewUser({...newUser,gender:e.target.value})} 
          />
        Male
        <FaFemale/>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={newUser.gender === 'female'}
            onChange={(e)=>updateNewUser({...newUser,gender:e.target.value})}
          />
          Female
        </label>
      </div>

        <button type="submit"> Submit </button>


      </form>
      </div>
      );

  }
export default App;
