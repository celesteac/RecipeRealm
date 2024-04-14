function displayUsername(){
    const user = localStorage.getItem("user") ?? 'No user';
    const userNameEl = document.getElementById('userdisplay');
    userNameEl.textContent = user;
}

displayUsername();