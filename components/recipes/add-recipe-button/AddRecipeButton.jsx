import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const AddRecipeIconWrapper = styled.div`
  position: fixed;
  bottom: 24px;
  right: 10px;
  width: 56px;
  height: 56px;
  background-color: #0C969D;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 768px) {
    top: 90vh;
    right: 29px;
  }
`

export const AddRecipeButton = ({ changeModalStatus }) => {
  return (
    <AddRecipeIconWrapper
      onClick={() => changeModalStatus(prev => !prev)}
    >
      <FontAwesomeIcon size='2x' icon={faPlus} color='white'fontSize='12px'/>        
    </AddRecipeIconWrapper>
  )
};
