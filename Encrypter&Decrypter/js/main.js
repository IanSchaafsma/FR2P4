class API{

}

class Decrypter{

}

class Encrypter{
    stringToEncrypt;
    encryptedString = [];
    constructor(stringToEncrypt){
        this.stringToEncrypt = stringToEncrypt.toUpperCase();
        this.encrypt();
    }

    encrypt(){
        for(let i = 0; i < this.stringToEncrypt.length; i++){
            switch(this.stringToEncrypt[i]){
                case "A":
                    this.encryptedString.push("D");
                    break;
                case "B":
                    this.encryptedString.push("E");
                    break;
                case "C":
                    this.encryptedString.push("F");
                    break;
                case "D":
                    this.encryptedString.push("G");
                    break;
                case "E":
                    this.encryptedString.push("H");
                    break;
                case "F":
                    this.encryptedString.push("I");
                    break;
                case "D":
                    this.encryptedString.push("J");
                    break;
                case "H":
                    this.encryptedString.push("K");
                    break;
                case "I":
                    this.encryptedString.push("L");
                    break;
                case "J":
                    this.encryptedString.push("M");
                    break;
                case "K":
                    this.encryptedString.push("N");
                    break;
                case "L":
                    this.encryptedString.push("O");
                    break;
                case "M":
                    this.encryptedString.push("P");
                    break;
                case "N":
                    this.encryptedString.push("Q");
                    break;
                case "O":
                    this.encryptedString.push("R");
                    break;
                case "P":
                    this.encryptedString.push("S");
                    break;
                case "Q":
                    this.encryptedString.push("T");
                    break;
                case "R":
                    this.encryptedString.push("U");
                    break;
                case "S":
                    this.encryptedString.push("V");
                    break;
                case "T":
                    this.encryptedString.push("W");
                    break;
                case "U":
                    this.encryptedString.push("X");
                    break;
                case "V":
                    this.encryptedString.push("Y");
                    break;
                case "W":
                    this.encryptedString.push("Z");
                    break;
                case "X":
                    this.encryptedString.push("A");
                    break;
                case "Y":
                    this.encryptedString.push("B");
                    break;
                case "Z":
                    this.encryptedString.push("C");
                    break;
            }
        }
        console.log(this.encryptedString);
    }
}

class Cleaner{

}

class Renderer{

}

class Main{
    encrypterView;
    decrypterView;
    constructor(){
        this.encrypterView = new EncrypterView();
        this.decrypterView = new DecrypterView();
    }
}

class EncrypterView{
    header;
    body;
    footer;
    constructor(){
        this.header = new Header();
        this.body = new Body();
        this.footer = new Footer();
    }
}

class DecrypterView{
    header;
    body;
    footer;
    constructor(){
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
    decrypter;
    encrypter;
    cleaner;
    renderer;
    main;

    constructor(){
        this.api = new API();
        this.decrypter = new Decrypter();
        this.encrypter = new Encrypter("hallo ik wil versleutelt worden!");
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.main = new Main();
    }
}

const app = new App();
console.log(app);