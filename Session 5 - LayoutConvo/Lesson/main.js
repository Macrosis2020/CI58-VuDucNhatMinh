import ConvoList from "./Main/convoList.js";
import CreateConvoModal from "./Main/createConvoModal.js"

class Main {
    convoList;
    convoModal;

    constructor() {
        this.convoList = new ConvoList();
    };
    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add('d-flex');

        const logoutBtn = document.createElement("button");
        logoutBtn.innerHTML = "Log Out";
        logoutBtn.addEventListener('click', () => {
            firebase.auth()
            .signOut();
            // console.log(user);
            location.reload();
        })

        const content = document.createElement('div');
        content.classList.add('item', 'grow-1');
        content.style.height = '100vh';
        content.innerHTML = "Content";

        this.convoList.initRender(div);

        div.appendChild(content);

        container.appendChild(div);
        container.appendChild(logoutBtn);
    }
}

export default Main;