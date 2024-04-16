import React from 'react';
import RecipeCard from './recipeCard';
import CategoryCard from './categoryCard';

export default function RecipesPanel() {
  return (
    <div class=" container text-bg-light col-sm-10 px-5 py-4 rounded" id="r-list">
        <h2>Recipe Book</h2>
        <CategoryCard category={"Random Recipe"} color={"info"}/>
        <CategoryCard category={"Breakfast"} color={"secondary"}/>
        <CategoryCard category={"Lunch"} color={"secondary"}/>
        <CategoryCard category={"Dinner"} color={"secondary"}/>
        <CategoryCard category={"Dessert"} color={"secondary"}/>
    </div>
  );
}