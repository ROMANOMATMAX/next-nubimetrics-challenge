import styled from 'styled-components';
import { Recipe } from './Recipe';

const TableLayout = styled.div`
  padding: 0 15px;
  @media (min-width: 768px) {
    padding: 0 48px 0 0;
  }
`

export const RecipesTable = ({ recipes }) => {
  return (
    <TableLayout>
      {recipes.map((recipe) => (
        <Recipe
          key={recipe.id}
          recipe={recipe}
        />
      ))}
    </TableLayout>
  )
};
