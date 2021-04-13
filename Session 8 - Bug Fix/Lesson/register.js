import app from "./index.js";
import Login from "./login.js";

class Register {
    $formRegister;
    $txtEmail;
    $txtDisplayName;
    $txtPassword;
    $txtConfirmPassword;
    $btnSubmit;
    $errorMessage;

    constructor() {
        this.$txtEmail = document.createElement("input");
        this.$txtEmail.placeholder = "Enter your email...";
        this.$txtEmail.type = "email";
        this.$txtEmail.style.display = "block";
        this.$txtEmail.style.marginBottom = "2px";

        this.$txtDisplayName = document.createElement("input");
        this.$txtDisplayName.placeholder = 'Enter your username...';
        this.$txtDisplayName.type = 'text';
        this.$txtDisplayName.style.display = "block";  
        this.$txtDisplayName.style.marginBottom = "2px";

        this.$txtPassword = document.createElement("input");  
        this.$txtPassword.placeholder = 'Enter your password...';
        this.$txtPassword.type = 'password';
        this.$txtPassword.style.display = "block";  
        this.$txtPassword.style.marginBottom = "2px";

        this.$txtConfirmPassword = document.createElement("input");    
        this.$txtConfirmPassword.placeholder = 'Confirm your password...';
        this.$txtConfirmPassword.type = 'password';
        this.$txtConfirmPassword.style.display = "block";
        this.$txtConfirmPassword.style.marginBottom = "2px";

        this.$formRegister = document.createElement('form');
        this.$formRegister.addEventListener('submit', this.handleSubmit);

        this.$btnSubmit = document.createElement('button');
        this.$btnSubmit.textContent = 'Register';
        this.$btnSubmit.type = 'submit';

        this.$errorMessage = document.createElement('p');
        this.$errorMessage.classList.add("error-msg");
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        const displayName = this.$txtDisplayName.value;
        const password = this.$txtPassword.value;
        const confirmPassword = this.$txtConfirmPassword.value;

        if (email === "") {
            this.setErrorMsg('Please enter your email');
            return;
        }
        if (displayName === "") {
            this.setErrorMsg('Please enter your username');
            return;
        }
        if (password === "") {
            this.setErrorMsg('Please enter your password');
            return;
        }
        if (confirmPassword === "") {
            this.setErrorMsg('Please confirm your password');
            return;
        }
        if (password !== confirmPassword) {
            this.setErrorMsg('Password and confirmed password must match');
            return;
        }
        this.setErrorMsg("");

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                firebase.auth().currentUser.updateProfile({
                    displayName: displayName
                })
                firebase.auth().currentUser.sendEmailVerification();
                console.log(userCredential);
            });

        // console.log(email, displayName, password, confirmPassword);
    }

    setErrorMsg = (content) => {
        this.$errorMessage.innerHTML = content;
        if (content !== "") {
            this.$errorMessage.style.display = 'block';
        } else {
            this.$errorMessage.style.display = 'none';
        }
    }

    goToLogin = () => {
        const login = new Login;
        app.setActiveScreen(login);
    }

    initRender = (container) => {
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('d-flex', 'flex-column', 'centering');
        this.$formRegister.classList.add('d-flex', 'flex-column', 'centering');
        this.$formRegister.style.width = '200px';
        flexContainer.style.marginTop = '5px';
        const title = document.createElement("h2");
        title.innerHTML = "Create your account";

        flexContainer.appendChild(title);
        title.style.width = '100%';   

        this.$formRegister.appendChild(this.$txtEmail);        
        this.$formRegister.appendChild(this.$txtDisplayName);        
        this.$formRegister.appendChild(this.$txtPassword);        
        this.$formRegister.appendChild(this.$txtConfirmPassword);
        this.$formRegister.appendChild(this.$btnSubmit);
        
        const linkToLogin = document.createElement('a');
        linkToLogin.innerHTML = "Already have an account? Log in here!";
        linkToLogin.href = "#";
        linkToLogin.addEventListener('click', this.goToLogin);
        this.$formRegister.appendChild(linkToLogin);

        this.$formRegister.appendChild(this.$errorMessage);

        // this.$txtEmail.style.width = '100%';
        // this.$txtDisplayName.style.width = '100%'; 
        // this.$txtPassword.style.width = '100%'; 
        // this.$txtConfirmPassword.style.width = '100%'; 
        // this.$errorMessage.style.width = '100%';
        
        flexContainer.appendChild(this.$formRegister);
        container.appendChild(flexContainer);        
    }
}
export {Register};