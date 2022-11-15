import React from 'react';

const Review = () => {
    return (

        <form className='ml-3 my-5'>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">What is your review?</span>
                </label>
                <input type="text" placeholder="Review" className="input input-bordered w-full " />
            </div>
            <div className="form-control w-full max-w-xs">
                <label className="label">
                    <span className="label-text">How your opinion about ratings?</span>
                </label>
                <input type="text" placeholder="Ratings" className="input input-bordered w-full " />
            </div>
            <button className="btn btn-active btn-accent my-3 ">Add Review</button>
        </form>

    );
};

export default Review;