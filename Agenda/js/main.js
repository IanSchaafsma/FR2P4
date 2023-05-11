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

    constructor(data){
        this.data = data;
        console.log(data);
        this.renderer = new Renderer();
        this.header = new Header(data.name);
        this.month = new Month(this, data.days);
    }
}

class Renderer{

}

class Header{
    nameOfMonth;
    constructor(nameOfMonth){
        this.nameOfMonth = nameOfMonth;
        console.log(nameOfMonth);
    }
}

class Month{
    day = [];
    agenda;
    numberOfDays;

    constructor(agenda, numberOfDays){
        this.numberOfDays = numberOfDays;
        console.log(this.numberOfDays);
        this.agenda = agenda;
        for(let i = 0; i < numberOfDays; i++){
            this.day.push(new Day(this));
        }
    }
}

class Day{
    month;
    
    constructor(month){
        this.month = month;
    }
    
}

const ianZijnAgenda = new AgendaApp();
console.log(ianZijnAgenda);