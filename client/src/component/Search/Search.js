import React from 'react';
import './search.css'

function Search() {
    return (
        <div>
            <div id="searchJumbo">
                <h4 className="searchNames">Book Search</h4>
                <h5 className="searchNames">Book Name</h5>
                <input id="input" type="text" className="col-11"></input>
                <div className="butn"><button className="btn btn-primary mt-2">Search</button></div>
            </div>
        </div >
    )
}

export default Search;
