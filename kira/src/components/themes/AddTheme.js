import React from "react";
import { connect } from "react-redux";
import { addTheme } from '../../redux/reducers/projectReducers'

class AddTheme extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      input: ""
    };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddTheme = () => {
    this.props.addTheme2(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
          placeholder='Start here'
          className='pl-2'
        />
        <button className="btn btn-outline-primary btn-sm ml-2" onClick={this.handleAddTheme}>
          Add Project
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  themes: state.themes
});

const mapDispatchToProps = dispatch => ({
  addTheme2: (name) => {
    dispatch(addTheme(name))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddTheme);
// export default AddTodo;
