class ConvoInfo {
    $txtEmail;
    $form;
    $btnAdd;
    $userList;
    activeConvo;
    userListener;

    constructor() {
        this.$form = document.createElement('form');

        this.$txtEmail = document.createElement('input');
        this.$txtEmail.type = 'email';
        this.$txtEmail.classList.add('grow-1');
        this.$txtEmail.placeholder = 'Insert invitee\'s email';

        this.$btnAdd = document.createElement('button');
        this.$btnAdd.innerHTML = 'Add';
        this.$btnAdd.type = 'submit';

        this.$userList = document.createElement(div);
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'item');

        div.appendChild(this.$txtEmail);
        div.appendChild(this.$btnAdd);

        this.$form.appendChild(div);

        container.appendChild(this.$form);
        container.appendChild(this.$userList);
    }

    setUpUserListener = () => {
        
    }

    setActiveConvo = (convo) => {
        this.activeConvo = convo;
    }
}
export default ConvoInfo;