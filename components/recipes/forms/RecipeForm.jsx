import React, { useState } from 'react';
import styled from 'styled-components';
import { ToggleSwitch } from '../list/ToggleSwitch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { IngredientList } from './IngredientList';
import { SubmitNewRecipeButton } from './SubmitNewRecipeButton';

const FormWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: end;
  background-color: rgba(30, 54, 70, 0.3);
  align-items: flex-end;

  @media (min-width: 768px) {
    align-items: initial;
  }
`;

const Form = styled.form`
  position: relative;
  width: 29rem;
  background: #fff;
  padding: 27.5px 27.5px 0 27.5px;
  max-height: 100vh;

  @media (min-width: 768px) {
    max-height: none;
  }
`;

const FormTitle = styled.h3`
  font-family: "Poppins", Times, serif;
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: 24px;
`;

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

const TextArea = styled.textarea`
  -webkit-appearance: none;
  border: none;
  border: 1px solid #54B5BA;
  border-radius: 4px;
  height: 172px;
  width: 100%;
`

const FormSectionTitle = styled.p`
  font-family: "Poppins", Times, serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.5rem;
  margin-bottom: 16px;
`

const FormInputWrapper = styled.div`
  margin-bottom: 42px;
`

const CloseModal = styled.div`
  position: absolute;
  top: 27.5px;
  right: 27.5px;
`;

const RadioInputLabel = styled.label`
  margin-left: 8px;
`;

const RadioInputContainer = styled.div`
  display: flex;
  gap: 24px;
`;

export const RecipeForm = ({ changeModalStatus }) => {
  return (
    <FormWrapper>
      <Form>
        <FormTitle>Nueva Receta</FormTitle>
        <CloseModal onClick={() => changeModalStatus(prev => !prev)}>
          <FontAwesomeIcon size='2x' icon={faClose} fontSize='12px'/> 
        </CloseModal>
        <FormInputWrapper>
          <label htmlFor="name">
            <FormSectionTitle>Nombre de la receta</FormSectionTitle>
          </label>
          <Input id='name'placeholder="Olla caliente de carne y arroz en olla de cocción lenta" />
        </FormInputWrapper>
        <FormInputWrapper>
          <FormSectionTitle>Ingredientes</FormSectionTitle>
          <IngredientList />
        </FormInputWrapper>
        <FormInputWrapper>
          <label htmlFor="preparation">
            <FormSectionTitle>Preparacion</FormSectionTitle>
          </label>
          <TextArea name="" id="preparation" cols="30" rows="10"></TextArea>
        </FormInputWrapper>
        <FormInputWrapper>
          <FormSectionTitle>Reseñas</FormSectionTitle>
          <RadioInputContainer>
            <div>
              <input type="radio" id="huey" name="drone" value="huey" checked />
              <RadioInputLabel>1</RadioInputLabel>
            </div>
            <div>
              <input type="radio" id="dewey" name="drone" value="dewey" />
              <RadioInputLabel>2</RadioInputLabel>
            </div>
            <div>
              <input type="radio" id="louie" name="drone" value="louie" />
              <RadioInputLabel>3</RadioInputLabel>
            </div>
            <div>
              <input type="radio" id="louie" name="drone" value="louie" />
              <RadioInputLabel>4</RadioInputLabel>
            </div>
          </RadioInputContainer>
        </FormInputWrapper>
        <FormInputWrapper>
          <FormSectionTitle>Cocinado antes</FormSectionTitle>
          <ToggleSwitch />
        </FormInputWrapper>
        <SubmitNewRecipeButton />
      </Form>
    </FormWrapper>
  )
};
