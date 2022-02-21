let firstName = prompt("Please enter your name");
document.getElementById("my-name").innerHTML = firstName;

let surName = prompt("Please enter your surname", "Capriolo");
document.getElementById("my-surname").innerHTML = surName;

let color = prompt("Please enter your favorite color", "Blue");
document.getElementById("my-color").innerHTML = color;

document.getElementById("demo").innerHTML =
    "Hello " + firstName + surName + color + "! How are you today?";