import React from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

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

export const Ingredient = ({
  ingredientData,
  ingredients,
  setIngredients
}) => {
  const deleteIngredientFromList = () => {
    setIngredients(ingredients.filter(ingredient => ingredient.number!== ingredientData.number))
  };

  return (
    <IngredientWrapper>
      <label htmlFor="">{ingredientData.number}</label>
      <Input
        disabled
        value={ingredientData.ingredient}
        ingredient
      />
      <FontAwesomeIcon
        color={'#F7941D'}
        icon={faTrashCan}
        fontSize='22px'
        onClick={deleteIngredientFromList}
      />
    </IngredientWrapper>
  )
};
