import React, { Component } from 'react'
import './First.css'
import StarRatingComponent from 'react-star-rating-component';



let admins = require('./../rawData/movie.json')

class Abcde extends Component {

    render() {

        var title = []
        var id = []
        var rating = []

        const nameList = admins.map((id, index) =>
            < div className="card" key={index} >
                <div class="card-header bg-transparent border-success"><h5> {id.title}</h5> <br /> <h6 className="card-subtitle mb-2 text-muted"> {id.subtitle}</h6></div>

                <img className="card-img-top" src={id.imageUrl} alt="Card image cap" />
                <div className="card-body">

                    <p>{id.description}</p>

                </div>
                <div class="card-footer bg-transparent border-success">
                    <StarRatingComponent
                        name="rate2"
                        starCount={5}
                        value={id.rating}

                    />
                    <h3 className="button1">{id.rating}</h3>
                </div>
            </div >
        )
        return (
            <div>
                <nav class="header navbar navbar-dark bg-dark"><div class="container"><div class="row m-auto"><i class="fa fa-film fa-2x text-white my-auto"></i><div class="h3 ml-3 my-auto text-light" href="/">React Movie Cards</div></div></div></nav>
                <div class="card-deck">
                    {nameList}
                </div>
            </div>
        )
    }
}

export default Abcde







