class Convo {
    id;
    name;
    users;
    onClick;

    $txtName;
    $txtnoOfUsers;
    $container;

    constructor(id, name, users, onClick) {
        this.id = id;
        this.name = name;
        this.users = users;

        this.$txtName = document.createElement('div');
        this.$txtName.innerHTML = name;

        this.$txtnoOfUsers = document.createElement('small');
        this.$txtnoOfUsers.innerHTML = users.length + ' user(s)';

        this.onClick = onClick;

        this.$container = document.createElement('div');
        this.$container.classList.add('convo-box');
    };

    setActive = (isActive) => {
        if (isActive == true) {
            this.$container.classList.add('active-convo');
        } else {
            this.$container.classList.remove('active-convo');
        }
    }

    initRender = (container) => {
        this.$container.addEventListener('click', () => {
            this.onClick(this);
        })
        this.$container.appendChild(this.$txtName);
        this.$container.appendChild(this.$txtnoOfUsers);
        container.appendChild(this.$container);
    };

    updateData = (newData) => {
        this.name = newData.name;
        this.users = newData.users;
        this.$txtnoOfUsers.innerHTML = this.users.length + ' user(s)';
        this.onClick(this);
    }
}

export default Convo;