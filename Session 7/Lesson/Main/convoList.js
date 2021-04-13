import Convo from "./convo.js";
import CreateConvoModal from "./createConvoModal.js";

class ConvoList {
    $btnCreateConvo;
    $btnLogOut;

    createConvoModal;

    convoList;
    activeConvo;
    onChangeActiveConvo;

    constructor(onChangeActiveConvo) {   
        this.$btnCreateConvo = document.createElement('inline-block');
        this.$btnCreateConvo.classList.add('pseudo-btn');
        this.$btnCreateConvo.innerHTML = '+';
        this.$btnCreateConvo.addEventListener('click', this.openCreateModal);

        this.$btnLogOut = document.createElement('inline-block');
        this.$btnLogOut.classList.add('pseudo-btn');
        this.$btnLogOut.innerHTML = 'Log Out';
        this.$btnLogOut.addEventListener('click', () => {
            firebase.auth()
            .signOut();
            // console.log(user);
            location.reload();
        })

        this.$convoListContainer = document.createElement('div');

        this.createConvoModal = new CreateConvoModal();
        this.setUpConvoListener();

        this.convoList = [];

        this.onChangeActiveConvo = onChangeActiveConvo;
    }

    openCreateModal = () => {
        this.createConvoModal.setVisible(true);
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.style.width = '200px';
        div.classList.add('item');
        // div.innerHTML = "ConvoList";

        const btnContainer = document.createElement('div');
        btnContainer.appendChild(this.$btnCreateConvo);
        btnContainer.appendChild(this.$btnLogOut);
        btnContainer.style.marginTop = '10px';
        btnContainer.style.marginBottom = '10px';

        div.appendChild(btnContainer);
        div.appendChild(this.$convoListContainer);
        this.createConvoModal.initRender(div);

        container.appendChild(div);
    }

    setActiveConvo = (convo) => {
        this.activeConvo = convo;
    }

    setUpConvoListener = () => {
        db.collection('conversations').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                const convo = new Convo(
                    change.doc.id, 
                    change.doc.data().name, 
                    change.doc.data().users.length,
                    (convo) => {
                        if (this.activeConvo) {
                        this.activeConvo.setActive(false);
                        }
                        this.onChangeActiveConvo(convo);
                        this.activeConvo.setActive(true);
                    });
                this.convoList.push(convo);
                convo.initRender(this.$convoListContainer);
            })
            
        })
    }
}

export default ConvoList;