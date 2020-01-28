import React, { Component } from 'react';
import { connect } from "react-redux";
import Theme from "./Theme";
import store from '../../redux/store';
import Initiative from '../initiatives/Initiative';
import AddInitiative from '../initiatives/AddInitiative'

export class ThemeList extends Component {

  constructor(props){
    super(props);
    this.state = {
      themeId: '',
      themeName: '',
      initi: '',
      epics: ''
    }
  }

  onThemeClick(id, name){
    this.setState({
      ...this.state,
      themeId: id,
      themeName: name
    })
    this.getInitiatives(id)
  }

  getInitiatives(id){

    const {initiatives} = this.props
    let initi = []

    for(let i=0; i<initiatives.length; i++){
      if(id === initiatives[i].themeId){
        let initiative = initiatives[i];
        initi.push(
          <Initiative 
            to={initiative.id}
            key={initiative.id}
            name={initiative.name}
            themeId={id}
            onClick={() => this.getEpics(initiative.id)}
          />
        )
      }
    }

    this.setState({
      //...this.state,
      initi: initi
    })
    
  }

  getEpics(id){

    //const {  }
    return
  }
  

  render() {
    const {themes} = this.props
    return(
      <div>
        <ul className='d-flex flex-wrap'>
            {themes.map((theme => (
              <Theme to={theme.id} key={theme.id} name={theme.name} onClick={() => this.onThemeClick(theme.id, theme.name)}/>
            )))
            }
        </ul>
        
        <div>
          {this.state.themeName}
        </div>
        <div className='d-flex flex-wrap'>
          {this.state.initi}
        </div>
        {/* <div className='mt-5'>
          <AddInitiative />
        </div> */}
      </div>
      )
  }
}



const mapStateToProps = state => {
  return {
    themes: state.themes,
    initiatives: state.initiatives,
    epics: state.epics
  }
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(ThemeList);
