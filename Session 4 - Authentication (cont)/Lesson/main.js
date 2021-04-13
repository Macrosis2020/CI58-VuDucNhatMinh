class Main {
    constructor() {};
    initRender = (container) => {
        const p = document.createElement('p');
        p.innerHTML = 'Hello user!';

        const logoutBtn = document.createElement("button");
        logoutBtn.innerHTML = "Log Out";
        logoutBtn.addEventListener('click', () => {
            firebase.auth()
            .signOut();
            // console.log(user);
            location.reload();
        })
        container.appendChild(p);
        container.appendChild(logoutBtn);
    }
}

export default Main;