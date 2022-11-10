import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import { AuthContext } from "../../contexts/AuthProvider";
import { FcManager } from "react-icons/fc";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  const menuItems = (
    <>
      <li className="font-semibold">
        <NavLink to="/home">Home</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/about">About</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li className="font-semibold">
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && user.uid ? (
        <>
          <li className="font-semibold">
            <NavLink to="/add-services">Add Services</NavLink>
          </li>
          <li className="font-semibold">
            <NavLink to="/reviews">My Reviews</NavLink>
          </li>
          <li className="font-semibold">
            <button onClick={() => logout()}>Log Out</button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <NavLink to="/login">Login</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <img src={logo} alt="Logo" />
          <h2 className="lg:text-3xl lg:font-bold text-xl">Travelers</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end mr-3">
        {user && user.uid ? (
          user.photoURL ? (
            <img
              title={user.displayName}
              alt=""
              src={user.photoURL}
              className="object-cover w-10 h-10 rounded-full shadow bg-gray-500"
            />
          ) : (
            <FcManager className="object-cover w-10 h-10 rounded-full shadow bg-gray-500" />
          )
        ) : (
          <Link
            to="/services"
            className="btn btn-outline btn-warning hover:rounded-full"
          >
            Booking now
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
