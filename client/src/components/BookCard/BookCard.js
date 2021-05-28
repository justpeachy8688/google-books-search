import React, { Component } from 'react';
import "./style.css";

const BookCard = (props) => {

    return (
        <div className="card-container" key={props.id}>
            <div className="card mt-4">
                <div className="card-header"><h2>{props.title}</h2></div>
                <div className="card-body">
                    <img src={props.image} alt="" />
                    <div className="desc">
                        <h3>Author: {props.author}</h3>
                        <h4> Description: {props.description}</h4>
                        <h5>Year Published: {props.published === '0000' ? 'Not available' : props.published.substring(0, 4)}</h5>
                        <a href={props.link}>Preview here:</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookCard
