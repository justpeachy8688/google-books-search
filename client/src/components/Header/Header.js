import React from "react";
import { FaBook } from 'react-icons/fa';
import "./style.css";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <header>
                <h1 className="headerText text-center"> <FaBook /> Google Books Search</h1>
                <h4>Search for and Save Books of Interest</h4>
            </header>
        </div>
    )
}

export default Header;