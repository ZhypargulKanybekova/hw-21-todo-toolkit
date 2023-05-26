import { actionTypeTodo } from "./todoReducer";

const BASE_URL =
  "https://todo-redux-thunk-ee168-default-rtdb.firebaseio.com/todo-redux-thunk";

export const getTodo = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${BASE_URL}.json`);
      const data = await response.json();
      const result = [];

      for (const key in data) {
        result.push({
          id: key,
          title: data[key].title,
          completed: data[key].completed,
          edit: data[key].edit,
        });
      }

      dispatch({ type: actionTypeTodo.GET_TODO, payload: result });
    } catch (error) {
      console.log(error, "error");
    }
  };
};

export const todoPost = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}.json`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      dispatch(getTodo());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const complateTodo = (data) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/${data.id}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      dispatch(getTodo());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const editSaveTodo = (data) => {
  console.log("data", data);

  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/${data.id}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      dispatch(getTodo());
    } catch (error) {
      console.log("error", error);
    }
  };
};

export const deleteTodo = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`${BASE_URL}/${id}.json`, {
        method: "DELETE",
      });
      dispatch(getTodo());
    } catch (error) {
      console.log("error", error);
    }
  };
};
