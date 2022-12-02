import React from 'react';


const Popular = () => {
    return (
        <div>
            <h1 className='text-center text-2xl font-semibold my-3'>Popular Services</h1>
            <div className='container mx-auto grid md:grid-cols-3 grid-cols-1'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.pinimg.com/736x/ee/4e/fd/ee4efd0d960b477e4dc0373c2837f7a2.jpg" alt="Shoes" className="rounded-xl h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title ">Chocolate Cake</h2>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://cdn.shopify.com/s/files/1/0521/3929/4884/products/EgglessRedVelvetCake1.jpg?v=1632141306" alt="Shoes" className="rounded-xl h-48" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Red Velvet Cake</h2>

                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                        <img src="https://www.mycakeschool.com/images/2019/06/Black-Forest-Cake-from-Scratch-featured-image--720x405.jpg" alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Black Forest Cake</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popular;