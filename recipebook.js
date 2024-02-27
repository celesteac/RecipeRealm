let r = JSON.parse(localStorage.getItem('recipe'));
console.log(r)

function newRecipeEl(recipe){
    const r = document.createElement('div');
    r.innerHTML = ` <div class="card mt-2" id="item">
                        <div class="card-body d-flex flex-column justify-content-center">
                            <h3 class="card-title">${recipe.title}</h3>
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

function loadRecipes(){
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

    let recipes = [];
    const recipesJSON = localStorage.getItem('recipes');
    if(recipesJSON){
        recipes = JSON.parse(recipesJSON);
    }
    
    const recipeList = document.getElementById('r-list');

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


loadRecipes();



/////////////    NOTIFICATIONS PANEL     ///////////////
function newNotification(user="John", recipe="Yummy Recipe", time="15 min"){
    newN = document.createElement("div");
    newN.innerHTML = `<div class="alert alert-light" role="alert">
                        <strong>${user}</strong> added a recipe: <strong>${recipe}</strong> 
                        ${time} ago
                      </div>`;
    return newN;

}

setInterval(()=>{
    const newNot = newNotification("Sabrina","Sourdough","1 hour");

    const notificationsContainer = document.getElementById('notifications-list');
    notificationsContainer.innerHTML = newNot.innerHTML + notificationsContainer.innerHTML;
},3000);