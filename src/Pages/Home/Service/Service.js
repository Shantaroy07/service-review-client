import React from 'react';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, img, ratings, price, description, _id } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-48' src={img} alt="" /></figure>
            <div className="card-body">
                <h2 className="card-title text-lg">{name}</h2>
                <p>{description.slice(0, 100)}..</p>
                <p>Price: {price}</p>
                <p>Ratings: {ratings}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`/details/${_id}`}>View Details</Link></button>

                </div>
            </div>
        </div>
    );
};

export default Service;