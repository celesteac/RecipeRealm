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

let r = JSON.parse(localStorage.getItem('recipe'));
console.log(r)