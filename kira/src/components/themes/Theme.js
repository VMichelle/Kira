import React from "react";
//import { Link } from 'react-router-dom'


function Theme(props){
  return(
    <li className="m-2 list-unstyled">
        <button className='btn btn-outline-secondary p-3' style={{width: 200}} onClick={props.onClick}>
          <h5>{props.name}</h5>
        </button>
    </li>
  )
}

export default Theme