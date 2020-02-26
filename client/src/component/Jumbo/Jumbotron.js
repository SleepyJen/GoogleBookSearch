import React from 'react';
import './jumbotron.css'

function Jumbotron() {
    return (
        <div>
            <div className="jumbotron jumbotron-fluid" id="jumbotron">
                <div className="container col-12">
                    <h1 className="display-4">Welcome to Google Books Search</h1>
                    <p className="lead">Search for your favorite books and save them to view later!</p>
                </div>
            </div>
        </div>
    )
}

export default Jumbotron;
