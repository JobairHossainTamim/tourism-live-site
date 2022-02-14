import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className='error-body'>
              
        <div className="main">
              <div className="fof">
                  <h1 className="home_sector"><Link to='/home'>Go To Home Page </Link></h1>
                  <br/>
         <h1> Not Found!! Error 404 </h1>

              </div>
            
          </div>
      
  </div>
    );
};

export default NotFound;