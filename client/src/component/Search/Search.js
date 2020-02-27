import React, { useState } from 'react';
import './search.css';
import axios from 'axios';
import Books from '../Books/Books'

function Search() {
    const [value, modifier] = useState({ value: '' });
    const [booksLists, modifyBooks] = useState({ books: [] });

    function search() {
        let url = `https://www.googleapis.com/books/v1/volumes?q=${value.value}`

        axios.get(url).then(result => {
            let items = result.data.items;
            let arrayOfBooks = [];
            for (let i = 0; i < items.length; i++) {
                let book = {}
                let info = items[i].volumeInfo;
                book['id'] = items[i].id;
                book['title'] = info.title;
                book['authors'] = info.authors;
                book['description'] = info.description;
                if (info.imageLinks === undefined) {
                    book['image'] = '';
                } else {
                    book['image'] = info.imageLinks.thumbnail;
                }
                book['link'] = info.infoLink;
                arrayOfBooks.push(book);
            }
            modifyBooks({ books: [arrayOfBooks] });
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
            <div className="Books mt-2">
                <Books data={booksLists} />
            </div>
        </div >
    )
}
export default Search;
