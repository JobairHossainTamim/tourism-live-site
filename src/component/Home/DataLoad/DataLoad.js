import React from 'react';
import { Link } from 'react-router-dom';
import './LoadData.css';

const DataLoad = (props) => {
    const {name,img,price,_id}=props.service;
    return (
        <div>
            {
              <div className="profiles">
                  <img src={img} alt=''  />
                  <div className="my-4">
                  <h3>Service Name : {name}</h3>
                  <h4>Only On : {price} $</h4>
                  <Link to={`/service/${_id}`}>
                  <button className="btn btn-primary">Show Details</button>
                  </Link>
                  </div>
                
                  
              </div>
           }

        </div>
    );
};

export default DataLoad;