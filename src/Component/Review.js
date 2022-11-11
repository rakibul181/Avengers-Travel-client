import React from 'react';

const Review = ({ r }) => {
    const { date, reviewText, userName, userPhotoUrl } = r
    return (
        <tr className='my-6'>
            <td className='bg-neutral mb-6'>
                <div className="flex   items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={userPhotoUrl} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{userName}</div>
                        <div className="text-sm opacity-50">{date.split('GMT')[0]}</div>
                    </div>

                </div>
                <div>
                    {reviewText}
                </div>
            </td>

        </tr>
    );
};

export default Review;