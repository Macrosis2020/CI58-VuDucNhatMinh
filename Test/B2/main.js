class App {
    $form;
    $txtEmail;
    $txtPassword;
    $roleList;
    $registerBtn;
    constructor() {
        this.$form = document.createElement('form');
        this.$txtEmail = document.createElement('input');
        this.$txtPassword = document.createElement('input');
        this.$roleList = document.createElement('select');
        this.$registerBtn = document.createElement('button');
        this.$registerBtn.addEventListener('click', () => {
            this.register()
        })
    }
    initRender = (container) => {
        this.$roleList.innerHTML = '<option value="manager">Manager</option><option value="dev">Developer</option><option value="tester">Tester</option>';
        container.appendChild(this.$form);
        this.$form.appendChild(this.$txtEmail);
        this.$form.appendChild(this.$txtPassword);
        this.$form.appendChild(this.$roleList);
        this.$form.appendChild(this.$registerBtn);
        this.$registerBtn.innerHTML = "Register";
    }
    register = () => {
        if (this.email == 'null' || this.password == 'null') {
            console.log('email or password missing');
            return;
        }
        email = this.$txtEmail.value;
        password = this.$txtPassword.value;
        role = this.$roleList.value;
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
        const user = new
        db.collection('employees').add({

        }) 
    }
}
const main = new App;
const app = document.getElementById('app');
main.initRender(app);