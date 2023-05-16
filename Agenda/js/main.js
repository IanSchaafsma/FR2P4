class AgendaApp{
    api;
    agenda;

    constructor(){
        this.api = new API();
        this.api.getData().then(result => {
        this.agenda = new Agenda(result[0]);
        });
    }
}

class API{
    dataFromAPI = [];   

    async getData(){
       await fetch("../data/data.json").then( response => {
            return response.json();
        }).then(data => {
            this.dataFromAPI = data.months;
        })
        return this.dataFromAPI;
    }
}

class Agenda{
    renderer;
    header;
    month;
    htmlElement;

    constructor(data){
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("agenda");
        this.data = data;
        this.renderer = new Renderer();
        this.renderer.render("body", this.htmlElement);
        this.header = new Header(this, data.name);
        this.month = new Month(this, data.days);
    }

    render(placeToRender, WhatToRender){
        this.renderer.render(placeToRender, WhatToRender);
    }
}

class Renderer{
    render(placeToRender, WhatToRender){
        document.querySelector(placeToRender).appendChild(WhatToRender);
    }
}

class Header{
    nameOfMonth;
    htmlElement;
    agenda;

    constructor(agenda, nameOfMonth){
        this.agenda = agenda;
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("agenda__header");
        this.agenda.render(".agenda", this.htmlElement);
        this.nameOfMonth = nameOfMonth;
    }
}

class Month{
    day = [];
    agenda;
    numberOfDays;
    htmlElement;

    constructor(agenda, numberOfDays){
        this.agenda = agenda;
        this.htmlElement = document.createElement("ul");
        this.htmlElement.classList.add("agenda__month");
        this.agenda.render(".agenda", this.htmlElement);
        this.numberOfDays = numberOfDays;
        for(let i = 1; i <= numberOfDays; i++){
            this.day.push(new Day(this, i));
        }
    }

    renderDays(placeToRender, WhatToRender){
        this.agenda.render(placeToRender, WhatToRender);
    }
}

class Day{
    month;
    htmlElement;
    dayNumber;
    
    constructor(month, dayNumber){
        this.dayNumber = dayNumber;
        this.htmlElement = document.createElement("li");
        this.htmlElement.classList.add("agenda__day");
        this.htmlElement.innerText = this.dayNumber;
        this.month = month;
        this.month.renderDays(".agenda__month", this.htmlElement);
    }
    
}

const ianZijnAgenda = new AgendaApp();