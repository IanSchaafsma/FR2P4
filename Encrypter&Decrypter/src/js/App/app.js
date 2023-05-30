class App{
    api;
    encrypter;
    decrypter;
    cleaner;
    renderer;
    main;

    constructor(){ // hier maak je een hele boel classes
        this.encrypter = new Encrypter(); 
        this.decrypter = new Decrypter();
        this.cleaner = new Cleaner();
        this.renderer = new Renderer();
        this.api = new API();
        this.api.getData("/src/data/data.json").then( (data) => { // hier geef je mee uit welk bestand je de data wilt pakken
            this.main = new Main(data, this);  // hier maak je een main aan en geef je data en de app mee
        });
    }

    encrypt = (textToEncrypt) => { // de encrypt functie voert de encrypter zijn encrypt functie uit waardoor de textToEncrypt ge encrypt word en geeft het daarna mee aan de main
        const encrypted = this.encrypter.encrypt(textToEncrypt);
        this.main.changeEncrypter(encrypted);

        // console.log(this.encrypter.encrypt(textToEncrypt));
    }

    decrypt(textToDecrypt){ // de decrypt functie voert de decrypter zijn decrypt functie uit waardoor de textToDecrypt ge decrypt word en geeft het daarna mee aan de main
        const decrypted = this.decrypter.decrypt(textToDecrypt);
        this.main.changeDecrypter(decrypted);
    }
}