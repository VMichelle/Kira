import React from "react";
//import { Link } from 'react-router-dom'


function Initiative(props){
  return(
    <li className="m-2 list-unstyled">
        <button className='btn btn-outline-secondary p-2' style={{width: 150}} onClick={props.onClick}>
          <h5>{props.name}</h5>
          <p>themeId: {props.themeId}</p>
        </button>
    </li>
  )
}

export default Initiative