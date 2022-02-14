import React, { useEffect, useState } from 'react';
import DataLoad from '../DataLoad/DataLoad';
import './ShowService.css';
const ShowService = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch('https://bloodcurdling-goosebumps-61094.herokuapp.com/service')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])

    return (
        <div>
            <h4 className="text-primary my-4">All Service </h4>
            <div className="service-container">
                {
                    services.length === 0 ?
                    <div className="spinner-border  bottom-50 end-50 my-5" role="status">
                     <span className="visually-hidden">Loading...</span>
                   </div> :

        services.map(service=><DataLoad key={service._id} service={service}></DataLoad>)
                }
                
               
            </div>
        </div>
    );
};

export default ShowService;