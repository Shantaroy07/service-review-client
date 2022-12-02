import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const MyReviews = () => {
    const { user } = useContext(AuthContext)

    const [myreviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myreviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])



    return (
        <div className="overflow-x-auto w-full">
            <table className="table w-full">

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
                        myreviews ? myreviews?.map((myreview, i) => <tr key={myreview._id}>

                            <td>{myreview.name}</td>
                            <td>{myreview.review}</td>
                            <td>{myreview.ratings} </td>
                            <td><button className='btn btn-secondary btn-sm'>Edit</button></td>
                            <td><button className='btn btn-primary btn-sm'>Delete</button>
                            </td>

                        </tr>) : 'No Items Here'
                    }

                </tbody>



            </table>
        </div>
    );
};

export default MyReviews;