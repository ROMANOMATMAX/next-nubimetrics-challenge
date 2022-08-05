import React, {useState} from 'react';
import styled from 'styled-components';

const InputWrapper = styled.label`
  position: relative;
`;

const Input = styled.input`
  background-color: #79797A;
  display: none;

  &:checked + span {
    background-color: #8DC63F;

    &:before {
      left: 27px;
    }
  }
`;
const Slider = styled.span`
  display: flex;
  cursor: pointer;
  width: 48px;
  height: 24px;
  border-radius: 16px;
  background-color: #bfbfbf;
  position: relative;
  transition: background-color 0.2s;

  &:before {
    content: '';
    position: absolute;
    top:3px;
    left: 3px;
    width: 18px;
    height: 18px;
    border-radius: 45px;
    transition: 0.2s;
    background: #fff;
    box-shadow: 0 2px 4px 0 rgba(0, 35, 11, 0.2);
  }
`;

export const ToggleSwitch = ({ active }) => {
  const [toggled, setToggled] = useState(active);

  return (
    <InputWrapper>
      <Input 
        type="checkbox"
        checked={toggled}
        onChange={(event) => setToggled(event.target.checked)}
      />
      <Slider />
    </InputWrapper>
  )
};
