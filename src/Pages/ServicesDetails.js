import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider';

const ServicesDetails = () => {
    const { imgUrl, price, serviceName, sort, _id, details } = useLoaderData()
    const { user } = useContext(AuthContext)

    const hendelSubmitRevieew = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const reviewText = e.target.review.value

        const review = {
            date: Date(),
            email: email,
            userPhotoUrl: user?.photoURL,
            serviceName: serviceName,
            service_id: _id,
            reviewText: reviewText,
            userName: user?.displayName

        }
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(review)

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    alert('Service added sussccsfuly')
                }
                e.target.reset()
            })
            .catch(err => console.error(err))

    };

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
            <div className="w-full m-auto max-w-xl xl:px-8 xl:w-5/12">
                <div className="bg-neutral rounded shadow-2xl p-7 sm:p-10">
                    <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                        Add A Review
                    </h3>
                    <form onSubmit={hendelSubmitRevieew}>
                        <div className="mb-1 sm:mb-2">
                            <label htmlFor="email" className="inline-block mb-1 font-medium">
                                Email
                            </label>
                            <input
                                value={user?.email ? user.email : 'example.mail.com'}
                                readOnly
                                placeholder={user?.email ? user.email : 'example.mail.com'}
                                required
                                type="text"
                                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="email"
                                name="email"
                            />
                        </div>
                        <div className="mb-1 sm:mb-2">
                            <label htmlFor="details" className="inline-block mb-1 font-medium">
                                Review the service
                            </label>

                            <textarea
                                placeholder="Write a rewiew "
                                required
                                type="text"

                                className="textarea flex-grow w-full h-32 px-4 mb-2 transition duration-200 bg-white border  border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                id="review"
                                name="review"
                            />
                        </div>
                        <div className="mt-4 mb-2 sm:mb-4">
                            <button
                                type="submit"
                                className="btn btn-primary inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            >
                                Submit
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>
);
};

export default ServicesDetails;