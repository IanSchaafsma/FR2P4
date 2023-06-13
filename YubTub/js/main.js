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
    main;
    aside;
    renderer;
    app;

    constructor(app, data){
        this.app = app;
        this.renderer = new Renderer();

        this.main = new Main(this, data);
        this.aside = new Aside(this, data);
    }
}

class Main{
    yubtub;
    video;
    comments
    htmlElement;
    leftWrapperElement;

    constructor(yubtub, data){
        this.yubtub = yubtub;
        this.video = new Video();

        this.htmlElement = document.createElement("main");
        this.htmlElement.classList.add("main");
        this.leftWrapperElement = document.createElement("div");
        this.leftWrapperElement.classList.add("leftWrapper");
        this.yubtub.renderer.render("body", this.htmlElement);
        this.yubtub.renderer.render("main", this.leftWrapperElement); // this.htmlelement doesnt work so I used "main" instead
    
        // rendering the video
        this.yubtub.renderer.render(".leftWrapper", this.video.htmlElement); // this.leftWrapperElement doesnt work so I used ".leftWrapper"
        this.yubtub.renderer.render(".video", this.video.videoWrapperElement);
        this.yubtub.renderer.render(".video__videoWrapper", this.video.videoElement);
        this.yubtub.renderer.render(".video__videoWrapper", this.video.videoFooterElement);
        this.yubtub.renderer.render(".video__footer", this.video.videoFooterLeftElement);
        this.yubtub.renderer.render(".video__footerLeftWrapper", this.video.videoFigureElement);
        this.yubtub.renderer.render(".video__avatar", this.video.videoAvatarElement);
        this.yubtub.renderer.render(".video__footerLeftWrapper", this.video.videoTitleElement);
        this.yubtub.renderer.render(".video__footer", this.video.videoFooterRightElement);
        this.yubtub.renderer.render(".video__footerRightWrapper", this.video.videoFavoriteElement);
        this.yubtub.renderer.render(".video__favorite", this.video.videoFavoriteIconElement);
        this.yubtub.renderer.render(".video__footerRightWrapper", this.video.videoNextElement);
        this.yubtub.renderer.render(".video__next", this.video.videoNextIconElement);

        this.comments = new Comments(this, data);
    }
}

class Video{
    htmlElement;
    videoWrapperElement;
    videoElement;

    videoFooterElement;

    videoFooterLeftElement;
    videoFigureElement;
    videoAvatarElement;
    videoTitleElement;

    videoFooterRightElement;
    videoFavoriteElement;
    videoFavoriteIconElement;
    videoNextElement;
    videoNextIconElement;


    constructor(){
        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("video");

        this.videoWrapperElement = document.createElement("div");
        this.videoWrapperElement.classList.add("video__videoWrapper");

        this.videoElement = document.createElement("video");
        this.videoElement.classList.add("video__video");
        this.videoElement.src = "videos/jeroeninzijnlambo.mp4";

        this.videoFooterElement = document.createElement("footer");
        this.videoFooterElement.classList.add("video__footer");

        this.videoFooterLeftElement = document.createElement("div");
        this.videoFooterLeftElement.classList.add("video__footerLeftWrapper");

        this.videoFigureElement = document.createElement("figure");
        this.videoFigureElement.classList.add("video__avatar");
        this.videoAvatarElement = document.createElement("i");
        this.videoAvatarElement.classList = "fa-regular fa-user";
        this.videoTitleElement = document.createElement("h2");
        this.videoTitleElement.classList.add("video__title");
        this.videoTitleElement.innerText = "Title";

        this.videoFooterRightElement = document.createElement("div");
        this.videoFooterRightElement.classList.add("video__footerRightWrapper");
        this.videoFavoriteElement = document.createElement("button");
        this.videoFavoriteElement.classList.add("video__favorite");
        this.videoFavoriteIconElement = document.createElement("i");
        this.videoFavoriteIconElement.classList = "fa-regular fa-star";
        this.videoNextElement = document.createElement("button");
        this.videoNextElement.classList.add("video__next");
        this.videoNextIconElement = document.createElement("i");
        this.videoNextIconElement.classList = "fa-solid fa-arrow-right-long";

    }
    
}

class Comments{
    main;
    comment;
    htmlElement;
    commentsListElement;
    commentInputElement
    commentTypedText;
    data

    constructor(main, data){
        this.main = main;
        this.data = data;

        this.htmlElement = document.createElement("section");
        this.htmlElement.classList.add("comments");
        this.commentsListElement = document.createElement("ul");
        this.commentsListElement.classList.add("comments__comments");

        this.commentInputElement = document.createElement("textarea");
        this.commentInputElement.classList.add("comments__input");
        this.commentInputElement.placeholder = "Jouw Comment!";

        // rendering the comments list
        this.main.yubtub.renderer.render(".leftWrapper", this.htmlElement);
        this.main.yubtub.renderer.render(".comments", this.commentsListElement);

        this.comment = new Comment(this, data);


        // rendering the comment input
        this.main.yubtub.renderer.render(".comments", this.commentInputElement);

        
        // function on enter 
        this.commentInputElement.addEventListener("keypress", (event) => {
            if (event.key === "Enter") {
                this.sentDataToComment(event);
            }
        });  
    }

    sentDataToComment = (event) => {
        // console.log(this.main.yubtub.app.switcher.cleaner.clean)
        this.main.yubtub.app.switcher.cleaner.clean(".comments__comments");
        event.target.value = event.target.value ? event.target.value.trimStart() : '' // makes sure there are no unnecesary spaces in the comment
        if(event.target.value === ""){
            console.log("empty input");
        }
        else{
            this.comment.data.push(
                {
                    "user": "anonymous",
                    "comment": event.target.value
                }
            );
        }
        
        this.comment = new Comment(this, this.data);
        this.commentInputElement.value = "";

    }
}

class Comment{
    comments;
    commentElement;
    commentAvatarElement;
    commentAvatarIconElement;
    commentText;
    data;

    constructor(comments, data){
        this.comments = comments;
        this.data = data.comments;
        
        for(let i = 0; i < this.data.length; i++){
            this.commentElement = document.createElement("li");
            this.comments.main.yubtub.renderer.render(".comments__comments", this.commentElement);
            this.commentElement.classList = `comments__comment comments__comment${[i]}`;
            this.commentAvatarElement = document.createElement("figure");
            this.commentAvatarIconElement = document.createElement("i");
            this.commentText = document.createElement("p");
            this.commentText.innerText = this.data[i].comment;

            this.commentAvatarElement.classList = `comments__avatar comments__avatar${[i]}`;
            this.commentAvatarIconElement.classList = "fa-regular fa-user";
            this.commentText.classList.add("comments__text");

            this.comments.main.yubtub.renderer.render(`.comments__comment${[i]}`, this.commentAvatarElement);
            this.comments.main.yubtub.renderer.render(`.comments__avatar${[i]}`, this.commentAvatarIconElement);
            this.comments.main.yubtub.renderer.render(`.comments__comment${[i]}`, this.commentText);
        }
        
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
        this.htmlElement.classList.add("reccomended");
        this.yubtub.renderer.render("main", this.htmlElement); // this.yubtub.main.htmlElement doesnt work so I used "main" instead
        this.nextVideo = new NextVideo(this, data);
        this.nextVideo = new NextVideo(this, data);
        this.nextVideo = new NextVideo(this, data);
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
    this.htmlElement.classList.add("reccomended__video");
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