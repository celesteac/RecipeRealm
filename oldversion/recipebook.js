////// WEBSOCKETS

const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
const ws = new WebSocket(`${protocol}://${window.location.host}/ws`);

ws.onopen = (event) => {
    console.log("ws connected");
};

////////// OTHER FUNCTIONS

function newRecipeEl(recipe){
    const r = document.createElement('div');
    r.innerHTML = ` <div class="card mt-2" id="item">
                        <div class="card-body d-flex flex-column justify-content-center">
                            <h3 class="card-title"><a href=${recipe.url} target="_blank" class="link-dark">
                            ${recipe.title}</a></h3>
                            <p class="card-text">${recipe.description}</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <span>Prep Time: ${recipe.hours} hours ${recipe.minutes} min</span>
                                <span>100 Views</span>
                                <span>Added by: ${recipe.user}</span>
                            </div>
                        </div>
                    </div>`;
    return r;
}

function emptyRecipeEl(){
    const r = document.createElement('div');
    r.innerHTML = ` <div class="card mt-2" id="item">
                        <div class="card-body d-flex flex-column align-items-center">
                            <p class="card-text">No recipes here yet!</p>
                        </div>
                    </div>`;
    return r;
}

function randRecipeEl(recipe){
    const r = document.createElement('div');
    r.innerHTML = ` <div class="card mt-2" id="item">
                        <div class="card-body d-flex flex-row justify-content-around align-items-center">
                            <h3 class="card-title"><a href=${recipe.url} target="_blank" class="link-dark">
                            ${recipe.title}</a></h3>
                            <p class="card-text">${recipe.description}</p>
                        </div>
                    </div>`;
    return r;
}

async function loadRecipes(){
    let categories = ["Breakfast",
                       "Lunch",
                       "Dinner",
                       "Desserts",
                       "Snacks",
                       "Appetizers",
                       "Latin",
                       "Asian",
                       "European",
                       "African",
                       "Oceanic"
                    ];

    ///get recipes from the server
    let recipes = [];
    try{
        const response = await fetch('/api/recipes');
        recipes = await response.json()
        recipes = recipes.recipes;

        localStorage.setItem('recipes',JSON.stringify(recipes));
    }
    catch{
        const recipesJSON = localStorage.getItem('recipes');
        if(recipesJSON){
            recipes = JSON.parse(recipesJSON);
        }
    }

    if(recipes.length){
        for(const recipe of recipes){
            const recipeEl = newRecipeEl(recipe);
            const group = document.getElementById(recipe.category);
            group.appendChild(recipeEl);
        }
    } 
    
    for(const cat of categories){
        const catEl = document.getElementById(cat);
        if (catEl.childElementCount < 2){
            catEl.appendChild(emptyRecipeEl());
        }
    }
    
}


function randomRecipe(){

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then((response) => response.json())
    .then((data) => {

        if(data.meals[0].strYoutube === ""){
            console.log("random meal not clickable")
            randomRecipe();
            return;
        }

        console.log(data)

        const randRecipe = { 
            title:data.meals[0].strMeal,
            description:"A fun random recipe! Click to open in YouTube",
            url:data.meals[0].strYoutube,
            category:"Random",
        }; 

        const recipeEl = randRecipeEl(randRecipe);
        const group = document.getElementById(randRecipe.category);
        group.appendChild(recipeEl);

    });

}

randomRecipe();

await loadRecipes();




/////////////    NOTIFICATIONS PANEL     ///////////////
function newNotification(user="John", recipe="Yummy Recipe", time="15 min"){
    newN = document.createElement("div");
    newN.innerHTML = `<div class="alert alert-light alert-dismissible fade show" role="alert">
                        <strong>${user}</strong> added a recipe: <strong>${recipe}</strong> 
                        ${time} ago
                        <button type="button" class="btn-close btn-sm" data-bs-dismiss="alert" aria-label="Close"></button>
                     </div>`;
    return newN;

}

ws.onmessage = async (event) => {
    console.log("message recieved");
    const msg = JSON.parse(await event.data.text())
    const r = msg[0];
    console.log(r);

    const newNot = newNotification(r.user, r.title);
    const notificationsContainer = document.getElementById('notifications-list');
    notificationsContainer.innerHTML = newNot.innerHTML + notificationsContainer.innerHTML;    
}

// setInterval(()=>{
//     const newNot = newNotification("Sabrina","Sourdough","1 hour");

//     const notificationsContainer = document.getElementById('notifications-list');
//     notificationsContainer.innerHTML = newNot.innerHTML + notificationsContainer.innerHTML;
// },3000);


