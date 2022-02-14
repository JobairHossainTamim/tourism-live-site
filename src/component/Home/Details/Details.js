import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import './Detail.css';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const Details = () => {
    const{user}=useAuth();
    const { serviceId } = useParams();
    const [service,setService]=useState([]);
    useEffect(()=>{ 
        fetch(`https://bloodcurdling-goosebumps-61094.herokuapp.com/service/${serviceId}`)
        .then(res=>res.json())
        .then(data=>setService(data));
    },[]);

    const addToOrder=() => {
        const data =
            {  
                "email":user.email,
                "name": service.name,
                "price":service.price,
                "status":"pending"
            };
            axios.post('https://bloodcurdling-goosebumps-61094.herokuapp.com/cart',data)
            .then(res=>{
                if(res.data.insertedId){
                    alert("Data Add Succuss");
                    
                }
            })            
        
        

            


        
    }

    return (
        <div>
          <section className="p-5" id="learn">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md">
                    <div className="img-sector">
                    <img src={service.img} className="img-fluid " alt=""/>
                    </div>
                  
                </div>
                <div className="col-md p-5">

                    <h2>{service.name}</h2>
                    <h4 className="lead">
                       Place : {service.place}
                    </h4>
                    <h4> Day Spend : {service.day} day</h4>
                    <h4 className="text-danger"> Offer Price : {service.day}</h4>
                      <button className="btn btn-primary" onClick={addToOrder}>Book Now</button>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Details;