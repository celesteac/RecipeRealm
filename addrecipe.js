////// WEBSOCKETS

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);

ws.onopen = (event) => {
    console.log("ws connected");
};
  
ws.onmessage = (event) => {
    console.log("message recieved")
}

///////// OTHER FUNCTIONS

const recipeForm = document.getElementById("recipeForm");
recipeForm.onsubmit = function(event) {
    event.preventDefault();
    addRecipe();
    document.getElementById('title').value = '';
    recipeForm.reset();
}

async function addRecipe(){
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


    ////////////////////////get recipes from the server
    let recipes = [];
    // try{
    //     const response = await fetch('/api/recipes');
    //     recipes = await response.json();
    //     recipes = recipes.recipes;

    //     localStorage.setItem('recipes',JSON.stringify(recipes));
    // }
    // catch{
    //     const recipesJSON = localStorage.getItem('recipes');
    //     if(recipesJSON){
    //         recipes = JSON.parse(recipesJSON);
    //     }
    // }

    ///////////////////call server endpoint to save the recipes
    try{
        const response = await fetch('/api/newrecipe', {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(newRecipe),
        });

        const recipes = await response.json();
        recipes = recipes.recipes;
        recipes.push(newRecipe);
        recipesJSON = JSON.stringify(recipes);
        localStorage.setItem('recipes', recipesJSON);
        ws.send(recipesJSON);
    }
    catch{
        recipes.push(newRecipe);
        recipesJSON = JSON.stringify(recipes);
        localStorage.setItem('recipes', recipesJSON);
        ws.send(recipesJSON);    
    }

}

function backToCookbook(){
    window.location.href = "recipebook.html";
}


