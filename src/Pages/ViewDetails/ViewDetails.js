import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';



const ViewDetails = () => {
    const { user } = useContext(AuthContext);

    const details = useLoaderData();

    return (
        <div>
            <div>
                <h1 className='text-lg font-bold text-center'>Service Section</h1>
                <div className="card lg:card-side bg-base-100 shadow-xl my-5">
                    <figure className='w-3/5'><img src={details.img} alt="" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{details.name}</h2>
                        <p>{details.description}</p>

                        <p>Price: {details.price}</p>
                        <p>Ratings: {details.ratings}</p>
                    </div>
                </div>
            </div>
            <div>
                <h1 className='text-lg font-bold text-center'>Review Section</h1>
                {
                    user?.email ?
                        <Link to='/addReview' className="btn btn-active btn-accent">Add Review</Link> :
                        <p className='text-center text-base font-medium text-blue-500'>Please <Link to='/login' className='text-orange-700'>Log in</Link> first to Add Review.</p>
                }

            </div>
        </div>
    );
};

export default ViewDetails;