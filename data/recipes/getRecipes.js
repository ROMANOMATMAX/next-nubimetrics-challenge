export const getRecipes = async () => {
  return fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then( recipes => {
      return recipes;
  })
};
