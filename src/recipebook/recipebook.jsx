import React from 'react';
import RecipeCard from './recipeCard';
import RecipesPanel from './recipesPanel';
import NotificationsPanel from './notificationsPanel';
import './addrecipe.css'

export function RecipeBook() {
  return (
    <main>
      <section className="col-sm-9">
        <div>recipe book displayed here</div>
      </section>
      <section className="col-sm-3 py-5 d-flex justify-content-start">
        <div>notifications displayed here</div>

      </section >
    </main>
  );
}