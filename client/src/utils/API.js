import axios from "axios";

export default {
    //gets all books
    getBooks: function () {
        return axios.get("./api/books");
    },
    //deletes book with given id
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData);
    }
}