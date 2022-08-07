import React from 'react'
import styled from 'styled-components';
import { MAXIMUM_RATING } from './constants';

const StarOn = styled.div`
  height: 15px;
  width: 15px;
  background-image: url("/images/star-on.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StarOff = styled.div`
  height: 15px;
  width: 15px;
  background-image: url("/images/star-off.svg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const StarsContainer = styled.div`
  display: flex;
  gap: 5px;
`

export const RatingStar = ({ review, name }) => {
  const starOff = MAXIMUM_RATING - review;
  const positiveStarsList = Array.apply(null, {length: review}).map(Number.call, Number);
  const nonPositiveStarsList = Array.apply(null, {length: starOff}).map(Number.call, Number);

  return (
    <StarsContainer>
      {positiveStarsList.map((star) => (
        <StarOn key={`startOn-${review}-${name}-${star}`}/>
      ))}
      {nonPositiveStarsList.map((noStar) => (
        <StarOff key={`startOff-${review}-${name}-${noStar}`}/>
      ))}
    </StarsContainer>
  )
};
