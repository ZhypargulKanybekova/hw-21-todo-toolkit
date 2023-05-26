import React from "react";
import { TodoItem } from "./TodoItem";
import { useDispatch, useSelector } from "react-redux";
import {
  complateTodo,
  deleteTodo,
  editSaveTodo,
} from "../store/todo/TodoThunk";
import styled from "styled-components";

export const TodoList = () => {
  const { items } = useSelector((state) => state.todo);
  console.log("items", items);

  const dispatch = useDispatch();

  const completedHandler = (data) => {
    const result = {
      ...data,
      completed: !data.completed,
    };
    dispatch(complateTodo(result));
  };

  const editSaveHandler = (data, title) => {
    const result = {
      ...data,
      title: title,
    };

    dispatch(editSaveTodo(result));
  };

  const deleteTodoHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <Container>
      {items?.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          completedHandler={completedHandler}
          editSaveHandler={editSaveHandler}
          deleteTodoHandler={deleteTodoHandler}
        />
      ))}
    </Container>
  );
};

const Container = styled.div`
 
`;
