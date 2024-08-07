//for further optimisations, make css variables and change them
const audioButtons = document.querySelectorAll('.audiobutton');
const chosenWhip = document.querySelector('#youhavechosen');
    function darkmode() {
    for (let i=0; i<audioButtons.length; i++){
        audioButtons[i].style.backgroundColor = 'blue';
        audioButtons[i].style.border = '3px solid limegreen';
    }
    document.getElementById('h1').style.color = 'black';
    document.getElementById('h2').style.color = 'black';
    document.getElementById('h22').style.color = 'black';
    document.getElementById('h3').style.color = 'black';
    document.getElementById('h32').style.color = 'black';
    document.querySelector('#span').style.color = 'mediumspringgreen';
    document.querySelector('#span').style.backgroundColor = 'black';
    document.getElementById('youhavechosen').style.color = 'black';
    document.getElementById('body').style.backgroundColor = 'black';
    document.getElementById('h2').style.backgroundColor = 'purple';
    document.getElementById('h22').style.backgroundColor = 'purple';
    document.getElementById('h1').style.backgroundColor = 'navy';
    document.getElementById('h3').style.backgroundColor = 'green';
    document.getElementById('h32').style.backgroundColor = 'green';
    chosenWhip.style.borderTop = '15px solid aqua';
    chosenWhip.style.borderBottom = '15px solid darkcyan';
    chosenWhip.style.borderLeft = '15px solid mediumturquoise';
    chosenWhip.style.borderRight = '15px solid mediumturquoise';
    chosenWhip.style.background = 'lightseagreen';
};
function firelightmode(){
    for (let i=0; i<audioButtons.length; i++){
        audioButtons[i].style.backgroundColor = 'orange';
        audioButtons[i].style.border = '3px solid hotpink';
    }
    document.getElementById('h1').style.color = 'black';
    document.getElementById('h2').style.color = 'black';
    document.getElementById('h22').style.color = 'black';
    document.getElementById('h3').style.color = 'black';
    document.getElementById('h32').style.color = 'black';
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('h2').style.backgroundColor = 'gold';
    document.getElementById('h22').style.backgroundColor = 'gold';
    document.getElementById('h1').style.backgroundColor = 'yellow';
    document.getElementById('h3').style.backgroundColor = 'goldenrod';
    document.getElementById('h32').style.backgroundColor = 'goldenrod';
    chosenWhip.style.borderTop = '15px solid firebrick';
    chosenWhip.style.borderBottom = '15px solid crimson';
    chosenWhip.style.borderLeft = '15px solid red';
    chosenWhip.style.borderRight = '15px solid red';
    chosenWhip.style.background = 'salmon';
    document.querySelector('#span').style.color = 'crimson';
    document.querySelector('#span').style.backgroundColor = 'white';
};
function discordlightmode() {
    for (let i=0; i<audioButtons.length; i++){
        audioButtons[i].style.backgroundColor = 'white';
        audioButtons[i].style.border = '3px solid transparent';
    }
    document.getElementById('h1').style.color = 'ghostwhite';
    document.getElementById('h2').style.color = 'ghostwhite';
    document.getElementById('h22').style.color = 'ghostwhite';
    document.getElementById('h3').style.color = 'ghostwhite';
    document.getElementById('h32').style.color = 'ghostwhite';
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('h2').style.backgroundColor = 'white';
    document.getElementById('h22').style.backgroundColor = 'white';
    document.getElementById('h1').style.backgroundColor = 'white';
    document.getElementById('h3').style.backgroundColor = 'white';
    document.getElementById('h32').style.backgroundColor = 'white';
    chosenWhip.style.border = '15px solid white';
    chosenWhip.style.background = 'ghostwhite';
    chosenWhip.style.color = 'ghostwhite';
    document.querySelector('#span').style.color = 'ghostwhite';
    document.querySelector('#span').style.backgroundColor = 'white';
    confirm('You are an idiot for using discord light mode');
};

function gaymode() {
    for (let i=0; i<audioButtons.length; i++){
        audioButtons[i].style.backgroundColor = 'green';
        audioButtons[i].style.border = '3px solid green';
    }
    document.getElementById('h1').style.color = 'black';
    document.getElementById('h2').style.color = 'black';
    document.getElementById('h22').style.color = 'black';
    document.getElementById('h3').style.color = 'black';
    document.getElementById('h32').style.color = 'black';
    document.querySelector('#span').style.color = 'black';
    document.querySelector('#span').style.backgroundColor = 'yellow';
    document.getElementById('body').style.backgroundColor = 'white';
    document.getElementById('h2').style.backgroundColor = 'orange';
    document.getElementById('h22').style.backgroundColor = 'blue';
    document.getElementById('h1').style.backgroundColor = 'red';
    document.getElementById('h3').style.backgroundColor = 'blue';
    document.getElementById('h32').style.backgroundColor = 'purple';
    chosenWhip.style.border = '15px solid aqua';
    chosenWhip.style.background = 'aqua';
    alert('If you\'re gay, then don\'t worry, you\'re loved. But not by me of course, I\'m not gay');
};

function backin1969mode() {
    for (let i=0; i<audioButtons.length; i++){
        audioButtons[i].style.backgroundColor = 'silver';
        audioButtons[i].style.border = '3px solid black';
    }
    document.getElementById('h1').style.color = 'black';
    document.getElementById('h2').style.color = 'black';
    document.getElementById('h22').style.color = 'black';
    document.getElementById('h3').style.color = 'black';
    document.getElementById('h32').style.color = 'black';
    document.getElementById('body').style.backgroundColor = 'smokewhite';
    document.getElementById('h2').style.backgroundColor = 'lightgrey';
    document.getElementById('h22').style.backgroundColor = 'grey';
    document.getElementById('h1').style.backgroundColor = 'gainsboro';
    document.getElementById('h3').style.backgroundColor = 'grey';
    document.getElementById('h32').style.backgroundColor = 'grey';
    chosenWhip.style.borderTop = '15px solid grey';
    chosenWhip.style.borderBottom = '15px solid slategrey';
    chosenWhip.style.borderLeft = '15px solid dimgrey';
    chosenWhip.style.borderRight = '15px solid dimgrey';
    chosenWhip.style.background = 'darkgrey';
    document.querySelector('#span').style.color = 'black';
    document.querySelector('#span').style.backgroundColor = 'grey';
}
