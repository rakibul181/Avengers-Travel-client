import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServicesDetails = () => {
    const { imgUrl, price, serviceName, sort, _id, details } = useLoaderData()
    return (
        <div>
            <div className=" mt-8">
                <img
                    className="object-cover w-full h-56 sm:h-96"
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                    alt=""
                />
                <div className=" inset-0 bg-gray-900 bg-opacity-20" />
            </div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">

                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">

                        {serviceName}
                    </h2>
                    <p className="text-base text-gray-50 md:text-lg">
                        {
                            sort
                        }
                    </p>
                </div>
                <div className="mx-auto lg:max-w-2xl">
                    <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
                        <img
                            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
                            src={imgUrl}
                            alt=""
                        />
                        <p className='text-5xl mt-8 text-center'>
                            Price: ${price}
                        </p>
                        <p className="text-base mt-10 text-justify text-gray-50 md:text-lg">
                            {
                                details
                            }
                        </p>
                    </div>
                </div>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default ServicesDetails;