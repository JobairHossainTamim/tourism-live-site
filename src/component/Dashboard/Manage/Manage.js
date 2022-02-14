import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';

const Manage = () => {
    const [manage,setManage]=useState([]) ;


    useEffect(()=>{
        fetch('https://bloodcurdling-goosebumps-61094.herokuapp.com/cart')
        .then(res=>res.json())
        .then(data=>setManage(data))
    },[]);

    const updateData=(id) => {

        
        const updatedState={status:"approved"};
        setManage(updatedState);
        

        fetch(`https://bloodcurdling-goosebumps-61094.herokuapp.com/cart/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(manage)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        

    }
    return (
        <div>
            <Table striped bordered hover>
  <thead>
    <tr>
      <th>id</th>
      <th>Email</th>
      <th>Service</th>
      <th>Price</th>
      <th>Status</th>
      <th>Option</th>
    </tr>
  </thead>
  <tbody>
   {
     manage?.length === 0 ?
     <div className=" justify-content-center">
                    <Spinner  animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    </div>
     :
     manage.map(item => 
      <tr key={item._id}>
        <td>{item._id}</td>
        <td>{item.email}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>{item.status }</td>
        <td><button  className="btn btn-primary">State Change</button></td>
      </tr>
     )
   }
  </tbody>
</Table>
        </div>
    );
};

export default Manage;