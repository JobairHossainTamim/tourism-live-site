import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import useAuth from './../../Hooks/useAuth';
const Header = () => {
  const {user , logOut,setUser}=useAuth();
  const logout=() => {
    logOut();
    setUser({});
  }
    return (
        <div>
            <header>
        <div className="logo">
          <h1>TPlanner </h1>           
        </div>
        <input type="checkbox" id="nav-toggle" className="nav-toggle" ></input>
        <label htmlFor="nav-toggle" className = "nav-toggle-label"> 
          <span className="label-span"></span> 
        </label>
        <nav> 
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/order">My Order</Link></li>
            <li><Link to="/planning">Our Achievement</Link></li> 
            
            {
                user.email?
                <li onClick={logout}><Link to="/login">Logout </Link></li> 
                  
                :
                <li><Link to="/login">Login</Link></li>  
            } 
            {
              user.email &&
              <li><Link to="/dashboard">Dashboard</Link></li>  
            }
            
          </ul>
        </nav>
      </header>
        </div>
    );
};

export default Header;