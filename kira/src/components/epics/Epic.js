import React from 'react';
import {Link} from 'react-router-dom'

function Epic(props) {
    return (
        <li className="m-2 list-unstyled">
            <Link 
                className='btn btn-outline-secondary p-2'
                style={{width: 200}}
                onClick={props.onClick}
                to={props.to}
                >
            <h5>{props.name}</h5>
            <p>{props.details}</p>
            <p>InitiativeId: {props.initiativeId}</p>
            </Link>
        </li>   
    )
}

export default Epic

