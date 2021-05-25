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
                {/* I WANT TO PUT LINK HERE */}
            </div>
        </div>
    )
}

export default BookCard
