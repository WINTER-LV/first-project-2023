const loginForm = document.querySelector(".login-form__type");
const loginButton = document.querySelector("#none-hidden");
const inputUserName =document.querySelector("#input-username");
const inputUserPw= document.querySelector("#input-userpw");
const h3 = document.querySelector("#hello-user");
const HIDDEN = "hidden";
const usernameStorage = localStorage.getItem("username");
const passwordStorage = localStorage.getItem("password");

function loginSubmit(event){
  event.preventDefault();
  const savedUserName = inputUserName.value;
  const savedUserPw = inputUserPw.value;
 localStorage.setItem("username", savedUserName);
 localStorage.setItem("password", savedUserPw);
  loginForm.classList.add(HIDDEN);
  h3.classList.add("none-display");
  h3.textContent=`${savedUserName}님 로그인 되었습니다!`;
  
}


function logoutSubmit(out){
    out.preventDefault()
    loginForm.classList.remove(HIDDEN);
    loginButton.value="Log in";
    h3.classList.remove("none-display");
    h3.textContent="";
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    loginButton.removeEventListener("click", logoutSubmit);
    loginForm.addEventListener("submit", toggleButton);
}



function toggleButton(){
    if(loginForm.classList.contains(HIDDEN)){
        loginForm.classList.remove(HIDDEN);
        h3.classList.remove("none-display");
        h3.textContent="";
        loginButton.value="Log in";
        loginForm.removeEventListener("submit", logoutSubmit);
        loginForm.addEventListener("submit", loginSubmit);
    
    } else{
        const savedUserName = inputUserName.value;
        const savedUserPw = inputUserPw.value;
        localStorage.setItem("username", savedUserName);
        localStorage.setItem("password", savedUserPw);
        loginForm.classList.add(HIDDEN);
        h3.classList.add("none-display");
        h3.textContent=`${savedUserName}님 로그인 되었습니다!`;
         loginButton.value="Log out";
    }
}




if(usernameStorage !== null && passwordStorage !== null ){
    loginForm.classList.add(HIDDEN);
    h3.classList.add("none-display");
    h3.textContent=`${usernameStorage}님 로그인 되었습니다!`;
    loginButton.value="Log out";
    loginButton.addEventListener("click", logoutSubmit);



} else{
    loginForm.classList.remove(HIDDEN);
    h3.classList.remove("none-display");
    h3.textContent="";
    loginForm.addEventListener("submit", toggleButton);

}


