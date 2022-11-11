import React from 'react';
import { NavLink, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()
    // console.log(error);
    return (
        <div className=''>
            <h1 className="font-extrabold text-5xl text-center text-blue-900 leading-tight  mt-40">
                You are all alone here
            </h1>
            <p className="font-extrabold text-8xl my-39 text-center text-blue-900 animate-bounce">
                404
            </p>
            <p className='text-center text-blue-900 leading-tight'>{error.message}
            </p>
            <p className='text-center text-blue-900 leading-tight'> Back To <NavLink to='/'><span className='text-bold underline'>Home</span></NavLink></p>
              
        </div>
    );
};

export default ErrorPage;