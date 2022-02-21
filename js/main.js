/* let firstName = prompt("Please enter your name", "Francesco");
document.getElementById("my-name").innerHTML = firstName;

let surName = prompt("Please enter your surname", "Capriolo");
document.getElementById("my-surname").innerHTML = surName;

let color = prompt("Please enter your favorite color", "Blue");
document.getElementById("my-color").innerHTML = color;

document.getElementById("demo").innerHTML =
    "Hello " + firstName + surName + color + "21"; */

function myFunction() {
    let firstName = prompt("Please enter your name", "Francesco");

    if (firstName != null) {
        document.getElementById("my-name").innerHTML = firstName;
    }

    document.getElementById("demo-surname").innerHTML = "Cognome?";

    let surName = prompt("Please enter your surname", "Capriolo");

    if (surName != null) {
        document.getElementById("my-surname").innerHTML = surName;
    }
    document.getElementById("demo-color").innerHTML = "Colore preferito?";

    let color = prompt("Please enter your favorite color", "Blue");

    if (color != null) {
        document.getElementById("my-color").innerHTML = color;
    }
    document.getElementById("demo").innerHTML =
        "Hello " + firstName + surName + color + "21";
}