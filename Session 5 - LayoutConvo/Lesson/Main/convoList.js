import CreateConvoModal from "./createConvoModal.js";

class ConvoList {
    $btnCreateConvo;
    createConvoModal;

    constructor() {
        this.$btnCreateConvo = document.createElement('div');
        this.$btnCreateConvo.classList.add('pseudo-btn');
        this.$btnCreateConvo.innerHTML = '+';
        this.$btnCreateConvo.addEventListener('click', this.openCreateModal);

        this.createConvoModal = new CreateConvoModal();
        this.setUpConvoListener();
    }

    openCreateModal = () => {
        this.createConvoModal.setVisible(true);
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.style.width = '200px';
        div.classList.add('item');
        // div.innerHTML = "ConvoList";

        div.appendChild(this.$btnCreateConvo);
        this.createConvoModal.initRender(div);

        container.appendChild(div);
    }

    setUpConvoListener = () => {
        db.collection('conversations').onSnapshot((snapshot) => {
            snapshot.docChanges().forEach((change) => {
                console.log(change.doc.data());
            })
        })
    }
}

export default ConvoList;