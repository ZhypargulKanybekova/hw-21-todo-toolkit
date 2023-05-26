export const actionTypeTodo = {
  GET_TODO: "GET_TODO",
  SELECT_VALUE: "SELECT_VALUE",
};

const initialState = {
  items: [],
  selectValue: "все",
};

export const todoReducer = (state = initialState, action) => {
  console.log("action", action);

  switch (action.type) {
    case actionTypeTodo.GET_TODO: {
      if (state.selectValue === "все") {
        return {
          ...state,
          items: action.payload,
        };
      }

      if (state.selectValue === "completed") {
        return {
          ...state,
          items: action.payload.filter((item) => item.completed === true),
        };
      }

      if (state.selectValue === "uncompleted") {
        return {
          ...state,
          items: action.payload.filter((item) => item.completed === false),
        };
      }
    }

    case actionTypeTodo.SELECT_VALUE:
      return { ...state, selectValue: action.payload };
    default:
      return state;
  }
};
