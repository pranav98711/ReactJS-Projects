import React, { Component } from 'react'
import StarRatingComponent from 'react-star-rating-component';



let admins = require('./../rawData/movie.json')

class Abcde extends Component {

    render() {

        var title = []
        var id = []
        var rating = []

        const nameList = admins.map((id, index) =>
            < div className="card" key={index} >
                <div className="card-header bg-transparent border-success"><h5> {id.title}</h5> </div>

                <img className="card-img-top" src={id.imageUrl} alt="Card image cap" />
                <div className="card-body">

                    <p>{id.description}</p>

                </div>
                <div className="card-footer bg-transparent border-success">
                    <StarRatingComponent
                        name="rate2"
                        starCount={5}
                        value={id.rating}

                    />
                    <h3 className="button1">{id.rating}</h3>
                                    <button className="btn btn-danger" > Buy Movie Ticket</button>
                </div>
            </div >
        )
        return (
            <div>
                <nav className="header navbar navbar-dark bg-dark"><div className="container"><div className="row m-auto"><i className="fa fa-film fa-2x text-white my-auto"></i><div className="h3 ml-3 my-auto text-light" href="/">React Movie Cards</div></div></div></nav>
                <div className="card-deck">
                    {nameList}
                </div>
            </div>
        )
    }
}

export default Abcde







