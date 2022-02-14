import React from 'react';
import './Service.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Service = () => {
    const { register, handleSubmit ,reset} = useForm();

  const onSubmit = data => {
      console.log(data);
     axios.post('https://bloodcurdling-goosebumps-61094.herokuapp.com/service',data)
     .then(res=>{
         if(res.data.insertedId){
             alert("Data Add Succuss");
             reset();
         }
     })
    };
    
    
    return (
        <>
        <div className="add-service">
            <h1 className="text-danger">Add Service  </h1>

            {/* Add From */}
           
            <form onSubmit={handleSubmit(onSubmit)}>
            <input placeholder="Enter Service name" {...register("name")} />
            <input placeholder="Enter Visitor Place " {...register("place")} />
            <input type="number" placeholder="Enter  Day  Planned" {...register("day")} />
            <input placeholder="Enter  img url  " {...register("img")} />
            <input type="number" placeholder="Enter Price" {...register("price")} />
            <input type="submit" />
            </form>
          
           
        </div>
        </>
    );
};

export default Service;