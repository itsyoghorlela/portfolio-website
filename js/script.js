// Welcome message in the browser console
console.log("Welcome to Thea's Portfolio!");

// Say Hello button
function greet() {
    alert("Welcome to my portfolio!");
}

// Dark Mode button
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// About Me button
function showMessage() {
    alert("Hi! I'm Thea. I'm currently building my web development portfolio Thanks for dropping by!.");
}

// Personalized welcome
function welcomeVisitor() {
    let visitor = prompt("What's your name?");

    if (visitor) {
        alert("Welcome, " + visitor + "! Thanks for visiting my portfolio.");
    }
}