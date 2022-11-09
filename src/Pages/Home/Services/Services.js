import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://assignment-server-eight.vercel.app/home')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className='container mx-auto'>
            <div className=' grid grid-cols-1 md:grid-cols-3'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}

                    ></Service>)
                }

            </div>
            <div className='flex justify-center my-4'>
                <button className="btn btn-secondary"><Link to='/services'>See all</Link></button>
            </div>
        </div>
    );
};

export default Services;