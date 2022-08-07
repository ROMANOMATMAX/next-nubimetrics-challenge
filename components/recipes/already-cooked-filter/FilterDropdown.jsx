import React from 'react';
import styled from 'styled-components';

const DropdownContainer = styled.div`
  position: absolute;
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 16px;
  height: 136px;
  width: 261px;
  border-radius: 16px;
  background-color: #FDFDFD;
  box-shadow: 4px 8px 12px 6px rgba(0,0,0,0.26);
  -webkit-box-shadow: 4px 8px 12px 6px rgba(0,0,0,0.26);
  -moz-box-shadow: 4px 8px 12px 6px rgba(0,0,0,0.26);
`;

const RadioInputLabel = styled.label`
  font-family: "Poppins", Times, serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

const InputRadioContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const FilterDropdown = ({ setSelectedFilter, setShowDropDown }) => {
  const handleInputRadioChange = (e) => {
    setSelectedFilter(e.target.value);
    setShowDropDown(false);
  }

  return (
    <DropdownContainer onChange={handleInputRadioChange}>
      <InputRadioContainer>
        <RadioInputLabel>Todos</RadioInputLabel>
        <input type="radio" name="filter" value="all" />
      </InputRadioContainer>
      <InputRadioContainer>
        <RadioInputLabel>Activos</RadioInputLabel>
        <input type="radio" name="filter" value="cooked" />
      </InputRadioContainer>
      <InputRadioContainer>
        <RadioInputLabel>Inactivos</RadioInputLabel>
        <input type="radio" name="filter" value="uncooked" />
      </InputRadioContainer>
    </DropdownContainer>
  )
}
