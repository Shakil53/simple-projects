for (var i = 0; i < 3; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var text = this.innerHTML;
        console.log(text);
        audioPlay(text);


        

    });
}


function audioPlay(text) {
    switch (text) {
        case "a":
            var audio = new Audio("/audio/james 1.mp3");
            audio.play();
            break;
        case "b": 
            var audio = new Audio("/audio/james 2.mp3");
            audio.play();
            break;
        case "c": 
            var audio = new Audio("/audio/Kemon_Acho.mp3");
            audio.play();
            break;
} 
}