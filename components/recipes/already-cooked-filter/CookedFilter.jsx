import React, { useRef } from 'react'
import styled from 'styled-components';
import { ACTIVE_FEILD_FILTER_KEY } from './constant';

const SwithContainter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  background-color: #EBF0F3;
  border-radius: 16px;
  font-family: "Poppins",Times,serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  grid-area: name;
  margin-bottom: 10px;

  @media (min-width: 768px) {
    width: 22%;
    margin-bottom: 0;
  }
`;

export const CookedFilter = ({ setRecipes, allRecipes }) => {
  const alreadyCookInput = useRef();

  const changeAlreadyCookedFilter = (filterValue) => {
    if (ACTIVE_FEILD_FILTER_KEY[filterValue] === null) {
      setRecipes(allRecipes);
    } else if (ACTIVE_FEILD_FILTER_KEY[filterValue]) {
      setRecipes(allRecipes.filter(recipe => recipe.alreadyCooked === true));
    } else {
      setRecipes(allRecipes.filter(recipe => recipe.alreadyCooked === false));
    }
  };

  return (
    <SwithContainter>
      <label htmlFor='cooked-filter'>Cocido antes:</label>

      <select
        ref={alreadyCookInput}
        name="cars"
        id="cooked-filter" 
        onChange={(event) => changeAlreadyCookedFilter(event.target.value)}  
      >
      <option value="all" selected>Todos</option>
      <option value="cooked">Activos</option>
      <option value="uncooked">Inactivos</option>
      </select>
    </SwithContainter>
  )
}
