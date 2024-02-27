function addRecipe(){
    const titleEl = document.getElementById('title');
    const hoursEl = document.getElementById('time-hours');
    const minEl = document.getElementById('time-min');
    const descriptEl = document.getElementById('description');
    const urlEl = document.getElementById('url');
    const categoryEl = document.getElementById('category');
    const newRecipe = { title:titleEl.value,
                        hours:hoursEl.value,
                        minutes:minEl.value,
                        description:descriptEl.value,
                        url:urlEl.value,
                        category:categoryEl.value,
                        user:localStorage.getItem('user'),
                    }; 
    
    if(newRecipe.description === undefined){
        newRecipe.description = "";
    }

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

    resetForm();
}

function resetForm() {
    document.getElementById("recipeForm").reset();
}

function backToCookbook(){
    window.location.href = "recipebook.html";
}