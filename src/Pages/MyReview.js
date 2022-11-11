import React, { useContext, useEffect, useState } from 'react';
import UserReviewCard from '../Component/UserReviewCard';
import { AuthContext } from '../Contexts/AuthProvider';

const MyReview = () => {
    const { user, setLoading} = useContext(AuthContext)
    const [userReview, setUserReview] = useState([])

    useEffect(() => {
        fetch('https://avengers-travel-server.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                const currentUserReview = data.filter(review => user?.uid === review.userId)
                console.log(currentUserReview);
                setUserReview(currentUserReview)
            })
    }, [user])
    return (
        <div className='mt-9 grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-3'>
            {
                userReview.map(review=><UserReviewCard key={review._id} review={review}></UserReviewCard>)
            }
        </div>
    );
};

export default MyReview;