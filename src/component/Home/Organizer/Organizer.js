import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import CartDetails from './CartDetails';
import './Organizer.css';

const Organizer = () => {
    const {user}=useAuth();
    const email=user?.email;
    const uri=`https://bloodcurdling-goosebumps-61094.herokuapp.com/cart/${email}`;
   const [order,setOrder]=useState([]);
   
    useEffect(()=>
    {
        fetch(uri)
        .then(res=>res.json())
        .then(data=>{setOrder(data)})
    }
    ,[]);


    const deleteData= (id) => {
      fetch(`https://bloodcurdling-goosebumps-61094.herokuapp.com/cart/${id}`,{
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data =>{
        if (data.deletedCount > 0) {
          alert('deleted successfully');
          const remainingUsers = order.filter(user => user._id !== id);
          setOrder(remainingUsers);
      }
      });
    }
    return (
        <div>
            <h1 className="text-primary mt-5">My Order Review</h1>
            {/* {<h1>email</h1>} */}
<div className="container">
<Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Service</th>
      <th>Price</th>
      <th>Status</th>
      <th>Option</th>
    </tr>
  </thead>
  <tbody>
   {
     order.length === 0 ?
     <div className="d-flex justify-content-center">
                    <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
     :
     order.map(item => 
      <tr key={item._id}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.status}</td>
        <td><button onClick={()=>deleteData(item._id)} className="btn btn-primary">Delete</button></td>
      </tr>
     )
   }
  </tbody>
</Table>
</div>
          
          
             
          
        </div>
    );
};

export default Organizer;