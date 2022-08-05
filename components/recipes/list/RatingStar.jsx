import React from 'react'
import styled from 'styled-components';
import { MAXIMUM_RATING } from './constants';

const Star = styled.span`
  height: 15px;
  width: 15px;
  font-size: 0.875rem;
  color: #FFD19A;
  background-color: unset;
  border: none;
`
const NoStar = styled.span`
  font-size: 0.875rem;
  color: #E9DBCB;
  background-color: unset;
  border: none;
`

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

export const RatingStar = ({ review }) => {
  console.log('review type ', typeof review)
  const starOff = MAXIMUM_RATING - review;
  const positiveStarsList = Array.apply(null, {length: review}).map(Number.call, Number);
  const nonPositiveStarsList = Array.apply(null, {length: starOff}).map(Number.call, Number);
  console.log(positiveStarsList);
  console.log(nonPositiveStarsList);
  return (
    <StarsContainer>
      {positiveStarsList.map((star) => (
        <StarOn />
      ))}
      {nonPositiveStarsList.map((noStar) => (
        <StarOff />
      ))}
    </StarsContainer>
  )
};
