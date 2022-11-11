import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assist/logo.png'
import { AuthContext } from '../Contexts/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)


    const menuItem1 = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'services'}>Services</Link></li>
        <li><Link to={'../add-service'}>Add Service</Link></li>
        <li><button className='mt-3 btn btn-sm btn-outline btn-primary' onClick={logOut}>Logout</button></li>


    </>
    const menuItem2 = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'services'}>Services</Link></li>
        <li><Link to={'../resister'}>Resister</Link></li>
        <li><Link to={'../login'}>Login</Link></li>
        
    </>
     
    const menuItem =  user?.uid?<>
        {menuItem1}
     </>
     :
     <>
     {menuItem2}
     </>

    return (
        <div className="navbar bg-base-100 md:px-16">
            <div className="navbar-start ">
                <div className="dropdown">
                    <label tabIndex={0} className="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItem}
                    </ul>
                </div>
                <img className='w-12' src={logo} alt="" />
                <Link to={'/'} className="btn btn-ghost normal-case text-xl">Avengers Travel</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItem}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ? <>
                        <div className="avatar online">
                            <div className="w-12 rounded-full">
                                <img alt=''src={user.photoURL} />
                            </div>
                        </div>
                        
                    </> : <>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;