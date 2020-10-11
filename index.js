
var numberOfDrum=document.querySelectorAll('.drum').length; // get the length of element with class drum

//loop through the element with class drum and assign and event listener to it.
for (i = 0; i < numberOfDrum; i++){

    document.querySelectorAll('.drum')[i].addEventListener('click',buttonClick)
}

//handle the mouse click event and capture the click key
function buttonClick(){

    var buttonTriggered = this.innerHTML;
    clickPress(buttonTriggered);
    buttonAnimation(buttonTriggered);

}

// Listen to the keyboard event and capture the pressed key

document.addEventListener('keypress',keyboardEvent);

function keyboardEvent(event){
    var keyPressed=event.key
    clickPress(keyPressed);
    buttonAnimation(keyPressed);
}

// switch function handle the sound

function clickPress(key){
    switch (key) {
        case 'w':
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case 'j':
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case 'k':
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case 'l':
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break

    }
}

// Adding a shadow animation during keyboard press or mouse click

function buttonAnimation(currentKey) {
    var activationButton = document.querySelector('.' + currentKey);
    activationButton.classList.add("pressed");
    setTimeout(function () {
        activationButton.classList.remove("pressed");
    }, 100)

}


// another method using anonymous function

// for (i = 0; i < numberOfDrum; i++) {

//     document.querySelectorAll('.drum')[i].addEventListener('click', function () {
//         alert("I was clicked") //anonymous function
//     } )
// }





