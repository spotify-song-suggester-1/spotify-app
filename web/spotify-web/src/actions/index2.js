export const UPDATE_TITLE = "UPDATE_TITLE";

export const updateTitle = newTitle => {
  console.log("bk: actions/index.js: updateTitle: newTitle: ", newTitle);
  return {
    type: UPDATE_TITLE,
    payload: newTitle
  };
};
