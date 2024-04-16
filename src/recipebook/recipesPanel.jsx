import React from 'react';
import {RecipeCard, EmptyRecipe, RandomRecipe} from './recipeCard';
import CategoryCard from './categoryCard';

export default function RecipesPanel() {
  const recipe = {
    title: "Pizza",
    hours: 0,
    minutes: 30,
    description: "Italian, made American. Perpperoni",
    url: "https://www.example.com",
    category: "Lunch",
    user: "celeste"
  }

  return (
    <div class=" container text-bg-light col-sm-10 px-5 py-4 rounded" id="r-list">
        <h2>Recipe Book</h2>
        <CategoryCard category={"Random Recipe"} color={"info"}/>
        <RandomRecipe recipe={recipe} />
        <CategoryCard category={"Breakfast"} color={"secondary"}/>
        <RecipeCard recipe={recipe}/>
        <CategoryCard category={"Lunch"} color={"secondary"}/>
        <EmptyRecipe />
        <CategoryCard category={"Dinner"} color={"secondary"}/>
        <EmptyRecipe />
        <CategoryCard category={"Dessert"} color={"secondary"}/>
        <EmptyRecipe />
    </div>
  );
}