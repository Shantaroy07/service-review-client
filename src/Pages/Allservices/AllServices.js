import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceAll from './ServiceAll';


const AllServices = () => {

    const allServices = useLoaderData();


    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 my-5'>
            {
                allServices.map(service => <ServiceAll service={service}></ServiceAll>)
            }
        </div>
    );
};

export default AllServices;