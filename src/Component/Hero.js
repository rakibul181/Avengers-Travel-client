import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="bg-img-overly hero mt-8 rounded-lg  min-h-screen bg-base-200  ">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Hello <br /> <span className='text-orange-700'>Avengers Traveler's</span></h1>
                        <p className="py-6">Search our website for the best destinations in the world, where you can enjoy the best vacations.</p>
                        <Link to={'services'}><button className="btn btn-secondary">Get Started</button></Link>
                    </div>
                </div>
            </div>
    );
};

export default Hero;