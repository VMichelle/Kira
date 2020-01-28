import React from 'react'

function Epic(props) {
    return (
        <li className="m-2 list-unstyled">
            <button className='btn btn-outline-secondary p-2' style={{width: 150}} onClick={props.onClick}>
            <h5>{props.name}</h5>
            <p>{props.details}</p>
            <p>InitiativeId: {props.themeId}</p>
            </button>
        </li>   
    )
}

export default Epic

