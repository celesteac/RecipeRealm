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
                        categoryEl:categoryEl.value,
                        user:localStorage.getItem('user'),
                    }; 
    localStorage.setItem('recipe', JSON.stringify(newRecipe));
    console.log(newRecipe);
    console.log("again");
}