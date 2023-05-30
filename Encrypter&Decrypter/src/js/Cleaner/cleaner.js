class Cleaner{
    clean(whatToClean){ // hier geef je aan mee wat je wilt cleanen
        document.querySelector(whatToClean).innerHTML = ""; // hier haar je de html van wat je wilt cleanen leeg
    }
}