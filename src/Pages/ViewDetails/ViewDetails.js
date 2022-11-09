import React from 'react';
import { useLoaderData } from 'react-router-dom';



const ViewDetails = () => {

    const details = useLoaderData();


    return (
        <div>
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
    );
};

export default ViewDetails;