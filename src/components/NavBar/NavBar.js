import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from "react-router-dom";

const NavBar =()=>{
    return(
        <nav className="navBar">
            <Link to="/">
                <h3>Cibeles</h3>
            </Link>
            <div className="Categories">
                <NavLink to={`/category/comida`} className={({isActive})=>isActive?"ActiveOption":"Option"}>Comida</NavLink>
                <NavLink to={`/category/cebidas sin alcohol`} className={({isActive})=>isActive?"ActiveOption":"Option"}>Bebidas sin alcohol</NavLink>
                <NavLink to={`/category/cebidas con alcohol`} className={({isActive})=>isActive?"ActiveOption":"Option"}>Bebidas con alcohol</NavLink>
                <NavLink to={`/category/postres`} className={({isActive})=>isActive?"ActiveOption":"Option"}>Postres</NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}



export default NavBar; 