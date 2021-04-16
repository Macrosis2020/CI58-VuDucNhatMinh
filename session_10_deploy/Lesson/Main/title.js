class Title {
    name;
    noOfUsers;

    $txtname;
    $txtnoOfUsers;

    constructor(name, noOfUsers) {
        this.name = name;
        this.noOfUsers = noOfUsers;

        this.$txtname = document.createElement('span');
        this.$txtnoOfUsers = document.createElement('span');

        this.$txtname.innerHTML = this.name;
        this.$txtnoOfUsers.innerHTML = `${this.noOfUsers} user(s)`;
    }

    initRender = (container) => {
        const div = document.createElement('div');
        div.classList.add('d-flex', 'item', 'justify-between', 'pad');
        // div.style.width = '100%';
        div.style.height = 'fit-content';

        div.appendChild(this.$txtname);
        div.appendChild(this.$txtnoOfUsers);

        container.appendChild(div);
    }

    setActiveConvo = (activeConvo) => {
        this.name = activeConvo.name;
        this.noOfUsers = activeConvo.users.length;

        this.$txtname.innerHTML = this.name;
        this.$txtnoOfUsers.innerHTML = `${this.noOfUsers} user(s)`;
    }
}

export default Title;