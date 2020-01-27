import React from "react";
import { connect } from "react-redux";
import Theme from "./Theme";
import store from '../../redux/store'
import Initiative from '../initiatives/Initiative'

function onThemeClick(id, name){
    const state = store.getState();

    let themeInitiatives = state.initiatives.map(
        (dis => (
          <Initiative to={dis.id} key={dis.id} name={dis.name} />
        )
      )
    )
    
    DisplayInitiaties(themeInitiatives)

    // return(
    //   <div>
    //   <h4>{name} Initiatives</h4>
    //     <div className='d-flex'>{themeInitiatives}</div>
    //   </div>
    // )
  
}

function DisplayInitiaties(props){
  
    return(
      <div>
        <div>hi</div>
        {props.x}
      </div>
    )
  
}

const ThemeList = ({themes}) => {
  return(
  <div>
    <ul className='d-flex flex-row'>
        {themes.map((theme => (
          <Theme to={theme.id} key={theme.id} name={theme.name} onClick={() => onThemeClick(theme.id, theme.name)}/>
        )))
        }
    </ul>
    <div>
      <DisplayInitiaties/>
    </div>
  </div>
  )
}


const mapStateToProps = state => {

  return {
    themes: state.themes,
    initiatives: state.initiatives
  }
};

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps,mapDispatchToProps)(ThemeList);
