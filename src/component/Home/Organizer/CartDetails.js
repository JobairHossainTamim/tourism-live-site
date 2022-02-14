import React from 'react';
import { Table } from 'react-bootstrap';
import "./CartDetails.css";

const CartDetails = (props) => {
    const {_id,name,price,status}=props.cart;

    const deleteData=(_id)=>{
        fetch(``, {method :"delete"})
        .then(res => res.json())
        .then(data=> {
            if(data.deletedCount>0)
            {
                alert('deleted successfully');
                
            }
            })

    }
    return (
        <div className="service pb-3 my-3">
        <h3>Service : {name}</h3>
        <h5>Price: {price}</h5>
        <p className="px-3">Status : {status}</p>
       <button onClick={deleteData} className="btn btn-primary">Delete</button>
    </div>
    );
};

export default CartDetails;