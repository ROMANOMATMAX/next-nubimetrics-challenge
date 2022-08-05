import React from 'react'
import styled from 'styled-components'

const LogoContainer = styled.div`
  height: 5rem;
  width: 7.25rem;
  background-image: url("/images/logo.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Logo = () => {
  return (
    <LogoContainer />
  )
};
