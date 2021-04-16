class Composer {
    $form;
    $txtMessage;
    $btnSend;
    activeConvo;
    constructor() {
        this.$form = document.createElement('form');
        
        this.$txtMessage = document.createElement('input');
        this.$txtMessage.type = 'text';
        this.$txtMessage.placeholder = 'Enter your message';
        this.$txtMessage.classList.add('grow-1', 'form-input');

        this.$btnSend = document.createElement('button');
        this.$btnSend.type = 'submit';
        this.$btnSend.innerHTML = 'Send';
        this.$btnSend.classList.add('form-btn');
        this.$form.addEventListener('submit', this.onSendMsg);
    }

    initRender = (container) => {
        const div = document.createElement('div');
        this.$form.classList.add('d-flex');

        this.$form.appendChild(this.$txtMessage);
        this.$form.appendChild(this.$btnSend);

        div.appendChild(this.$form);

        container.appendChild(div);
    }

    onSendMsg = (event) => {
        event.preventDefault();
        if (this.activeConvo) {
            if (this.$txtMessage.value) {
        db.collection('messages').add({
            content: this.$txtMessage.value,
            sender: firebase.auth().currentUser.email,
            convoID: this.activeConvo.id,
            sentAt: firebase.firestore.FieldValue.serverTimestamp(),
        })}
        }
        this.$txtMessage.value = '';
    }
    setActiveConvo = (convo) => {
        this.activeConvo = convo;
    }
}

export default Composer;