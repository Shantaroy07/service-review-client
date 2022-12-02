import React from 'react';


const Info = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center text-2xl font-semibold my-3'>Others Services</h1>
            <div className='grid md:grid-cols-2 grid-cols-1 gap-3 w-3/4 container mx-auto '>
                <div className="card card-side bg-purple-300 shadow-xl h-3/4">
                    <figure className='w-1/2'><img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/free-shipping-design-template-62c154107c385e27756564fcf74622fb_screen.jpg?ts=1629452230" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className='text-xl font-bold' >FREE DELIVERY</h2>
                        <p className='font-medium'>ON ORDER OVER 1500 TK</p>

                    </div>
                </div>
                <div className="card card-side bg-purple-300 shadow-xl h-3/4">
                    <figure className='w-1/2'><img src="https://static.vecteezy.com/system/resources/thumbnails/002/205/929/small/coupon-icon-free-vector.jpg" alt="Movie" /></figure>
                    <div className="card-body">
                        <h2 className='text-xl font-bold'>DISCOUNT</h2>
                        <p className='font-medium'>ON ORDER TWO CAKES GET 5% DISCOUNT</p>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Info;