import React from 'react';
import swal from 'sweetalert';
import {useNavigate } from 'react-router-dom';
import "./Login.css";

const Login = () => {

  const navigate = useNavigate();

  const loginUser = async() =>{
    
      navigate("/home");
    }
  

  return ( <>
             <div class="background">
  <div class="container">
    <div class="screen">
     
      <div class="screen-body">
        <div class="screen-body-item left">
          <div class="app-title">
            <span>SHOW NAMES </span>
            <span>& DETAILS</span>
          </div>
          <br/>
          
          
        </div>
        <div class="screen-body-item">
          <div class="app-form" >
         
            <div class="app-form-group buttons">
              <br/>
              
              <button class="btn btn-light" type="submit" name="signup" id="signup" onClick={loginUser}>Show details</button>
              {/* <button class="app-form-button">SEND</button> */}
            </div>
           
          </div>
        </div>   
      </div>
    </div>
    
  </div>
</div>

  </> 
  )
};

export default Login;
