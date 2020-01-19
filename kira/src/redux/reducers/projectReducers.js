export const ADD_THEME = "ADD_THEME";
// import { combineReducers } from "redux";
// import visibilityFilter from "./visibilityFilter";
// import todos from "./todos";

// export default combineReducers({ todos, visibilityFilter });

//export {themes} from './themes'

// import { 
//     ADD_THEME,
//     ADD_INITIATIVE,
//     ADD_EPIC,
//     ADD_STORY,
//     ADD_COMMENT,
//     ADD_USER
//  } from "../actionTypes";

const initialState = {
    themes: [{id: 1, name:'theme 2'}, {id: 2, name:'theme 3'}]
  };
  
  export function kira(state = initialState, action) {
    console.log(action.type)

    switch (action.type) {
      case ADD_THEME: {
          
            const newArr = [];
            for(let i=0; i<state.themes.length; i++){
                newArr.push(state.themes[i])
            }
            newArr.push({id: state.themes.length+1, name: action.name})
            return {
                themes: newArr
            }


      //   const { id, content } = action.payload;
      //   return {
      //     ...state,
      //     themes: {
      //       ...state.byIds,
      //       [id]: {
      //         content,
      //         completed: false
      //       }
      //     }
      //   };
      }
      default:
        return state;
    }
  }

  export const addTheme = name => ({
    type: ADD_THEME,
    name: name
  });