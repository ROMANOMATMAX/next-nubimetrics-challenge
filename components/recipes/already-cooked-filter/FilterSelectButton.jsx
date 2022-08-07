import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FILTER_LABELS } from './constant';

const FilterSelectButtonContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  height: 48px;
  padding: 12px 24px 12px 24px;
  background-color: #EBF0F3;
  border-radius: 16px;
  align-items: center;
  gap: 8.5px;
  font-family: "Poppins", Times, serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
`;

export const FilterSelectButton = ({ setShowDropDown, selectedFilter }) => {
  const handleOnClickFilter = () => {
    setShowDropDown(prev => !prev);
  };

  return (
    <FilterSelectButtonContainer onClick={handleOnClickFilter}>
        <div>
          Cocido antes: <b>{FILTER_LABELS[selectedFilter]}</b>
        </div>
        <FontAwesomeIcon fontSize="18px" icon={faAngleDown} />  
    </FilterSelectButtonContainer>
  )
}
