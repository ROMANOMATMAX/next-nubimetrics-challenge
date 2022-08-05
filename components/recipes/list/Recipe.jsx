import React, { useState } from 'react'
import styled from 'styled-components'
import { RatingStar } from './RatingStar'
import { ToggleSwitch } from './ToggleSwitch'

const RecipeLayout = styled.div`
  height: 3rem;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas:
    "name review"
    "cooked cooked";
  grid-row-gap: 5px;

  @media (min-width: 768px) {
    grid-template-columns: 68% 18% 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "name review cooked";
    grid-row-gap: 0;
}
`
const RecipeName = styled.p`
  font-family: "Poppins", Times, serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.5rem;
  grid-area: name;
`
const RecipeReview = styled.div`
  grid-area: review;
`
const RecipeStatus = styled.p`
  grid-area: cooked;
`
const Divider = styled.hr`
  border: 1px solid #B1C4D1;
  border-radius: 5px;
  margin-top: 15px;

  @media (min-width: 768px) {
    padding: 0 48px 0 0;
    margin-top: 0;
  }
`

export const Recipe = ({ recipe }) => {
  const { name, review, alreadyCooked } = recipe;
  console.log('review', review);
  console.log('alreadyCooked', alreadyCooked);
  return (
    <>
      <RecipeLayout>
        <RecipeName>
          {name}
        </RecipeName>
        <RecipeReview>
          <RatingStar review={ review } />
        </RecipeReview>
        <RecipeStatus>
          <ToggleSwitch active={alreadyCooked}/>
        </RecipeStatus>
      </RecipeLayout>
      <Divider />
    </>
  )
};
