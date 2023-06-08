class App{
 switcher;
 api;
 data;

 constructor(){
    this.api = new API();
    this.api.getData("../data/data.json").then( (data) => {
        this.data = data;
        this.switcher = new Switcher(this, this.data);
    });
 }
}

class API{ 
    
    async getData(url){
        let dataToBeReturned = {};
       await fetch(url).then(
            (response) => {
                return response.json();
            }
        ).then( (data) => {
            dataToBeReturned = data.data;
        });
        return dataToBeReturned;
    }
}

class Switcher{
 yubtub;
 cleaner;
 app;
 default = 0;
 data;

 constructor(app, data){
    this.data = data;
    this.app = app;
    this.yubtub = new Yubtub(this.app, data[this.default]);
    this.cleaner = new Cleaner();
 }

 switch(link){
    this.cleaner.clean("body");
    this.yubtub = new Yubtub(this.app, this.data[link]);

 }
}

class Cleaner{
    clean(whereToClean){
        document.querySelector(whereToClean).innerHTML = "";
    }
}

class Yubtub{
    aside;
    renderer;
    app;

    constructor(app, data){
        this.app = app;
        this.renderer = new Renderer();
        this.aside = new Aside(this, data);
    }
}

class Renderer{
    render(whereToRender, whatToRender){
        document.querySelector(whereToRender).appendChild(whatToRender);
    }
}

class Aside{
    yubtub;
    nextVideo;
    htmlElement;

    constructor(yubtub,data){
        this.yubtub = yubtub;
        this.htmlElement = document.createElement("aside");
        this.yubtub.renderer.render("body",this.htmlElement);
        this.nextVideo = new NextVideo(this, data);

    }
}

class NextVideo{
  aside;
  htmlElement;
  data;
  
  constructor(aside, data){
    this.aside = aside;
    this.data = data;
    this.htmlElement = document.createElement("video");
    this.htmlElement.src = "./videos/" + data.video;
    this.aside.yubtub.renderer.render("aside", this.htmlElement);
    this.htmlElement.onclick = this.videoClicked;
  }

  videoClicked = () => {
    this.aside.yubtub.app.switcher.switch(this.data.link);
  }

}

const app = new App();
// console.log(app);