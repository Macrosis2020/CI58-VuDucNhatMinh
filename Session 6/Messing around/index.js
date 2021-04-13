class StatBar {
    title;
    $txtTitle;
    barValue;
    associatedID;
    $getStatsBtn;
    $bar;

    constructor(title, associatedID) {
        this.title = title;
        this.associatedID = associatedID;
    }

    initRender = (container) => {
        const div = document.createElement('div');

        this.$txtTitle = document.createElement('div');
        this.$txtTitle.classList.add('stat-text-box');
        this.$txtTitle.innerHTML = this.title;

        this.bar = document.createElement('div');
        this.bar.style.display = 'inline-block';
        this.bar.classList.add('bar', 'marpad', 'shade');

        this.barValue = 0;
        this.bar.style.backgroundColor = 'black';
        this.bar.style.width = '10px';

        this.bar.textContent = this.barValue;

        div.appendChild(this.$txtTitle);
        div.appendChild(this.bar);
        div.classList.add('marpad',);

        container.appendChild(div);
    }

    displayStat = () => {
        if (document.getElementById(this.associatedID).value) {
        this.barValue = document.getElementById(this.associatedID).value;

        if (this.barValue <= 200) {
            this.bar.style.width = `${this.barValue / 200 * 65}%`;
        } else {
            this.bar.style.width = '65%';
        }

        if (this.barValue <= 40) {
            this.bar.style.backgroundColor = 'red';
        } else if (this.barValue <= 70) {
            this.bar.style.backgroundColor = 'rgb(236, 134, 0)';
        } else if (this.barValue < 100) {
            this.bar.style.backgroundColor = 'rgb(236, 220, 0)';
        } else if (this.barValue < 150) {
            this.bar.style.backgroundColor = 'green';
        } else {
            this.bar.style.backgroundColor = 'rgb(0, 173, 173)';
        }

        this.bar.textContent = this.barValue;
    }
    }
}

const barList = [];
const statBox = document.getElementById('stat-box');
const total = document.createElement('div');

initializeBars = () => {
    for (i = 0; i < 6; i++) {
        switch (i) {
            case 0:
                const hpBar = new StatBar('HP', 'hp-ip');
                hpBar.initRender(statBox);
                barList.push(hpBar);
                break;
            case 1:
                const atkBar = new StatBar('ATK', 'atk-ip');
                atkBar.initRender(statBox);
                barList.push(atkBar);
                break;
            case 2:
                const defBar = new StatBar('DEF', 'def-ip');
                defBar.initRender(statBox);
                barList.push(defBar);
                break;
            case 3:
                const spatkBar = new StatBar('SP ATK', 'spatk-ip');
                spatkBar.initRender(statBox);
                barList.push(spatkBar);
                break;
            case 4:
                const spdefBar = new StatBar('SP DEF', 'spdef-ip');
                spdefBar.initRender(statBox);
                barList.push(spdefBar);
                break;
            default:
                const spdBar = new StatBar('SPD', 'spd-ip');
                spdBar.initRender(statBox);
                barList.push(spdBar);
                break;
        }
    }
    total.style.textAlign = 'center';
    total.style.fontSize = '150%';
    total.style.marginBottom = '5px';
    total.textContent = "TOTAL:"
    statBox.appendChild(total);
}
initializeBars();

displayAllStats = () => {
    let statTotal = 0;
    for (i=0; i<barList.length; i++) {
        barList[i].displayStat();
        statTotal = statTotal + Number(barList[i].barValue);
    }
    total.textContent = `TOTAL: ${statTotal}`;
}
document.getElementById('init-btn').addEventListener('click', displayAllStats);

