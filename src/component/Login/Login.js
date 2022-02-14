import React, { useState } from 'react';
import useFirebase from '../../Hooks/useFirebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Loin.css';
import useAuth from './../../Hooks/useAuth';
import { useHistory, useLocation } from 'react-router';



const Login = () => {
    const img="https://image.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg";

// Redirect with
const location=useLocation();
const history=useHistory();
const redirect_uri=location.state?.from || '/home';



const {handleGoogleSignIn , setUser }=useAuth();
    // Set Login in 
    const [email , setEmail] = useState('');
    const [error, setError] = useState('');
    const regWithGoogle=() => {
        handleGoogleSignIn()
        .then(result=>{
                history.push(redirect_uri);
                setUser(result.user);

        });
        ;
       
     
        
    }

    return (
        <div >
            <div className="login-part">
            <h1 >Are You Want To Access Please Login</h1> 
            
            </div>
            <button className="btn btn-primary" onClick={regWithGoogle}>Sign in With Google <i className="fab fa-google"></i> </button>
            <br/>
            <div className="login-card ">
                <img src={img} alt="" />
                <br/>
                
            </div>
            
        </div>
    );
};

export default Login;