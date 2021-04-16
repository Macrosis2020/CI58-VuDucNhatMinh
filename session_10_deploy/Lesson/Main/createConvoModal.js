class CreateConvoModal {
    $background;
    $formCreate;
    $txtConvoName;
    $btnCreate;
    $btnClose;

    constructor() {
        this.$background = document.createElement('div');
        this.$background.style.height = '100vh';
        this.$background.style.width = '100vw';
        this.$background.style.position = 'fixed';
        this.$background.style.top = '0';
        this.$background.style.left = '0';
        this.$background.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
        this.$background.classList.add('centering');
        this.$background.style.display = 'none';

        this.$formCreate = document.createElement('form');
        this.$formCreate.addEventListener('submit', this.onSubmit);

        this.$txtConvoName = document.createElement('input');
        this.$txtConvoName.placeholder = "Conversation's name...";
        this.$txtConvoName.classList.add('form-input');

        this.$btnCreate = document.createElement('button');
        this.$btnCreate.innerHTML = 'Create';
        this.$btnCreate.classList.add('form-btn', 'marg');
        this.$btnCreate.style.width = 'fit-content';

        this.$btnClose = document.createElement('div');
        this.$btnClose.classList.add('pseudo-btn');
        this.$btnClose.innerHTML = 'x';
        // this.$btnClose.height = 'fit-content';
    }

    initRender = (container) => {
        const div = document.createElement('div');
        const h1 = document.createElement('div');
        h1.innerHTML = 'Create Conversation';
        h1.style.fontSize = '150%';
        h1.classList.add('marg')

        div.style.width = 'fit-content';
        div.style.padding = '10px';
        div.style.border = 'white solid 2px';
        div.style.backgroundColor = 'black';
        this.$formCreate.classList.add('d-flex', 'flex-column', 'centering');

        this.$btnClose.addEventListener('click', () => {
            this.setVisible(false);
        });
        div.appendChild(this.$btnClose);

        div.appendChild(h1);
        div.appendChild(this.$formCreate);

        this.$formCreate.appendChild(this.$txtConvoName);
        this.$formCreate.appendChild(this.$btnCreate);

        this.$background.appendChild(div);
        container.appendChild(this.$background);
    }

    setVisible = (value) => {
        if (value === true) {
            this.$background.style.display = 'flex';
        } else {
            this.$background.style.display = 'none';
        }
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (this.$txtConvoName.value) {
            const name = this.$txtConvoName.value;
            const authUser = firebase.auth().currentUser;
            db.collection('conversations').add({
                name: name,
                admin: authUser.email,
                users: [authUser.email],
            })
                .then(() => {
                    this.setVisible(false);
                })
        }
    }
}

export default CreateConvoModal;