import React from 'react';

export function RecipeCard({recipe}) {
  return (
    <div className="col-sm-12 card mt-2" id="item">
        <div className="card-body d-flex flex-column justify-content-center">
            <h3 className="card-title"><a href={recipe.url} target="_blank" className="link-dark">
            {recipe.title}</a></h3>
            <p className="card-text">{recipe.description}</p>
            <div className="d-flex justify-content-between align-items-center">
                <span>Prep Time: {recipe.hours} hours {recipe.minutes} min</span>
                <span>Views: 100</span>
                <span>Added by: {recipe.user}</span>
            </div>
        </div>
    </div>
  );
}

export function EmptyRecipe() {
    return (
        <div className="col-sm-12 card mt-2" id="item">
            <div className="card-body d-flex flex-column align-items-center">
                <p className="card-text">No recipes here yet!</p>
            </div>
        </div>
    );
}

export function RandomRecipe({recipe}) {
    return (
        <div className="col-sm-12 card mt-2" id="item">
            <div className="card-body d-flex flex-row justify-content-around align-items-center">
                <h3 className="card-title"><a href={recipe.url} target="_blank" className="link-dark">
                {recipe.title}</a></h3>
                <p className="card-text">{recipe.description}</p>
            </div>
        </div>
    );
}