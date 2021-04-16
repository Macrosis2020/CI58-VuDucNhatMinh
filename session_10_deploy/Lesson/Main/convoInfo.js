class ConvoInfo {
    $txtEmail;
    $form;
    $btnAdd;
    $userList;
    activeConvo;
    userListener;

    constructor() {
        this.$form = document.createElement('form');
        this.$form.addEventListener('submit', this.onSubmit)

        this.$txtEmail = document.createElement('input');
        this.$txtEmail.type = 'email';
        this.$txtEmail.classList.add('grow-1', 'form-input');
        this.$txtEmail.placeholder = 'Insert invitee\'s email';

        this.$btnAdd = document.createElement('button');
        this.$btnAdd.innerHTML = 'Add';
        this.$btnAdd.type = 'submit';
        this.$btnAdd.classList.add('form-btn');

        this.$userList = document.createElement('div');
        this.$userList.style.fontSize = '50%';
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'item', 'column-flex');

        this.$form.appendChild(this.$txtEmail);
        this.$form.appendChild(this.$btnAdd);

        div.appendChild(this.$form);
        div.appendChild(this.$userList);

        container.appendChild(div);
    }

    onSubmit = (event) => {
        event.preventDefault();
        const email = this.$txtEmail.value;
        if (this.activeConvo) {
        db.collection('conversations')
        .doc(this.activeConvo.id)
        .update({
            name: this.activeConvo.name,
            users: this.activeConvo.users.concat(email),
        });
        this.$txtEmail.value = '';
        } 
    }

    deleteUser = (email) => {
        db.collection('conversations').doc(this.activeConvo.id).update({
            users: this.activeConvo.users.filter((item) => {
                return item !== email;
            })
        })
    }

    setActiveConvo = (convo) => {
        this.activeConvo = convo;
        this.$userList.innerHTML = "";
        this.activeConvo.users.forEach((email) => {
            const div = document.createElement('div');
            div.classList.add('item', 'marg', 'pad', 'd-flex', 'justify-between');
            
            const div2 = document.createElement('div');
            div2.classList.add('user-field');
            div2.innerHTML = email;
            div.appendChild(div2);

            const delBtn = document.createElement('div');
            delBtn.innerHTML = 'x';
            delBtn.classList.add('pseudo-btn');
            delBtn.style.display = 'inline-block';
            delBtn.addEventListener('click', () => {
                this.deleteUser(email);
            });
            div.appendChild(delBtn);

            this.$userList.appendChild(div);        
        })
    }
}
export default ConvoInfo;