import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addEpic } from '../../redux/reducers/projectReducers';
import { Dropdown, DropdownButton } from 'react-bootstrap';

export class AddEpic extends Component {

    constructor(props) {
        super(props);
        this.state = { 
          input: '',
          details: '',
          initiativeId: 0,
          initiativeName: ''
        };
      }
    
      updateInput = input => {
        this.setState({
          ...this.state,
           input: input
          });
      };
    
      updateInitiativeId = target => {
        console.log(target, target.name)
        this.setState({
          ...this.state,
          initiativeId: parseInt(target.id),
          initiativeName: target.name
        })
      }

      updateDetails = details => {
          this.setState({
              ...this.state,
              details: details
          })
      }
    
      handleAddEpic = () => {
        const {input, initiativeId} = this.state
    
        if(input === '' || initiativeId === ''){
          return alert('Input epic and select an initiative before adding')
        }
        this.props.addEpic(this.state);
        this.setState({ input: '', details: '' });
      };
    
      dropDownTitle = () => {
        if(this.state.initiativeId === 0){
          return 'Select Project'
        }
        return this.state.initiativeName
      }
    
      loadInitiatives = (id) => {
        const {initiatives} = this.props;
    
        return(
          <DropdownButton
            id="dropdown-basic-button"
            title={this.dropDownTitle()}
            
          >
            {initiatives.map((initi => (
              <Dropdown.Item
                id={initi.id}
                onClick={e => this.updateInitiativeId(e.target)}
                key={initi.id}
                name={initi.name}
                >
                  {initi.name}
                </Dropdown.Item>
            )))}
          </DropdownButton>
        )
      }
    
      render() {
        return (
          <div>
            <div className='d-flex'>
                <input
                onChange={e => this.updateInput(e.target.value)}
                value={this.state.input}
                placeholder='Add Epic'
                className='pl-2 w-50'
                />
                <div className='ml-2'>
                {this.loadInitiatives()}
                </div>
            </div>
            
            <textarea
                onChange={e => this.updateDetails(e.target.value)}
                value={this.state.details}
                placeholder='Details...'
                className='w-100 mt-3'
            />
            
            <button className="btn btn-outline-primary btn-sm mt-2" onClick={this.handleAddEpic}>
                Add Epic
            </button>
          </div>
        );
      }
}

const mapStateToProps = state => ({
    initiatives: state.initiatives,
    epics: state.epics
})

const mapDispatchToProps = dispatch => ({
    addEpic: (state) => {
      dispatch(addEpic(state))
    }
  });

export default connect(mapStateToProps, mapDispatchToProps)(AddEpic)
