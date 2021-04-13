class Convo {
    id;
    name;
    noOfUsers;
    onClick;

    $txtName;
    $txtnoOfUsers;
    $container;

    constructor(id, name, noOfUsers, onClick) {
        this.id = id;
        this.name = name;
        this.noOfUsers = noOfUsers;

        this.$txtName = document.createElement('div');
        this.$txtName.innerHTML = name;

        this.$txtnoOfUsers = document.createElement('small');
        this.$txtnoOfUsers.innerHTML = noOfUsers + ' user(s)';

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
}

export default Convo;