import React, { useEffect, useState } from 'react';

const Reviews = ({ id }) => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?reviewId=${id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Reviewer</th>
                        <th>Reviews</th>
                        <th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews &&
                        reviews?.map((review, i) => <tr key={review._id}>
                            <th className="mask mask-squircle w-12 h-12"> <img src={review.img} alt="" /></th>
                            <td>{review.user_name}</td>
                            <td>{review.review}</td>
                            <td>{review.ratings} </td>

                        </tr>)
                    }
                </tbody>



            </table>
        </div>
    );
};

export default Reviews;