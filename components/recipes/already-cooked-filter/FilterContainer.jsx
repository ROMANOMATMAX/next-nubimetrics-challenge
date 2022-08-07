import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import { FilterSelectButton } from './FilterSelectButton';
import { FilterDropdown } from './FilterDropdown';
import { ACTIVE_FEILD_FILTER_KEY } from './constant';

const FiltarContainerWrapper = styled.div`
  position: relative;
`;

export const FilterContainer = ({ setRecipes, allRecipes }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [showDropDown, setShowDropDown] = useState(false);

  useEffect(() => {
    if (ACTIVE_FEILD_FILTER_KEY[selectedFilter] === null) {
      setRecipes(allRecipes);
    } else if (ACTIVE_FEILD_FILTER_KEY[selectedFilter]) {
      setRecipes(allRecipes.filter(recipe => recipe.alreadyCooked === true));
    } else {
      setRecipes(allRecipes.filter(recipe => recipe.alreadyCooked === false));
    }
  }, [selectedFilter, allRecipes, setRecipes])

  return (
    <FiltarContainerWrapper>
      <FilterSelectButton setShowDropDown={setShowDropDown} selectedFilter={selectedFilter} />
      {showDropDown && <FilterDropdown setSelectedFilter={setSelectedFilter} setShowDropDown={setShowDropDown}/>}
    </FiltarContainerWrapper>
  )
};
