import ConvoList from "./Main/convoList.js";
import Title from "./Main/title.js";
import Composer from "./Main/composer.js";
import MsgList from "./Main/msgList.js";
import ConvoInfo from "./Main/convoInfo.js";

class Main {
    convoList;
    convoModal;
    title;
    composer;
    convoInfo;
    activeConvo;

    constructor() {
        this.convoList = new ConvoList(this.onChangeActiveConvo);
        this.title = new Title("", 0);
        this.composer = new Composer();
        this.msgList = new MsgList();
        this.convoInfo = new ConvoInfo();
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

        const div3 = document.createElement('div');
        div3.classList.add('grow-1', 'item', 'd-flex', 'flex-column');
        this.msgList.initRender(div3);

        // const msgList = document.createElement('div');
        // msgList.classList.add('grow-1')

        const comp = document.createElement('div');
        comp.classList.add('item');
        this.composer.initRender(comp);
        
        
        // div3.appendChild(msgList);
        div3.appendChild(comp);


        div2.appendChild(div3);
        this.convoInfo.initRender(div2);
        

        content.appendChild(div2);
        this.convoList.initRender(div);
        div.appendChild(content);

        container.appendChild(div);
    }

    onChangeActiveConvo = (convo) => {
        this.activeConvo = convo;
        this.convoList.setActiveConvo(convo);
        this.title.setActiveConvo(convo);
        this.composer.setActiveConvo(convo);
        this.msgList.setActiveConvo(convo);
        this.convoInfo.setActiveConvo(convo);
    }
}

export default Main;