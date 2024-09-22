import { IoBookSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import './Header.css'
const Header = () => {

    const links = <>
    <li> <NavLink to="/" className='font-semibold ' > Home </NavLink> </li>
    <li> <NavLink to="/listedBooks" className='font-semibold'> Listed Books </NavLink> </li>
    <li> <NavLink to="/pagesToRead"className='font-semibold'> Pages to Read </NavLink> </li>
    
    
    </>

    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100  z-[1] mt-3 w-52 p-2 ">
                           {links}
                        </ul>
                    </div>
                   <div className="flex ">
                     <h2 className="text-2xl font-bold p-1"> <IoBookSharp /></h2>
                     <h2 className="text-xl font-bold  ">Book Vibe</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <button className="btn mr-4 bg-[#23BE0A] font-semibold  text-white  ">Sign In</button>
                    <button className="btn bg-[#59C6D2] font-semibold  text-white ">Sign Up</button>

                </div>
            </div>
        </div>
    );
};

export default Header;