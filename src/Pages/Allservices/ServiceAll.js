import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoView } from 'react-photo-view';
import { PhotoProvider } from 'react-photo-view';

const ServiceAll = ({ service }) => {
    const { name, img, ratings, price, description, _id } = service;
    const photoView = () => {
        <PhotoProvider>
            <PhotoView src={img}>
                <img src={img} style={{ objectFit: 'cover' }} alt="" />
            </PhotoView>
        </PhotoProvider>

    }

    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
                <img onClick={photoView} className='h-48' src={img} alt="" style={{ objectFit: 'cover' }} />
            </figure>


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

export default ServiceAll;