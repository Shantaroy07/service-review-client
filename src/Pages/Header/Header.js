import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Shared/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }
    return (
        <div className=''>
            <div className="navbar bg-secondary rounded-md">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-orange-200 font-bold">Cake world</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li className='font-semibold'><Link to='/'>Home</Link></li>

                        {
                            user?.email ?
                                <>
                                    <li className='font-semibold'><Link to='myreviews'>My Reviews</Link></li>
                                    <li className='font-semibold'><Link to='/addproducts'>Add Service</Link></li>
                                    <li className='font-semibold'>
                                        <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button>
                                    </li>
                                </>
                                :
                                <li className='font-semibold'><Link to='/login'>Login</Link></li>
                        }




                        <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;