import React, { Component } from 'react';
import BookCard from "../BookCard/BookCard";

const BookList = (props) => {
    console.log(props)
    return (
        <div className="list">
            {
                props.books.map((book, i) => {
                    // console.log(book.volumeInfo.previewLink)
                    return <BookCard
                        key={book.id}
                        image={book.volumeInfo.imageLinks.thumbnail}
                        title={book.volumeInfo.title}
                        author={book.volumeInfo.authors}
                        description={book.volumeInfo.description}
                        published={book.volumeInfo.publishedDate}
                        link={book.volumeInfo.previewLink}
                    />
                })
            }
        </div>
    )
}

export default BookList;
