export const addTheme = content => ({
    type: ADD_THEME,
    payload: {
      id: ++nextThemeId,
      content
    }
  });