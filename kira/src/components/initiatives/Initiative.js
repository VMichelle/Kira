import React from "react";
//import { Link } from 'react-router-dom'


function Initiative(props){
  return(
    <li className="m-2 list-unstyled">
        <button className='card p-3' onClick={props.onClick}>{props.name}</button>
    </li>
  )
}

export default Initiative