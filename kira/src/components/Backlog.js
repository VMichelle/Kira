import React from 'react'
import {useParams} from 'react-router-dom'

function Backlog() {
    let {id} = useParams();
    console.log(id)
    return (
        <div>BACKLOG PAGE {id} </div>
    )
         
}

export default Backlog
