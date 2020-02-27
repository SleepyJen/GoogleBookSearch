import React from 'react';
import axios from 'axios';

function Books(props) {
    const books = props.data.books[0];

    function save(e, result) {
        let id = e.target.id;

        axios.post('/api/save', {
            title: result.title,
            description: result.description,
            image: result.image,
            link: result.link,
            bookId: result.id
        }).then(results => {

            if (result.authors.length > 0) {
                for (let i = 0; i < result.authors.length; i++) {
                    axios.post(`/api/saveAuthors/${id}`, {
                        authors: result.authors[i]
                    }).then(res => {
                    });
                }
            }
            alert('Book was saved!');
        });
    }

    return (
        <div>
            {books !== undefined ?
                (<div>
                    {
                        books.map(result => (
                            <div className="card mb-3" key={result.id}>
                                <div className="row">
                                    <div className="col-md-2">
                                        <img alt={result.title} className="img-fluid" src={result.image} />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body">
                                            <h5 className="card-title">{result.title}</h5>
                                            <h6> by {result.authors}</h6>
                                            <p className="card-text">{result.description}</p>
                                            <div>
                                                <a href={result.link} className="btn btn-success mt-3" target="blank" >View Book</a>
                                                <button onClick={(e) => { save(e, result) }} className="btn btn-warning mt-3 ml-3" id={result.id} data={result}>Save
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }</div>)
                :
                (<div></div>)
            }
        </div >
    )
}

export default Books;
