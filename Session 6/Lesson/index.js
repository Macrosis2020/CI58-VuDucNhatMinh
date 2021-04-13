import {Register} from "./register.js";
import Login from "./login.js";
import Main from "./main.js";

class App {
    activeScreen;
    container;

    constructor(container) {
        this.container = container;
        this.setUpFirebaseAuthListener();
    }
    
    setUpFirebaseAuthListener = () => {
        firebase.auth()
        .onAuthStateChanged((user) => {
            console.log(user);
            if (user && user.emailVerified) {
                const main = new Main();
                this.setActiveScreen(main);
            }
        })
    }

    setActiveScreen(screen) {
        if (this.activeScreen) {                                //this.activeScreen !== undefined
            this.container.innerHTML = "";
        }
        this.activeScreen = screen;
        this.activeScreen.initRender(this.container);
    }
}

const container = document.getElementById("app");
const register = new Register();
const login = new Login();

const app = new App(container);
app.setActiveScreen(login);

export default app;