import React, { useState } from 'react';
import { Ingredient } from './Ingredient';
import { IngredientCreatorInput } from './IngredientCreatorInput';

export const IngredientList = () => {
  const [ingredients, setIngredients] = useState([]);
  return (
    <div>
      <IngredientCreatorInput
        ingredients={ingredients}
        setIngredients={setIngredients}
      />
      {ingredients.map((ingredient) => (
        <Ingredient
          key={ingredient.number}
          ingredientData={ingredient}
          ingredients={ingredients}
          setIngredients={setIngredients}
        />
      ))}
    </div>
  )
}
