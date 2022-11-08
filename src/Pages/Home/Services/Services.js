import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';


const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/home')
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

                <div className=''>
                    <button className="btn btn-secondary">See All</button>
                </div>
            </div>
        </div>
    );
};

export default Services;