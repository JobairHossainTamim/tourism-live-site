import React from 'react';

const About = () => {
    const img_Lg ="https://images.pexels.com/photos/3830945/pexels-photo-3830945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";
    return (
        <div>
            <section className="p-5 bg-dark text-light" id="learn">
        <div className="container">
            <div className="row align-items-center justify-content-between">
                <div className="col-md p-5">
                    <h2>We Try To Give you Best Price</h2>
                    <p className="lead">
                    The best travel quotes are often the deepest and most powerful. As a travel blogger, I always look to travel quotes for guidance, wanderlust, and inspiration. For years, I’ve been collecting quotes about travel while traveling the world, and always enjoy reflecting on them in my day-to-day life. Everyone has a different lens through which they view the world, which is why it’s important to heed the advice and insight of others.

                    </p>
                    <p>
                    “A journey of a thousand miles begins with a single step” – Lao Tzu
                    </p>
                        <a href="" className="btn btn-light mt-3">
                            <i className="bi bi-chevron-right"></i> Read More
                        </a>
                </div>
                <div className="col-md">
                    <img src={img_Lg} className="img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default About;