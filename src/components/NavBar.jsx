import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function NavBar() {
    return (
        <div className="navbar">
            <ul>
                <h1 className="shop">SHOP</h1>
                <a className="home" href="">Home</a>
                <a href="">Digitales</a>
                <a href="">Mandos</a>
                <a href="">Contacto</a>
            </ul>
            <i className="fa fa-cart-plus cart"></i>
        </div>


    )
}