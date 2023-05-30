class Header{
    htmlElement;
    headingHtmlElement;
    constructor(view, headingText){ // hier word alle html van de header aangemaakt en naar de renderer toe gestuurt
        this.htmlElement = document.createElement("header");
        this.htmlElement.classList.add("view__header");
        this.headingHtmlElement = document.createElement("h1");
        this.headingHtmlElement.classList.add("view__heading");
        this.headingHtmlElement.innerText = headingText;
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.headingHtmlElement, this.htmlElement);
    }

}