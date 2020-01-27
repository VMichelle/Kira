import data from './data.js'

export const ADD_THEME = "ADD_THEME";
export const ADD_INITIATIVE = "ADD_INITIATIVE";
export const ADD_STORY = "ADD_STORY";


const initialState = data()
  
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
                ...state,
                themes: newArr
            };
        }
        case ADD_INITIATIVE: {
            const newArr = [];
            for(let i=0; i<state.initiatives.length; i++){
                newArr.push(state.initiatives[i])
            }
            newArr.push({
              id: state.initiatives.length+1,
              name: action.name.input,
              themeId: action.name.themeId
            })
            return {
                ...state,
                initiatives: newArr
            };
        }
        case ADD_STORY: {
          const newArr = [];
          for(let i=0; i<state.stories.length; i++){
              newArr.push(state.stories[i])
          }
          newArr.push({
            id: state.stories.length+1,
            name: action.name.input,
            initiativeId: action.name.initiativeId
          })
          return {
              ...state,
              stories: newArr
          };
      }        


      default:
        return state;
    }
  }

  export const addTheme = name => ({
    type: ADD_THEME,
    name: name
  });

  export const addInitiative = name => ({
    type: ADD_INITIATIVE,
    name: name
  });