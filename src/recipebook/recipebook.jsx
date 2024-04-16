import React from 'react';
import RecipesPanel from './recipesPanel';
import NotificationsPanel from './notificationsPanel';

export function RecipeBook() {
  return (
    <main>
      <section className="col-sm-9">
        <RecipesPanel />
      </section>
      <section className="col-sm-3 py-5 d-flex justify-content-start">
        <NotificationsPanel />
      </section >
    </main>
  );
}