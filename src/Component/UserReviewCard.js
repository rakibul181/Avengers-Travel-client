import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserReviewCard = ({ review }) => {
    const { serviceName, reviewText, _id } = review
    const [displayUsers, setDisplayUsers] = useState();
    const handelDeleteReviwe = () => {
        const agree = window.confirm(`Are you sure you want to delete Review`);

        if (agree) {
            // console.log('deleting user with id: ', user._id)
            fetch(`https://avengers-travel-server.vercel.app/review/${_id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data)
                    if (data.deletedCount > 0) {
                        alert('User deleted successfully.');
                        const remainingUsers = displayUsers
                            .filter(usr => usr._id !== _id);
                        setDisplayUsers(remainingUsers);
                    }
                });
        }
        
        
    }

return (
    <div className="card   bg-neutral shadow-xl">
        <div className="card-body">
            <h2 className="card-title">{serviceName}</h2>
            <p>{reviewText}</p>
            <div className="card-actions mt-4 justify-between">
                <Link > <button className="btn btn-sm btn-primary">Edit</button></Link>
                <Link onClick={handelDeleteReviwe} > <button className="btn btn-sm btn-primary">Delete</button></Link>
            </div>
        </div>
    </div>
);
};

export default UserReviewCard;