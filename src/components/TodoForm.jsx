import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoPost } from "../store/todo/TodoThunk";
import { actionTypeTodo } from "../store/todo/todoReducer";
import styled from "styled-components";

export const TodoForm = () => {
  const { selectValue } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      title: value,
      completed: false,
    };

    dispatch(todoPost(data));

    setValue("");
  };

  const selectChangeHandler = (event) => {
    dispatch({
      type: actionTypeTodo.SELECT_VALUE,
      payload: event.target.value,
    });
  };

  return (
  <StyledDiv>
          <form onSubmit={submitHandler}>
            <StyledInput
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <StyledButton>Add</StyledButton>
          </form>
    
          <StyledSelect value={selectValue} onChange={selectChangeHandler}>
            <option value="все">все</option>
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>
          </StyledSelect>
        </StyledDiv>
      );
    };
  


const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;



const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
`;

const StyledButton = styled.button`
  padding: 5px 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledSelect = styled.select`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  width: 200px;
  margin-top: 10px;
`;
