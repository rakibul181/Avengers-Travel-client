import React from 'react';
import { Link } from 'react-router-dom';

const UserReviewCard = ({review}) => {
const {serviceName,reviewText,_id}=review
    return (
        <div className="card   bg-neutral shadow-xl">
            <div className="card-body">
                <h2 className="card-title">{serviceName}</h2>
                <p>{reviewText}</p>
                <div className="card-actions mt-4 justify-between">
                   <Link > <button className="btn btn-sm btn-primary">Edit</button></Link>
                   <Link > <button className="btn btn-sm btn-primary">Delete</button></Link>
                </div>
            </div>
        </div>
    );
};

export default UserReviewCard;