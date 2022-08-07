import React, { useState, useRef } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";


const SearchContainer = styled.div`
  background: white;
  position: relative;
  width: 50%;
`;

const SearchInput = styled.input`
  background-color: #F9F9F9;
  border-radius: 16px;
  border: none;
  box-sizing: border-box;
  height: 48px;
  width: 100%;
  padding: 20px 60px 20px 35px;
  display: block;
`;

const SearchButton = styled.button`
    width: 17.61px;
    height: 17.61px;
    box-sizing: border-box;
    background: transparent;
    border: none;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 15px 20px;
    z-index: 1;
`;

export const SearchControl = ({ recipes, setRecipes }) => {
  const [keySearch, setKeySearch] = useState('');
  const searchInput = useRef();

  return (
    <SearchContainer>
      <SearchInput type="text" placeholder="Buscador" />
      <SearchButton type="submit">
        <FontAwesomeIcon
          color="#1E3646"
          icon={faMagnifyingGlass}
          fontSize='15px'
          transform={{ rotate: 23.02 }} /> 
      </SearchButton>
    </SearchContainer>
  )
};