(async () => {
    const userName = localStorage.getItem('user'); //if already logged in
    if (userName) { 
      document.querySelector('#username').textContent = userName;
      setDisplay('loginDialouge', 'none');
      setDisplay('authenticatedDialouge', 'block');
    } else {
      setDisplay('loginDialouge', 'block');
      setDisplay('authenticatedDialouge', 'none');
    }
})();



function loginUser(){
    loginOrCreate();
}

function createUser(){
    loginOrCreate();
}

function loginOrCreate(){
    const nameEl = document.querySelector("#name");
    const passEl = document.querySelector("#password");
    localStorage.setItem("user",nameEl.value);
    localStorage.setItem("password",passEl.value);
}

//used to modify HTML in index.html
function setDisplay(controlId, display) {
    const playControlEl = document.querySelector(`#${controlId}`);
    if (playControlEl) {
      playControlEl.style.display = display;
    }
  }