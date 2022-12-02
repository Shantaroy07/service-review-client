import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const AddProduct = () => {



    const handleAddProduct = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const img = form.image.value;
        const description = form.description.value;
        const ratings = form.ratings.value;

        const setProduct = {

            name,
            price,
            ratings,
            img,
            description


        }
        console.log(setProduct)

        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(setProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service placed successfully')
                    form.reset();


                }
            })
            .catch(er => console.error(er));

    }

    return (

        <div>

            <form onSubmit={handleAddProduct} className='ml-3 my-5'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text"> Product name</span>
                    </label>
                    <input name='name' type="text" placeholder="Product Name" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input name='price' type="text" placeholder="Price" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Ratings</span>
                    </label>
                    <input name='ratings' type="text" placeholder="Ratings" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Description</span>
                    </label>
                    <input name='description' type="text" placeholder="Description" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Image Url</span>
                    </label>
                    <input name='image' type="text" placeholder="URL" className="input input-bordered w-full " />
                </div>
                <button className="btn btn-active btn-accent my-3 ">Add Service</button>
            </form>
        </div>

    );
};

export default AddProduct;