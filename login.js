function login(){
    const nameEl = document.querySelector("#name");
    const passEl = document.querySelector("#password");
    localStorage.setItem("user",nameEl.value);
    localStorage.setItem("password",passEl.value);
}

