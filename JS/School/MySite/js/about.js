document.getElementById("my-work").addEventListener("click", function() {
    window.open("https://github.com/KrisDevBG?tab=repositories");
});

document.getElementById("home-page").addEventListener("click", function() {
    console.log("vlizam");
    window.location.replace("../MySite/home.html");
});

document.getElementById("about-page").addEventListener("click", function() {
    window.location.replace("../MySite/about.html");
});

document.getElementById("contact-page").addEventListener("click", function() {
    window.location.replace("../MySite/contact.html");
});