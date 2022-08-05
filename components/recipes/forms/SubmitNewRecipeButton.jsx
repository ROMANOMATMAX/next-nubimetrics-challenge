import React from 'react'
import styled from 'styled-components'

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button.attrs({
  type: 'submit',
})`
cursor: pointer;
  color: #fff;
  width: 110px;
height: 48px;
  border: none;
  border-radius: 25px;
  background-color: #B2B2B3
`

export const SubmitNewRecipeButton = () => {
  return (
    <ButtonContainer>
      <Button>Crear</Button>
    </ButtonContainer>
  )
}
