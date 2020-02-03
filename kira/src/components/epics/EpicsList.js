import React, { Component } from 'react'
import { connect } from 'react-redux'

export class EpicsList extends Component {


    render() {
        const {epics} = this.props

        return(
          <div>
            <ul className='d-flex flex-wrap'>
                {epics.map((epic => (
                  <Theme to={epic.id} key={epic.id} name={epic.name} onClick={() => this.onEpicClick(epic.id, epic.name)}/>
                )))
                }
            </ul>
            <div>
              {this.displayIniti()}
            </div>
    
          </div>
          )
    }
}

const mapStateToProps = (state) => ({
    epics: state.epics
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(EpicsList)

