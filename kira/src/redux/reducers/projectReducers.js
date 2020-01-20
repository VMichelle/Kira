export const ADD_THEME = "ADD_THEME";
export const ADD_INITIATIVE = "ADD_INITIATIVE";

const initialState = {
    themes: [{id: 1, name:'Canada'}, {id: 2, name:'United States'}, {id: 3, name:'South America'}],
    initiatives: []
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
            };
        }
        case ADD_INITIATIVE: {
            const newArr = [];
            for(let i=0; i<state.initiatives.length; i++){
                newArr.push(state.initiatives[i])
            }
            newArr.push({id: state.initiatives.length+1, name: action.name})
            return {
                themes: newArr
            };
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