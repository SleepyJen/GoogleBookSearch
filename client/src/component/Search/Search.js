import React, { useState } from 'react';
import './search.css';
import axios from 'axios';

function Search() {
    const [value, modifier] = useState({ value: '' });
    const [books, modifyBooks] = useState({ books: [] });

    function search() {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${value.value}`

        axios.get(url).then(result => {
            let items = result.data.items;
            console.log(items);
            for (let i = 0; i < items; i++) {

            }
        });
    }

    return (
        <div>
            <div id="searchJumbo">
                <h4 className="searchNames">Book Search</h4>
                <h5 className="searchNames">Book Name</h5>
                <input id="input" type="text" onChange={(e) => { modifier({ value: e.target.value }) }} className="col-11"></input>
                <div><button onClick={(e) => {
                    e.preventDefault();
                    search();
                }} className="btn btn-primary mt-2">Search</button></div>
            </div>
            <div className="Books"></div>
        </div >
    )
}
export default Search;
