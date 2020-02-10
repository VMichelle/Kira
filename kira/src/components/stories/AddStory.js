import React from "react";
import { connect } from "react-redux";
import { addStory } from '../../redux/reducers/projectReducers';
import { Dropdown, DropdownButton } from 'react-bootstrap'

class AddStory extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      epicId: '',
      epicName: '',
      description: '',
      storyPoints: '',
      priority: '',
      sprint: '',
      assignee: '',
      assigneeId: ''
    };
  }

  updateTitle = input => {
    this.setState({
      ...this.state,
       title: input
      });
  };

  updateDescription = input => {
    this.setState({
      ...this.state,
      description: input
    })
  }

  updateEpicId = target => {
    console.log(target, target.name)
    this.setState({
      ...this.state,
      epicId: target.id,
      epicName: target.name
    })
  }

  handleAddStory = () => {
    if(this.state.input === '' || this.state.epicId === ''){
      return alert('Input story and select an epic before adding')
    }
    this.props.addStory(this.state);
    this.setState({
      ...this.state, 
      title: "" 
    });
  };

  dropDownTitle = () => {
    if(this.state.epicId === ''){
      return 'Select Epic'
    }
    return this.state.epicName;
  }

  loadEpics = () => {
    const {epics} = this.props;

    return(
      <div>
        <label>Epic</label>
        <DropdownButton
          id="dropdown-basic-button"
          title={this.dropDownTitle()}
        >
          {epics.map((epic => (
            <Dropdown.Item
              id={epic.id}
              onClick={e => this.updateEpicId(e.target)}
              key={epic.id}
              name={epic.name}
              >
                {epic.name}
            </Dropdown.Item>
          )))}
        </DropdownButton>
      </div>
    )
  }

  updatePriority = target => {
    this.setState({
      ...this.state,
      priority: target.name
    })
  }

  loadPriority = () => {
    const priorityOptions = ['Low', 'Medium', 'High']
    return (
      <div>
        <label>Priority</label>
        <DropdownButton 
          id="dropdown-basic-button"
          title={this.state.priority? this.state.priority : 'Select'}
        >
          {priorityOptions.map((option, index) => (
            <Dropdown.Item
              key={index}
              onClick={e => this.updatePriority(e.target)}
              name={option}
            >
              {option}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    )
  }

  updateStoryPoints = target => {
    this.setState({
      ...this.state,
      storyPoints: target.name
    })
  }

  loadStoryPoints = () => {
    const points = [1,2,3,5,8,13]
    return (
      <div>
        <label>Story Points</label>
        <DropdownButton 
          id="dropdown-basic-button"
          title={this.state.storyPoints? this.state.storyPoints : 'Select'}
        >
          {points.map((point, index) => (
            <Dropdown.Item
              key={index}
              onClick={e => this.updateStoryPoints(e.target)}
              name={point}
            >
              {point}
            </Dropdown.Item>
          ))}
        </DropdownButton>
      </div>
    )
  }

  updateSprint = input => {
    this.setState({
      ...this.state,
      sprint: input
    })
  }

  updateAssignee = user => {
    this.setState({
      ...this.state,
      assignee: user.name,
      assigneeId: user.userId
    })
  }

  loadAssignee = () => {
    const { users } = this.props;

    return(
      <div>
        <label>Assignee</label>
        <DropdownButton
          id="dropdown-basic-button"
          title={this.state.assignee? this.state.assignee : 'Select'}
        >
          {users.map(user => (
          <Dropdown.Item
            key={user.id}
            onClick={e => this.updateAssignee(e.target)}
            name={user.name}
            userId={user.id}
          >
            {user.name}
          </Dropdown.Item>
          ))}

        </DropdownButton>
      </div>
    )
  }

  render() {
    return (
      <div className='m-3'>
        <div className='d-flex flex-column'>
          <input
            onChange={e => this.updateTitle(e.target.value)}
            value={this.state.title}
            placeholder='Input story summary'
            className='pl-2'
          />
          <textarea
            onChange={e => this.updateDescription(e.target.value)}
            value={this.state.description}
            placeholder='Description'
            className='pl-2 mt-4'
          />
          <div className='d-flex flex-row'>
            <div className='mt-3 mb-3'>
              {this.loadEpics()}
            </div>
            <div className='mt-3 mb-3 ml-3'>
              {this.loadPriority()}
            </div>
            <div className='mt-3 mb-3 ml-3'>
              {this.loadStoryPoints()}
            </div>
            <div className='mt-3 mb-3 ml-3'>
              {this.loadAssignee()}
            </div>
          </div>
          <input 
            onChange={e => this.updateSprint(e.target.value)}
            value={this.state.sprint}
            placeholder='Sprint'
            className='pl-2'
          />
        </div>
        <button className="btn btn-outline-primary btn-sm" onClick={this.handleAddStory}>
            Create
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  epics: state.epics,
  themes: state.themes,
  stories: state.stories,
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  addStory: (state) => {
    dispatch(addStory(state))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddStory);

