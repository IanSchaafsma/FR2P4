class Main{
    encrypterView;
    decrypterView;
    htmlElement;
    app;

    constructor(data, app){
        this.app = app;

        this.htmlElement = document.createElement("main"); // hier maak je wat html aan
        this.htmlElement.classList.add("main");
        this.app.renderer.render(this.htmlElement, document.querySelector("body"));

        this.encrypterView = new EncrypterView(this, data.encrypt); // hier maak je een encrypterview aan en een decrypterview en je geeft ze beide de main mee en de data zijn encrypt mee
        this.decrypterView = new DecrypterView(this, data.decrypt);
    }

    cipher(textToCipher, type){ // de cypher functie krijgt textToCipher en het type mee
        if(type === "ENCRYPT"){ // hier word er gekeken of het de type "ENCRYPT" heeft zo ja voert er een functie in de app uit die de textToCipher mee krijgt
            this.app.encrypt(textToCipher);
        }
        else{ // hier gebeurt her hetzelfde alleen dan voor de decrypt
            this.app.decrypt(textToCipher);
        }
    }

    changeEncrypter(encryptedText){ // hier word de changebody van de encrypterView aangeroepen en die krijgt de encrypted text mee 
        this.encrypterView.changeBody(encryptedText);
    }

    changeDecrypter(decryptedText){  // hier word de changebody van de decrypterView aangeroepen en die krijgt de decrypted text mee 
        this.decrypterView.changeBody(decryptedText);
    }
}