import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import List from "react-bootstrap/Card";

import BookList from "../components/BookList/BookList";
import BookCard from "../components/BookCard/BookCard";
import Header from "../components/Header/Header";
import "../App.css";
import Nav from "../components/Nav/Navbar";



import API from "../utils/API";

class SavedBooks extends Component {
    state = {
        savedBooks: []
    }

    componentDidMount() {
        this.getSavedBooks()
    }

    getSavedBooks = () => {
        API.getBooks()
            .then(res => {
                this.setState({
                    savedBooks: res.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    };

    render() {
        return (
            <div className="container">
                <Nav />
                <Header />
                <Card title="Saved">
                    {this.state.savedBooks.length ? (
                        <List>
                            {this.state.savedBooks.map(book => (
                                <BookCard
                                    key={book.id}
                                    title={book.title}
                                    authors={book.author}
                                    link={book.link}
                                    description={book.description}
                                    image={book.image}
                                    Button={() => (
                                        <button className="btn btn-light"
                                            onClick={() => this.deleteBook(book._id)}
                                        >
                                            Delete
                                        </button>
                                    )}
                                />
                            ))}
                        </List>

                    ) : (
                            <div>
                                <hr />
                                <p>No results to display</p>
                            </div>
                        )}
                </Card>
            </div>
        )
    }
}


export default SavedBooks;