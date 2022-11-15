import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Review = () => {
    const { _id, name } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = user?.name || 'no name'
        const email = user?.email || 'unregistered';
        const img = user?.url;
        const review = form.review.value;
        const ratings = form.ratings.value;

        const setReview = {
            reviewId: _id,
            review,
            ratings,
            img,
            name,
            email
        }

        fetch('https://assignment-server-eight.vercel.app/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(setReview)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }

    return (

        <div>
            <h1 className='text-lg font-medium'>Review For {name}</h1>
            <form onSubmit={handlePlaceReview} className='ml-3 my-5'>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">What is your review?</span>
                    </label>
                    <input name='review' type="text" placeholder="Review" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">How your opinion about ratings?</span>
                    </label>
                    <input name='ratings' type="text" placeholder="Ratings" className="input input-bordered w-full " />
                </div>
                <button className="btn btn-active btn-accent my-3 ">Add Review</button>
            </form>
        </div>

    );
};

export default Review;