class AgendaApp{
    api;
    switcher;
    month = 0;

    constructor(){
        this.api = new API(); // maakt een nieuwe api class aan
        this.switcher = new Switcher(this); // maaket een nieuwe switcher class aan en geeft zichzelf eraan mee
        this.api.getData().then(result => { // runt de getData functie uit van de api en voert dan de loadAgenda functie van de switcher uit.
            this.switcher.loadAgenda(result[this.month])
        });
    }

    switchMonths = (sign) => { // een functie die kijkt of er een + of - binnen komt daarop gebaseert komt er bij de month +1 bij of -1 eraf
        switch(sign){
            case "+":
                this.month = this.month + 1;
                break;
            case "-":
                this.month = this.month -1;
                break;
        }

        if(this.month > 11){ // twee checks die kijken of je wel binnen de aangegeven maanden blijft zodat je er niet uit kan
            this.month = 0;
        }

        if(this.month < 0){
            this.month = 11;
        }

        this.switcher.loadAgenda(this.api.dataFromAPI[this.month]); // hier geef je de data van de api de maand mee waar je op zit
    }
}

class API{
    dataFromAPI = [];   // hier haal de de data uit de api op

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
    agendaApp;

    constructor(data, agendaApp){
        this.agendaApp = agendaApp;
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("agenda");
        this.data = data;
        this.renderer = new Renderer(); // hier maak je een nieuwe renderer class aan
        this.renderer.render("body", this.htmlElement); // hier geef je weer wat je wilt laten renderen in de render functie
        this.header = new Header(this, data.name, this.agendaApp); // hier maak je een nieuwe header class aan die je wat dingen mee geeft
        this.month = new Month(this, data.days); // hier maak je een nieuwe month class aan die je wat dingen mee geeft
    }

    render(placeToRender, WhatToRender){ // pak je de van wat je wilt renderen op en wat je wilt renderen en geeft dat weer door aan de renderer zijn render functie
        this.renderer.render(placeToRender, WhatToRender);
    }
}

class Header{
    nameOfMonth;
    htmlElement;
    agenda;
    leftButton;
    rightButton;
    agendaApp;

    constructor(agenda, nameOfMonth, agendaApp){
        this.agendaApp = agendaApp;
        this.agenda = agenda;
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("agenda__header");
        this.nameOfMonth = nameOfMonth;
        this.text = document.createElement("h2");
        this.text.innerText = this.nameOfMonth;
        this.agenda.render(".agenda", this.htmlElement); // hier geef je mee wat je gerendert wilt hebben
        this.leftButton = new Button("previous","<", "agenda__button--left", this, this.agendaApp); // hier maak je een nieuwe leftButton class aan die je wat dingen mee geeft
        this.agenda.render(".agenda__header", this.text); // hier geef je mee wat je gerendert wilt hebben
        this.rightButton = new Button("next",">", "agenda__button--right", this, this.agendaApp); // hier maak je een nieuwe rightButton class aan die je wat dingen mee geeft

    }
    
    render(placeToRender, WhatToRender){ // pak je de van wat je wilt renderen op en wat je wilt renderen en geeft dat weer door aan de agende zijn render functie
        this.agenda.render(placeToRender, WhatToRender);
    }
}

class Button{
    htmlElement;
    innerText;
    extraClass;
    switcher;
    header;
    type;

    constructor(type, innerText, extraClass, header, agendaApp){
        this.type = type;
        this.agendaApp = agendaApp;
        this.htmlElement = document.createElement("button");
        this.htmlElement.classList.add("agenda__button");
        this.extraClass = extraClass;
        this.htmlElement.classList.add(this.extraClass);
        this.innerText = innerText;
        this.htmlElement.innerText = this.innerText;
        this.header = header;
        this.render();
        
        this.htmlElement.onclick = this.buttonClicked; // als er op het htmlElement van de button geklikt word voer je de Button class zijn buttonClicked functie uit
    }

    buttonClicked = () => { 
        if(this.type === "previous"){ // als het type van wat je hebt binnen gekregen van de header gelijk is aan previous dan geef je aan de switchmonths funcite een - mee zo niet geef je een + mee
            this.agendaApp.switchMonths("-");
            return;
        }
        this.agendaApp.switchMonths("+");
    }

    render(){ // hier geef je mee waar je het wilt renderen en wat je wilt renderen
        this.header.render("header", this.htmlElement)
    }
}

class Switcher{
    agendaApp;
    agenda;
    cleaner;
    constructor(agendaApp){
        this.agendaApp = agendaApp;
        this.cleaner = new Cleaner(); // hier maak je een nieuwe cleaner class aan
    }

    loadAgenda = (data) =>{ // hier maak je een nieuwe functie die dat mee krijgt
        this.cleaner.destroy(); // hier roep je de destroy functie van de cleaner class aan
        this.agenda = new Agenda(data, this.agendaApp); // hier maak je een nieuwe agenda class aan die je wat data mee geeft
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
        this.agenda.render(".agenda", this.htmlElement); // hier geef je mee waar je het wilt renderen en wat je wilt renderen
        this.numberOfDays = numberOfDays;
        for(let i = 1; i <= numberOfDays; i++){ // een loop die door alle dagen heen loopt 
            this.day.push(new Day(this, i)); // elke keer dat het loopt pushed het een nieuwe day class in de day array die krijgt dan ook gelijk het month class binnen en het nummer waar hij nu is in de loop
        }
    }

    renderDays(placeToRender, WhatToRender){ // hier geef je mee waar je het wilt renderen en wat je wilt renderen
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
        this.month.renderDays(".agenda__month", this.htmlElement); // hier geef je mee waar je het wilt renderen en wat je wilt renderen
    }
    
}
