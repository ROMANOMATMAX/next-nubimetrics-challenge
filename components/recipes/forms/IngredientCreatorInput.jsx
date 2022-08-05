import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const IngredientWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 34px;
`
const Input = styled.input.attrs({ 
  type: 'text',
})`
  -webkit-appearance: none;
  border: none;
  border: 1px solid #54B5BA;
  height: ${props => props.ingredient ? '40px' : '54px'};
  margin-left: ${props => props.ingredient ? '8px' : '0'};
  margin-right: ${props => props.ingredient ? '27.75px' : '0'};
  border-radius: 4px;
  width: 100%;
`
const AddIngredientIconWrapper = styled.div`
  color: #8DC63F;
  border: 1.5px solid #8DC63F;
  border-radius: 50%;
  width: 22.5px;
  height: 22.5px;
`;

export const IngredientCreatorInput = ({ setIngredients, ingredients }) => {
  console.log('el array', ingredients);
  const [ingredient, setIngredient] = useState('');
  const inputIngredient = useRef();

  useEffect(() => {
    console.log(ingredient);
  }, [ingredient]);

  const addIngredientToList = () => {
    console.log('Need to add the ingredient to the list');
    setIngredients([
      ...ingredients,
      {
        number: ingredients.length +1,
        ingredient: inputIngredient.current.value,
        added: true
      }
    ]);

    setIngredient("");
  }

  return (
    <IngredientWrapper>
      <label htmlFor="">0</label>
      <Input
        ref={inputIngredient}
        value={ingredient}
        ingredient placeholder="Tipo de Ingrediente"
        onChange={(event) => setIngredient(event.target.value)}
      />
      <AddIngredientIconWrapper onClick={addIngredientToList}>
        <FontAwesomeIcon icon={faPlus} fontSize='22px'/>
      </AddIngredientIconWrapper>
    </IngredientWrapper>
  )
};
