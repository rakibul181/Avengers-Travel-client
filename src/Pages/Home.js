import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { ArrowRightIcon, } from '@heroicons/react/24/solid'
import Hero from '../Component/Hero';
import './Home.css'
import Service from '../Component/Service';

const Home = () => {
    const services = useLoaderData()
    return (
        <div>
            <Hero></Hero>
            <div>
                <h1 className='text-5xl text-center text-secondary font-bold my-10'>Our Services</h1>
                <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <div className='flex justify-center my-6'>
                    <Link className=''><button className='btn btn-secondary btn-outline'>More <ArrowRightIcon className='  className="h-6 w-6 text-white"'></ArrowRightIcon> </button></Link>

                </div>
            </div>
        </div>
    );
};

export default Home;