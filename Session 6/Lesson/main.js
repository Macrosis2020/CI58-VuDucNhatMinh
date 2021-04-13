import ConvoList from "./Main/convoList.js";
import Title from "./Main/title.js";

class Main {
    convoList;
    convoModal;
    title;

    activeConvo;

    constructor() {
        this.convoList = new ConvoList(this.onChangeActiveConvo);
        this.title = new Title("", 0);
    };
    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add('d-flex');

        const content = document.createElement('div');
        content.classList.add('item', 'grow-1', 'd-flex', 'flex-column');
        content.style.height = '100vh';

        const div2 = document.createElement('div');
        div2.classList.add('item', 'grow-1', 'd-flex');

        this.title.initRender(content);

        const convoInfo = document.createElement('div');
        convoInfo.style.width = '200px';

        const div3 = document.createElement('div');
        div3.classList.add('grow-1', 'item', 'd-flex', 'flex-column');

        const msgList = document.createElement('div');
        msgList.classList.add('grow-1')

        const composer = document.createElement('div');
        composer.classList.add('item');
        composer.innerHTML = 'comp'
        
        div3.appendChild(msgList);
        div3.appendChild(composer);


        div2.appendChild(div3);
        div2.appendChild(convoInfo);

        content.appendChild(div2);
        this.convoList.initRender(div);
        div.appendChild(content);

        container.appendChild(div);
    }

    onChangeActiveConvo = (convo) => {
        this.activeConvo = convo;

        this.convoList.setActiveConvo(convo);
        this.title.setActiveConvo(convo);
    }
}

export default Main;