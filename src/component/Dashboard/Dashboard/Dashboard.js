import React from 'react';
import { Link } from 'react-router-dom';
import Manage from '../Manage/Manage';
import Service from '../Service/Service';

const Dashboard = () => {
    return (
        <div>
            <div className="container">
                <div className="row my-4">
                    <div className="border border-1 border-primary">
                        <h1> Service Option  </h1> 
                    </div>
                    <Service></Service> 
                    <div className="border border-1 border-primary my-5">
                        <h1> All User State  </h1> 
                        <Manage></Manage>


                    </div>
                </div>
               
            </div>
           
        </div>
    );
};

export default Dashboard;