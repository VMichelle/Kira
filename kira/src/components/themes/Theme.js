import React from "react";


function Theme(props){
  return(
    <li className="card col-sm-4 m-2">
      <button className='btn p-3' onClick={props.onClick}>{props.name}</button>
    </li>
  )
}

export default Theme