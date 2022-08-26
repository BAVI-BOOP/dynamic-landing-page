// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    person = document.getElementById('person'),
    aim = document.getElementById('aim');

// Show Time
function showTime() {
    let today = new Date(),
        hour= today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


        // Set AM or PM
        const amPm = hour >= 12 ? 'PM' : 'AM';

        // 12hr Format
        hour = hour % 12 || 12;

        // Output Time
        time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

        setTimeout(showTime, 1000);

}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0': '')+ n;
} 

// Set Background and Greeting
function setBgGreet() {
    let today = new Date(), 
        hour = today.getHours();

    if(hour < 12) {
        document.body.style.backgroundImage = "url('./images/morning.jpg')" 
        greeting.textContent = 'Good Morning'
    } else if(hour < 18) {
        document.body.style.backgroundImage = "url('./images/afternoon.jpg')" 
        greeting.textContent = 'Good Afternoon'
    }  else {
        document.body.style.backgroundImage = "url('./images/night.jpg')"
        greeting.textContent = 'Good Night'
        document.body.style.color = 'white'
    }
}

// Get Name
function getName() {
    if(localStorage.getItem('person') == null) {
        person.textContent = '[Enter Name]';
    } else {
        person.textContent = localStorage.getItem('person')
    }
}

// Set Name
function setName(e) {
    if(e.type ==='keypress') {
        // Make sure enter is presses
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            person.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText);
    }
}


// Get Focus
function getFocus() {
    if(localStorage.getItem('aim') == null) {
        aim.textContent = '[Enter Focus]';
    } else {
        aim.textContent = localStorage.getItem('aim')
    }
}

// Set Focus
function setFocus(e) {
    if(e.type ==='keypress') {
        // Make sure enter is presses
        if(e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('aim', e.target.innerText);
            aim.blur();
        }
    } else {
        localStorage.setItem('aim', e.target.innerText);
    }
}

person.addEventListener('keypress', setName);
person.addEventListener('blur', setName);
aim.addEventListener('keypress', setFocus);
aim.addEventListener('blur', setFocus);

//Run
showTime()

// Set Background
setBgGreet()

// Get Name
getName()

// Get Focus
getFocus()

// Set Name()
setName()

// Set Focus()
setFocus()

// Get Aim
getAim()



