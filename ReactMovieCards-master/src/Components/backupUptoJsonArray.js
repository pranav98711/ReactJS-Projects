import React from 'react'
let admins = require('./../rawData/movie.json')


function First() {

    var title = []
    var id = []

    const nameList = admins.map(id =>
        <div className={id.id}>

            <h1> {id.title}</h1>
            <h2>{id.description}</h2>

        </div>
    )

    return (


        <div>
            {nameList}
        </div>
    )
}

export default First






