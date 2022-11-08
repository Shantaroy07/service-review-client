import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className=''>
            <div className="navbar bg-secondary rounded-md">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl text-orange-200 font-bold">Shanta's Kitchen</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/login'>Login</Link></li>
                        <li><Link to='/logout'>SignOut</Link></li>
                        <li><Link to='/services'>Services</Link></li>
                        <li><Link to='/blog'>Blog</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;