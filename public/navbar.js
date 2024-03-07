function displayUsername(){
    const user = localStorage.getItem("user") ?? 'New user';
    const userNameEl = document.getElementById('userdisplay');
    userNameEl.textContent = user;
}

displayUsername();