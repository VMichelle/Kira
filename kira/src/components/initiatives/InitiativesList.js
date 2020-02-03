import React, {Component} from 'react'
import { connect } from 'react-redux'
import Initiative from './Initiative';
// import {Modal, Button} from 'react-bootstrap';
// import AddInitiative from './AddInitiative'


export class InitiativesList extends Component {

  constructor(props){
    super(props);
    this.state = {
      initiId: '',
      initiName: '',
      epics: ''
    }
  }

  onInitiClick(id, name){
    this.setState({
      ...this.state,
      initiId: id,
      initiName: name
    })
    this.getEpics(id)
  }

  getEpics(id){
    const { epics } = this.props;
    let epicsArr = [];

    for(let i=0; i<epics.length; i++){
      if(id === epics[i].initiativeId){
        let epic = epics[i];
        epicsArr.push(
          <Initiative 
            to={epic.id}
            key={epic.id}
            name={epic.name}
            themeId={id}
            onClick={() => this.getEpics(epic.id)}
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
        <div className='d-flex flex-wrap justify-content-center'>
          {epics}
        </div>
      </div>
    )
  }


  render(){
  const { initiatives } =  this.props

    return(
      <div>
          <ul className='d-flex flex-wrap'>
              {initiatives.map((initiative => (
                  <Initiative 
                      initiative={initiative}
                      key={initiative.id}
                      name={initiative.name}
                      themeId={initiative.themeId}
                      onClick={() => this.onInitiClick(initiative.id, initiative.name)}
                  />
              )))}
          </ul>
          <div>
            {this.displayEpics()}
          </div>

      </div>
    )
  }

  
}

const mapStateToProps = state => {
    return {
        initiatives: state.initiatives,
        themes: state.themes,
        epics: state.epics
    }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(InitiativesList);
