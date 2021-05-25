import React, { Component } from 'react';
import { render } from 'react-dom';
import SearchArea from "../SearchArea/SearchArea";

class Books extends Component {
    render() {
        return (
            <div>
                <SearchArea />
            </div>
        )
    }
}

export default Books;
