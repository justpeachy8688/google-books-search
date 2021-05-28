import React, { Component } from "react";

import BookList from "../components/BookList/BookList";
import Header from "../components/Header/Header";
import "../App.css";

class SavedBooks extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.getSavedBooks()
    }

    getSavedBooks = () => {
        API.getBooks()
    }
}


export default SavedBooks;