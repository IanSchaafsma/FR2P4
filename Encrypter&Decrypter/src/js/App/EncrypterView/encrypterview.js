class EncrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type

    constructor(main, object){ // hier word alle html aangemaakt van het encrypt kaartje en gestuurt naar de renderer
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main
        this.type = "ENCRYPT"; // hier word de type ENCRYPT mee gegeven
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Encrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Encrypt", app);
    }

    getDataFromBody(){ // hier word de cipher functie van de main aangeroepen en krijgt die de body zijn text mee en de type 
        this.main.cipher(this.body.text, this.type);
    }

    changeBody(encryptedText){ // hier word de body zijn changebody functie aangeroepen en krijgt die de encryptedText mee
        this.body.changeBody(encryptedText);
    }
}