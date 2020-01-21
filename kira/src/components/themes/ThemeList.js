import React from "react";
import { connect } from "react-redux";
import Theme from "./Theme";
import { Switch, Route, useParams } from 'react-router-dom'

function InitiativesList() {
  let { id } = useParams();

  return (
    <div>
      <h3>ID: {id}</h3>
    </div>
  );
}

class ThemeList extends React.Component {

  onThemeClick = () =>{
    console.log('heyyyyy')
  }

  renderList = () => {
    const {themes} = this.props
    
    return(
      <ul className='d-flex flex-row'>
      {themes.map((theme => (
        <Theme key={theme.id} name={theme.name} onClick={this.onThemeClick}/>
      )))
      }
    </ul>
    )
  }

  render(){
    return(
      <div>
        <div>
          {this.renderList()}
        </div>
        <div>
        <Switch>
          <Route path="/:id" children={<InitiativesList/>} />
        </Switch>
        </div>
      </div>
      
    )
    
  }
};

const mapStateToProps = state => {

  return {
    themes: state.themes
  }
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(ThemeList);
