class Main{
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    constructor(data, app){
        this.app = app;

        this.htmlElement = document.createElement("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this);
        this.decrypterView = new DecrypterView(this);
    }
}

class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main){
        this.htmlElement = document.createElement("article");
        this.main = main

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}

class DecrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;

    constructor(main){
        this.htmlElement = document.createElement("article");
        this.main = main

        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}

class Header{

}

class Body{

}

class Footer{

}

class App{
    api;
    encrypter;
    decrypter;
    cleaner;
    renderer;
    main;

    constructor(){
        this.encrypter = new Encrypter();
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/src/data/data.json").then( (data) => {
            this.main = new Main(data, this); 
        });
    }
}

const app = new App();
console.log(app);