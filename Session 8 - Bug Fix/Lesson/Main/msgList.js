class MsgList {
    activeConvo;
    msgListContainer;
    msgListener;
    constructor() {
        this.msgListContainer = document.createElement('div');
        // this.msgListContainer.style.overflow = 'scroll';
        this.msgListContainer.classList.add('d-flex', 'column-flex', 'marg', 'pad', 'item');
    }

    setActiveConvo = (convo) => {
        this.activeConvo = convo;
        this.msgListContainer.innerHTML = '';
        this.setUpMsgListener();
        // console.log(this.activeConvo);
    }

    setUpMsgListener = () => {
        if (this.msgListener) {
            this.msgListener();
        }
        this.msgListener = db.collection('messages')
            .where('convoID', '==', this.activeConvo.id)
            .orderBy('sentAt', 'asc')
            .onSnapshot((snapshot) => {
                snapshot.docChanges().forEach((change) => {
                    if (change.type === 'added') {
                        const div = document.createElement('div');
                        div.classList.add('item', 'marg', 'pad');

                        const sender = document.createElement('div');
                        sender.innerHTML = `Email: ${change.doc.data().sender}`;
                        sender.style.fontSize = '50%';

                        const msg = document.createElement('div');
                        msg.innerHTML = change.doc.data().content;

                        div.appendChild(sender);
                        div.appendChild(msg);

                        this.msgListContainer.appendChild(div);
                    }
                })
            })
    }
    initRender = (container) => {
        container.appendChild(this.msgListContainer);
    }
}

export default MsgList;