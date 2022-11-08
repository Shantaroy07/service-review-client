import React from 'react';
import img1 from '../../../Images/cakeBanner1.jpg';
import './Banner.css'

const Banner = () => {

    return (
        <div className="container mx-auto relative w-4/5 my-5 ">
            <div className='img'>
                <img src={img1} alt="" className="w-full rounded-xl" />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4">
                <h1 className='text-6xl font-bold text-white '>
                    Make Your Life  <br />
                    Sweeter One Bite <br />
                    At a Time.

                </h1>
            </div>
            <div className="absolute  transform -translate-y-1/2 w-2/5 left-24 top-1/2">
                <p className='text-2xl text-white font-medium'>Best Cake In Cumilla</p>
            </div>
            <div className="absolute flex justify-start transform -translate-y-1/2 w-2/5 left-24 top-2/3">
                <button className="btn btn-warning mr-5">Order Now</button>

            </div>

        </div>
    );
};

export default Banner;