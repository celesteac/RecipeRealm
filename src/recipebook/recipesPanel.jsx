import React from 'react';
import { RecipeCard, EmptyRecipe, RandomRecipe} from './recipeCard';
import { CategoryCard, CategoryGroup } from './categoryGroup';
import { useEffect } from 'react';

async function loadRecipes() {
    let recipes = [];
    try {
        const response = await fetch('/api/recipes');
        const data = await response.json()
        recipes = data.recipes;

        localStorage.setItem('recipes', JSON.stringify(recipes));
    }
    catch (fetchError) {
        try {
            const recipesJSON = localStorage.getItem('recipes');
            if (recipesJSON) {
                recipes = JSON.parse(recipesJSON);
            }
        } catch (storageError) {
            console.error('Failed to load from localStorage:', storageError);
        }
        console.log("API fetch failed");
    }
    console.log(recipes);
    return recipes;
}

function sortRecipes(recipes) {
    const categories = ["Breakfast", "Lunch", "Dinner", "Desserts", "Snacks", "Appetizers",
        "Latin", "Asian","European","African","Oceanic"];
    const breakfast = [];
    const lunch = [];
    const dinner = [];
    const desserts = [];
    const snacks = [];
    const appetizers = [];
    const latin = [];
    const asian = [];
    const european = [];
    const african = [];
    const oceanic = [];
    for (const recipe of recipes) {

    }
}


export default function RecipesPanel() {
    let recipes;

    const recipe = [{
        title: "Pizza",
        hours: 0,
        minutes: 30,
        description: "Italian, made American. Pepperoni",
        url: "https://www.example.com",
        category: "Lunch",
        user: "celeste"
    }]

    useEffect(() => {
        recipes = loadRecipes().then();
    }, [])

    return (
        <div className=" container text-bg-light col-sm-10 px-5 py-4 rounded" id="r-list">
            <h2>Recipe Book</h2>
            <CategoryCard category={"Random Recipe"} color={"info"}/>
            <RandomRecipe recipe={recipe}/>
            <CategoryCard category={"Breakfast"} color={"secondary"}/>
            <RecipeCard recipe={recipe}/>
            <CategoryCard category={"Lunch"} color={"secondary"}/>
            <EmptyRecipe/>
            <CategoryCard category={"Dinner"} color={"secondary"}/>
            <EmptyRecipe/>
            <CategoryCard category={"Dessert"} color={"secondary"}/>
            <EmptyRecipe/>
            <CategoryGroup category={"Testing"} color={"secondary"} recipes={[recipe]}/>
        </div>
    );
}

