import React from "react";
import { connect } from "react-redux";
import Theme from "./Theme";

class ThemeList extends React.Component {

  renderList = (props) => {
    console.log('hahahaha')
    const {themes} = this.props
    return(
      <ul>
      {themes.map((theme => (
        <Theme key={theme.id} theme={theme}/>
      )))
      }
    </ul>
    )
  }

  render(){
    
    return(
      <div>
        {this.renderList()}
      </div>
    )
    
  }
};

// function handleClick(id) {
//   return console.log('click', id)
// }

// const ThemeList = ({ themes }) => (
//   <ul>
//     {themes.map((theme) => (
//       <Theme key={theme.id} onClick={(e) => handleClick(theme.id)} theme={theme}/>
//     )
//     )}
//   </ul>
// );

const mapStateToProps = state => {

  return {
    themes: state.themes
  }
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(ThemeList);
