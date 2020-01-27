import React from "react";
import { connect } from "react-redux";
import { addInitiative } from '../../redux/reducers/projectReducers';
import { Dropdown, DropdownButton } from 'react-bootstrap'

class AddStory extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      initiativeId: '',
      initiativeName: ''
    };
  }

  updateInput = input => {
    this.setState({
      ...this.state,
       input: input
      });
  };

  updateThemeId = target => {
    console.log(target, target.name)
    this.setState({
      ...this.state,
      initiativeId: target.id,
      initiativeName: target.name
    })
  }

  handleAddStory = () => {
    if(this.state.input === '' || this.state.themeId === ''){
      return alert('Input story and select an initiative before adding')
    }
    this.props.addInitiative(this.state);
    this.setState({ input: "" });
  };

  dropDownTitle = () => {
    if(this.state.themeId === ''){
      return 'Select'
    }
    return this.state.themeName
  }

  loadStories = () => {
    const {stories} = this.props;

    return(
      <DropdownButton
        id="dropdown-basic-button"
        title={this.dropDownTitle()}
      >
        {stories.map((story => (
          <Dropdown.Item
            id={story.id}
            onClick={e => this.updateThemeId(e.target)}
            key={story.id}
            name={story.name}
            >
              {story.name}
            </Dropdown.Item>
        )))}
      </DropdownButton>
    )
  }

  render() {
    return (
      <div className='d-flex'>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder='Input story here...'
          className='pl-2'
        />
        <div>
          {this.loadThemes()}
        </div>
        
        <button className="btn btn-outline-primary btn-sm ml-2" onClick={this.handleAddInitiative}>
          Add Story
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initiatives: state.initiatives,
  themes: state.themes,
  stories: state.story
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

