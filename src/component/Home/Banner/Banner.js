import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';

const Banner = () => {
    const [banner,setBanner]=useState([]);
    useEffect(()=>{
         const url='https://bloodcurdling-goosebumps-61094.herokuapp.com/banner';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBanner(data));
    },[])
    const img1="https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    const img2="https://images.pexels.com/photos/3830880/pexels-photo-3830880.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    const img3="https://images.pexels.com/photos/5405596/pexels-photo-5405596.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
    return (
        <div>
            <Carousel>

                
                {
                banner.length=== 0 ?
                <h1>Please wate </h1>
                :
                
                banner.map(banner=>
                    <Carousel.Item key={banner._id}>
                       <img
                        className="size d-block img-fluid w-100 img-size"
                        src={banner.img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3> {banner.name}</h3>
                       
                    </Carousel.Caption>
                    </Carousel.Item>
                    )}
            </Carousel>
             <>
           
        </>
        </div>
    );
};

export default Banner;