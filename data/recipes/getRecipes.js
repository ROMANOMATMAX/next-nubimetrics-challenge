export const getRecipes = async () => {
  console.log(process.env.BASE_URL);
  return fetch('http://localhost:3001/recipes')
    .then(res => res.json())
    .then( recipes => {
      console.log(recipes);
      return recipes;
  })
};
