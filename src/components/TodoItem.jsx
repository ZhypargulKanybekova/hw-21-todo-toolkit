import React, { useState } from "react";
import styled from "styled-components";

export const TodoItem = ({
  item,
  completedHandler,
  editSaveHandler,
  deleteTodoHandler,
}) => {
  const [editValue, setEditValue] = useState(item.title);
  const [editOpen, setEditOpen] = useState(false);

  const editHandler = () => {
    setEditOpen(true);
  };

  const saveEditTodo = (event) => {
    event.preventDefault();

    editSaveHandler(item, editValue);
    setEditOpen(false);
  };

  return (
    <Container>
      <StyledDiv>
        {!editOpen ? (
          <StyledItemContainer>
            <StyledText completed={item.completed}>{item.title}</StyledText>
            <StyledButton onClick={() => completedHandler(item)}>
              completed
            </StyledButton>
            <StyledButton onClick={() => deleteTodoHandler(item.id)}>
              delete
            </StyledButton>
            <StyledButton onClick={editHandler}>edit</StyledButton>
          </StyledItemContainer>
        ) : (
          <div>
            <StyledInput
              type="text"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
            <StyledSaveButton onClick={saveEditTodo}>save</StyledSaveButton>
          </div>
        )}
      </StyledDiv>
    </Container>
  );
};
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: green;
  border-radius: 12px;
  margin: 10px;
  width: 400px;
  border: 10px solid;
  border-color: white;
`;

const StyledItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const StyledText = styled.p`
  color: ${({ completed }) => (completed ? "red" : "blue")};
`;

const StyledButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: ${({ secondary }) => (secondary ? "red" : "blue")};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

const StyledSaveButton = styled.button`
  margin-left: 10px;
  padding: 5px 10px;
  background-color: green;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
