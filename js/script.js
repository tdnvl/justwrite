// Clear the text field on load
window.onload = function(){
    document.getElementById("input").value = "";
}

// Takes keyboard input and displays one character at a time

function showOneCharacter(event) {
    var x = event.keyCode;         // Get the Unicode value
    var y = String.fromCharCode(x);    // Convert the value into a character
    document.getElementById("output").innerHTML = y;
}

// Grabs the content of the input field and drops it in the <p>
function saveInput(event){
    var z = document.getElementById('input').value; // this grabs the value of z (undefined) and inserts it into the input field; the opposite of waht I want tot do
    document.getElementById("my_input").innerHTML = z; // this works
}

// Export content of input field as txt
// Alternatively, consider https://github.com/eligrey/FileSaver.js

function exportTxt(event){
    var content = document.getElementById('input').value;
    window.open("data:application/txt," + encodeURIComponent(content), "_self");
}

// Makes the output div visible upon click
function makeVisible(){
    document.getElementById("outputbox").className = document.getElementById("outputbox").className.replace( 'invisible' , 'visible' )
}

// Disable backspace in input: https://www.thaicreate.com/tutorial/javascript-disable-backspace-on-keypress.html

document.onkeydown = chkEvent
var formInUse = false;
function chkEvent(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode; //*** for IE ***//
    else if (e) keycode = e.which; //*** for Firefox ***//
    if(keycode==8)
    {
        return false;
    }
}

// Give focus back to the text input when output is generated

function getfocus(){
    document.getElementById("input").focus();
}

// Look into web storage so the content of input is kept if somebody navigates away
// https://github.com/mdn/dom-examples/blob/master/web-storage/main.js

// Sanitizing input before passing onto UI?