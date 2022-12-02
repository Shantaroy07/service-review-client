import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const [myreviews, setMyReviews] = useState([]);
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this review');
        if (proceed) {
            fetch(`http://localhost:5000/reviews/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        toast.success('Deleted successfully');
                        const remaining = reviews.filter(rvw => rvw._id !== id);
                        setReviews(remaining);
                    }
                })
        }
    }





    return (
        <div className="overflow-x-auto w-full">

            {
                myreviews ? <table className="table w-full">

                    <thead>
                        <tr>

                            <th>Product Name</th>
                            <th>Reviews</th>
                            <th>Ratings</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myreviews?.map((myreview, i) => <tr key={myreview._id}>

                                <td>{myreview.name}</td>
                                <td>{myreview.review}</td>
                                <td>{myreview.ratings} </td>
                                <td><button className='btn btn-secondary btn-sm'>Edit</button></td>
                                <td><button onClick={() => handleDelete(myreview._id)} className='btn btn-primary btn-sm'>Delete</button>
                                </td>

                            </tr>)
                        }

                    </tbody>



                </table> : 'No Reviews Here'
            }


        </div>
    );
};

export default MyReviews;