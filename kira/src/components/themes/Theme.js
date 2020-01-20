import React from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

const onThemeClick = () => {
  //let history = useHistory();

  //history.push('/')


  console.log('theme.js clicked')


}

const Theme = ({ theme }) => (
  <li className="card col-sm-4">
      <button className='btn-primary p-3' onClick={onThemeClick}>{theme.name}</button>
  </li>
);

export default connect(
  null
)(Theme);