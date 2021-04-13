import app from "./index.js";
import {Register} from "./register.js";

class Login {
    $txtEmail;
    $txtPassword;
    $formLogin;
    $btnSubmit;

    constructor() {
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.type = "email";
        this.$txtEmail.placeholder = "Enter your email...";
        this.$txtEmail.style.margin = "1px";
        
        this.$txtPassword = document.createElement("input");
        this.$txtPassword.type = "password";
        this.$txtPassword.placeholder = "Enter your password...";
        this.$txtPassword.style.margin = "1px";

        this.$formLogin = document.createElement("form");
        this.$formLogin.addEventListener("submit", this.login);

        this.$btnSubmit = document.createElement("button");
        this.$btnSubmit.type = "submit";
        this.$btnSubmit.innerHTML = "Log In";
        this.$btnSubmit.style.margin = "1px";
    }

    goToRegister = () => {
        const register = new Register();
        app.setActiveScreen(register);
    }

    login = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const password = this.$txtPassword.value;

        firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
    }

    initRender = (container) => {
        const flexContainer = document.createElement("div");
        flexContainer.classList.add('d-flex', 'flex-column', 'centering');

        const title = document.createElement("h2");
        title.innerHTML = "Log In";
        flexContainer.appendChild(title);

        flexContainer.appendChild(this.$txtEmail);
        flexContainer.appendChild(this.$txtPassword);
        flexContainer.appendChild(this.$btnSubmit);
        
        const linkToRegister = document.createElement('a');
        linkToRegister.href = "#";
        linkToRegister.innerHTML = "Make a new account here";
        flexContainer.appendChild(linkToRegister);
        linkToRegister.addEventListener("click", this.goToRegister);

        this.$formLogin.appendChild(flexContainer);

        container.appendChild(this.$formLogin);
    }
}

export default Login;