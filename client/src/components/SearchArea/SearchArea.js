import React from 'react';

import "./style.css";

const searchArea = (props) => {
    return (
        <div className="search-area card mt-4">
            <div className="card-header">
                <h3>
                    Search
                </h3>
            </div>
            <div className="card-body">
                <form onSubmit={props.searchBook} action="">
                    <div className="form-row">
                        <div className="col-md-9">
                            <input onChange={props.handleSearch} name="search" list="book" className="form-control" placeholder="Title (required)" id="book" type="text" />
                        </div>
                        <div className="col-md-3">                                                 <button className="btn btn-light form-control" type="submit"><>Search</></button>

                            <select defaultValue="Sort" onChange={props.handleSort}>
                                <option disabled value="Sort">Sort</option>
                                <option value="Newest">Newest</option>
                                <option value="Oldest">Oldest</option>
                            </select>

                        </div>
                    </div>
                </form>
            </div>

        </div >
    )
}

export default searchArea;
