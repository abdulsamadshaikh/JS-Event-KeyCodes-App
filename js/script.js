/*  
Project Name: JS Event KeyCodes
Description: This is a JS Event KeyCodes application with dark mode. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const body = document.body;
const keycodeDisplay = document.getElementById('keycodeDisplay')
const keysData = document.getElementById('keysData')
const modeBtn = document.getElementById('modeBtn')
const toggleClass = 'dark-mode'

window.addEventListener('keydown', (event) => {

    function conditionalPress () {
        if (event.location === 1) {
            return '<span>(Left-hand keys)</span>'
        } 
        else if (event.location === 2) {
            return '<span>(Right-hand keys)</span>'
        }
        else if (event.location === 3) {
            return '<span>(Numpad)</span>'
        }
        else {
            return '<span>(General keys)</span>'
        }
    }

    keysData.innerHTML = `
        <div class="key">
            <small>event.key</small>
            <p>${event.key === ' ' ? 'Space' : event.key}</p>
        </div>
        <div class="key">
            <small>event.location</small>
            <p>
            ${event.location === ' ' ? '0' : event.location} 
            ${conditionalPress()}
            </p>
        </div>
        <div class="key">
            <small>event.keyCode</small>
            <p>${event.keyCode}</p>
        </div>
        <div class="key">
            <small>event.code</small>
            <p>${event.code}</p>
        </div>`

    keycodeDisplay.innerText = `${event.keyCode}`    
})

// Dark Mode Function
function darkMode() {
   modeBtn.addEventListener('click', () => {
        body.classList.toggle(toggleClass)
        if (body.classList.contains(toggleClass)) {
            modeBtn.innerText = 'Light Mode'
        } else {
            modeBtn.innerText = 'Dark Mode'
        }
   })
}
darkMode()
