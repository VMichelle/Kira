import React from "react";
import { connect } from "react-redux";
import { addInitiative } from '../../redux/reducers/projectReducers';
import { Dropdown, DropdownButton } from 'react-bootstrap'

class AddInitiative extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      input: '',
      themeId: 0,
      themeName: ''
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
      themeId: parseInt(target.id),
      themeName: target.name
    })
  }

  handleAddInitiative = () => {
    if(this.state.input === '' || this.state.themeId === ''){
      return alert('Input initiative and select a theme before adding')
    }
    this.props.addInitiative(this.state);
    this.setState({ input: "" });
  };

  dropDownTitle = () => {
    if(this.state.themeId === 0){
      return 'Select Project'
    }
    return this.state.themeName
  }

  loadThemes = (id) => {
    const {themes} = this.props;

    return(
      <DropdownButton
        id="dropdown-basic-button"
        title={this.dropDownTitle()}
      >
        {themes.map((theme => (
          <Dropdown.Item
            id={theme.id}
            onClick={e => this.updateThemeId(e.target)}
            key={theme.id}
            name={theme.name}
            >
              {theme.name}
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
          placeholder='Add initiative'
          className='pl-2'
        />
        <div className='ml-2'>
          {this.loadThemes()}
        </div>
        
        <button className="btn btn-outline-primary btn-sm ml-2" onClick={this.handleAddInitiative}>
          Add Initiative
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  initiatives: state.initiatives,
  themes: state.themes
});

const mapDispatchToProps = dispatch => ({
  addInitiative: (state) => {
    dispatch(addInitiative(state))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddInitiative);
// export default AddTodo;
