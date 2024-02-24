function addRecipe(){
    const titleEl = document.getElementById('title');
    const hoursEl = document.getElementById('time-hours');
    const minEl = document.getElementById('time-min');
    const urlEl = document.getElementById('url');
    const categoryEl = document.getElementById('category');
    const newRecipe = { title:titleEl.value,
                        hours:hoursEl.value,
                        minutes:minEl.value,
                        url:urlEl.value,
                        category:categoryEl.value,
                        user:localStorage.getItem('user'),
                    }; 
    

    let recipes = [];
    const recipesJSON = localStorage.getItem('recipes');
    if(recipesJSON){
        recipes = JSON.parse(recipesJSON);
    }
    recipes.push(newRecipe);


    localStorage.setItem('recipes', JSON.stringify(recipes));
    console.log("recipes: " + recipes);
    console.log("new recipe: " + newRecipe);
    console.log("again");
}