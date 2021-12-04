// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
 
const API_URL = "https://b28wd-movies.herokuapp.com";

function App() {
   //const recipe = "Panner butter masala"
  

  return (
    <div className="App">

      <RecipeList/>
     
    </div>
  );
}

function RecipeList(){
  // const recipes = [];
  const [recipes,setRecipes] = useState([]);

  useEffect(()=>{
    fetch(`${API_URL}/recipes`)
    .then(data=>data.json())
    .then(recipes=>setRecipes(recipes));
  },[])
  return(
  <div className="recipe-list-container">
      {recipes && recipes.length > 0 
      ? recipes.map((recipe)=>(
          <Recipe recipe={recipe} key={recipe._id} />
        )):<NoRecipes/>}
  </div>
  );
}

function Recipe({recipe}){
  return(
    <div  className="recipe-container">
          <img className="recipe-picture" src={recipe.picture} alt={recipe.name}/>
        <p className="recipe-name">{recipe.name}</p>
    </div>
  )
}

function NoRecipes(){
  return(
    <div className="no-recipes">
      <img className="no-recipes-img" src="https://norecipes.com/wp-content/uploads/2019/10/nr-logo.png"
       alt="No-recipes-availabel" />
    <p className="no-recipes-content">No Recpies available</p>
    </div>
  )
}

export default App;

