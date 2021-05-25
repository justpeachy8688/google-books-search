import React, { Component } from 'react';

const BookCard = (props) => {

    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
                <h4>{props.description}</h4>
                <p>{props.published}</p>
                <a href={props.link}>Preview here:</a>
            </div>
        </div>
    )
}

export default BookCard
