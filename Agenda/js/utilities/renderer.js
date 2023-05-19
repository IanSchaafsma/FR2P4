class Renderer{ // hier maak je een nieuwe class aan
    render(placeToRender, WhatToRender){ // hier krijgt het mee waar je het wilt renderen en wat je wilt renderen
        document.querySelector(placeToRender).appendChild(WhatToRender);  // hier rendert hij het waar je het wou en wat je wou renderen
    }
}