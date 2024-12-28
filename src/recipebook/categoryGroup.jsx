import React from 'react'
import { RecipeCard, EmptyRecipe, RandomRecipe} from './recipeCard';

export function CategoryCard({category, color}) {
    const bgColor = "col-sm-12 card mt-3 text-bg-" + color
    return (
        <div className={bgColor} id="category">
            <div className="card-body">
                <h3 className="card-title text-center m-0">{category}</h3>
            </div>
        </div>
    );
}


export function CategoryGroup({recipes, category, color}){

    if(recipes.length === 0){
        return (
            <div className={"col-sm-12"}>
                <CategoryCard category={category} color={color}/>
                <EmptyRecipe/>
            </div>
        );
    }

    else {
        return(
            <div className={"col-sm-12"}>
                <CategoryCard category={category} color={color}/>
                <RecipeCard recipe={recipes[0]}/>
            </div>
        );
    }
}
