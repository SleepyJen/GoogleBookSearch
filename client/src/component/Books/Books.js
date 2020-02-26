import React from 'react'

function Books(props) {
    const books = props.data.books[0];
    console.log(books);

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
                                                <button className="btn btn-warning mt-3 ml-3" >Save
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
