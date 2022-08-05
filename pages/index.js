import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AsideImageBanner, Logo } from '../components/common';
import { RecipesTable, AddRecipeButton, RecipeForm } from '../components/recipes';
import { getRecipes } from '../data/recipes'

const MainPageLayout = styled.div`
  display: grid;
  grid-column-gap: 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  grid-template-areas: 
    "header header"
    "aside aside"
    "main-content main-content";

  @media (min-width: 768px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas: 
      "header header"
      "aside main-content";
  }
`
const Header = styled.header`
  grid-area: header;
`
const Aside = styled.aside`
  grid-area: aside;
`
const MainContent = styled.section`
  grid-area: main-content;
  margin-top: 20px;
  @media (min-width: 768px) {
    margin-bottom: 0;
  }
`

function App() {
  const [modalOpened, setModalOpened] = useState(false);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getRecipes().then(data => setRecipes(data));
  }, []);

  return (
    <>
      <MainPageLayout>
        <Header>
          <Logo />
        </Header>
        <Aside>
          <AsideImageBanner />
        </Aside>
        <MainContent>
          <RecipesTable
            recipes={recipes}
          />
        </MainContent>
      </MainPageLayout>  
      <AddRecipeButton
        changeModalStatus={setModalOpened}
      />
      { modalOpened && <RecipeForm changeModalStatus={setModalOpened}/>}
    </>
  )
}

export default App
