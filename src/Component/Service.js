import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Service = ({service}) => {
    // console.log(service);
    const {imgUrl,price,serviceName,sort,_id}=service
    return (
        <div className="card card-compact p-4 bg-neutral shadow-xl">
            <figure><PhotoProvider><PhotoView src={imgUrl}><img src={imgUrl}alt="Services" /></PhotoView></PhotoProvider></figure>
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{sort.slice(0,100)} <span>. . .</span> </p>
                <div className="card-actions justify-between">
                    <div>
                        <p className='text-4xl'>${price}</p>
                    </div>
                    <Link to={`../service/${_id}`}><button className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Service;