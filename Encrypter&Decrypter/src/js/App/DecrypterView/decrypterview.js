class DecrypterView{
    header;
    body;
    footer;
    htmlElement;
    main;
    type

    constructor(main, object){ // hier gebeurt exact het zelfde als in de encrypterview alleen is dit voor de decrypter (zie encrypterview.js)
        this.htmlElement = document.createElement("article");
        this.htmlElement.classList.add("view");
        this.main = main
        this.type = "DECRYPT";
        this.main.app.renderer.render(this.htmlElement, this.main.htmlElement);
        this.header = new Header(this, "Decrypter");
        this.body = new Body(this, object);
        this.footer = new Footer(this, "Decrypt", app);
    }

    getDataFromBody(){
        this.main.cipher(this.body.text, this.type);
    }

    changeBody(decryptedText){
        this.body.changeBody(decryptedText);
    }
}