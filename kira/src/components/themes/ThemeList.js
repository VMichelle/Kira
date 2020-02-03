import React, { Component } from 'react';
import { connect } from "react-redux";
import Theme from "./Theme";
//import store from '../../redux/store';
import Initiative from '../initiatives/Initiative';
import Epic from '../epics/Epic';
import AddModal from '../AddModal'
import AddInitiative from '../initiatives/AddInitiative';
import AddEpic from '../epics/AddEpic'

export class ThemeList extends Component {

  constructor(props){
    super(props);
    this.state = {
      themeId: '',
      themeName: '',
      initiName: '',
      initiId: '',
      initi: '',
      epics: ''
    }
  }

  onThemeClick(id, name){
    this.setState({
      ...this.state,
      themeId: id,
      themeName: name,
      epics: ''
    })
    this.getInitiatives(id)
  }

  onInitiClick(id, name){
    console.log(id, name)
    this.setState({
      ...this.state,
      initiId: id,
      initiName: name
    })
    this.getEpics(id)
  }

  onEpicClick(id){
    console.log(id)


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
            onClick={() => this.onInitiClick(initiative.id, initiative.name)}
          />
        )
      }
    }

    this.setState({
      //...this.state,
      initi: initi
    })
    
  }

  displayIniti(){
    const { themeName, initi } = this.state

    if(initi === ''){
      return
    }

    return(
      
      <div>
        <hr/>
          <h4 className='d-flex justify-content-center'>
            {themeName}
          </h4>
          <h6 className='d-flex justify-content-center'>
            Initiatives
          </h6>
          <div className='d-flex justify-content-center'>
            <AddModal
              label='Add Initiative'
              title='Add an initiative'
              body={<AddInitiative />}
            />
          </div>
          
        <div className='d-flex flex-wrap justify-content-center'>
          {initi}
        </div>
      </div>
    )
  }

  getEpics(id){
    const { epics } = this.props;
    let epicsArr = [];

    for(let i=0; i<epics.length; i++){
      if(id === epics[i].initiativeId){
        let epic = epics[i];
        epicsArr.push(
          <Epic 
            key={epic.id}
            name={epic.name}
            initiativeId={id}
            details={epic.details}
            //onClick={() => this.onEpicClick(epic.id)}
            to={`/epics/${epic.id}`}
          />
        )
      }
    }

    this.setState({
      epics: epicsArr
    })
    
  }

  displayEpics(){
    const { initiName, epics } = this.state

    if(epics === ''){
      return
    }
    
    return(
      <div>
        <hr/>
        <h4 className='d-flex justify-content-center'>
          {initiName}
        </h4>
        <h6 className='d-flex justify-content-center'>
          Epics
        </h6>
        <div className='d-flex justify-content-center'>
          <AddModal
            label='Add Epic'
            title='Add an epic'
            body= {<AddEpic />}
          />
        </div>
        
        <div className='d-flex flex-wrap justify-content-center'>
          {epics}
        </div>
      </div>
    )
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
          {this.displayIniti()}
        </div>
        <div>
          {this.displayEpics()}
        </div>

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
