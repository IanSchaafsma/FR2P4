class Body{
    htmlElement;
    inputHtmlElement;
    text;

    constructor(view, object){ // hier worden alle html elementen van de body gemaakt en worden die gestuurt naar de renderer
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("view__body");
        this.inputHtmlElement = document.createElement("textarea");
        this.inputHtmlElement.classList.add("view__input");
        this.inputHtmlElement.placeholder = object.placeholder; // hier word de placeholder uit de json gezet
        this.inputHtmlElement.value = object.value; // hier word de value leeg gezet dit gebeurt in de html
        this.text = object.value // hier word de text leeg gezet dit zie je niet maar veranderd wel de waarde
        this.inputHtmlElement.oninput = this.typed; // hier word als er iets geinput word de functie typed uitgevoert
        this.view = view;
        this.view.main.app.renderer.render(this.htmlElement, this.view.htmlElement);
        this.view.main.app.renderer.render(this.inputHtmlElement, this.htmlElement);
    }

    typed = (event) => { // als de input veranderd word er een event meegegeven
        this.text = event.target.value; // hier overschrijf je de text van de body naar de text die net ingetyped is
    }

    changeBody(newText){ // hier zet je de nieuwe text in de html
        this.inputHtmlElement.value = newText;
    }
}