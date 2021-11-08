import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import logo from './../../images/logo1.png'
import useAuth from './../../Hooks/useAuth'
import './Header.css'
const Header = () => {
    const { user, logOut, error } = useAuth();
    // console.log(user)
    const history = useHistory();
    const handleLogin = () => {

        history.push("/login");

    }
    return (
        <div className="sticky-top">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="/">
                        <img src={logo} width="70" height="auto" alt="" />
                    </NavLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                            <li className="nav-item">
                                <NavLink
                                    to="/home"
                                    
                                    className="nav-link nav-NavLink active "
                                >
                                    Home
                                </NavLink>
                            </li>
                            {
                                user.displayName ?<><li className="nav-item">
                                    <NavLink
                                        activeStyle={{
                                            color: "#FEB800",
                                            fontSize: '20px',
                                            fontWeight: 'bold'
                                        }}
                                        className="nav-link  nav-NavLink active"
                                        to="/myOrders"
                                    >
                                        My Orders
                                    </NavLink>
                                </li><li className="nav-item">
                                        <NavLink
                                            activeStyle={{
                                                color: "#FEB800",
                                                fontSize: '20px',
                                                fontWeight: 'bold'
                                            }}
                                            className="nav-link active nav-NavLink"
                                            to="/allOrders"
                                        >
                                            Manage All Orders
                                        </NavLink>
                                    </li><li className="nav-item">
                                        <NavLink
                                            activeStyle={{
                                                color: "#FEB800",
                                                fontSize: '20px',
                                                fontWeight: 'bold'
                                            }}
                                            className="nav-link active nav-NavLink"
                                            to="/newOffer"
                                        >
                                            Add New Offer
                                        </NavLink>
                                    </li> </>: ''
                            }
                             
                               
                               
                            <li className="nav-item">
                                    <NavLink className="nav-NavLink" to="/">
                                        <img
                                            src={user.photoURL}
                                            width="30px"
                                            className="rounded-circle"
                                            alt=""
                                        />
                                    </NavLink>
                                </li>


                                   <li className="nav-item">
                                    <NavLink
                                        activeStyle={{ color: "#F34E3A" }}
                                        className="nav-link active nav-NavLink"
                                        to="/"
                                    >
                                        {user.displayName}
                                    </NavLink>
                            </li>
                            {
                                !user.displayName ? <li className="nav-item">                                       <button onClick={handleLogin} className="btn btn-primary rounded-pill px-3">
                                    Login
                                </button>
                                </li> : <li onClick={logOut} className=" btn btn-primary "> Log Out</li>
                            }
                                    

            
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};


export default Header;

/* 
activeStyle={{
                                        color: "#FEB800",
                                        fontSize: '20px',
                                        fontWeight: 'bold'
                                    }}

*/