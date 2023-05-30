class Footer{
    htmlElement;
    buttonHtmlElement;

    constructor(view, buttonText){ // hier word alle html van de footer aangemaakt en naar de footer door gestuurd
        this.htmlElement = document.createElement("footer");
        this.htmlElement.classList.add("view__footer");
        this.buttonHtmlElement = document.createElement("button");
        this.buttonHtmlElement.classList.add("view__button");
        this.buttonHtmlElement.onclick = this.buttonClicked; // als je klikt op de button voer er een functie uit
        this.buttonHtmlElement.innerText = buttonText;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.buttonHtmlElement, this.htmlElement);
    }

    buttonClicked = () => { // dit voert de functie getdatafrombody van de view uit
        this.view.getDataFromBody();
    }
}