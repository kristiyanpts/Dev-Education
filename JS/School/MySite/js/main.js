document.getElementById("my-work").addEventListener("click", function() {
    window.open("https://github.com/KrisDevBG?tab=repositories");
});

document.getElementById("my-work-button").addEventListener("click", function() {
    window.open("https://github.com/KrisDevBG?tab=repositories");
});

document.getElementById("home-page").addEventListener("click", function() {
    window.location.replace("../MySite/home.html");
});

document.getElementById("about-page").addEventListener("click", function() {
    window.location.replace("../MySite/about.html");
});

document.getElementById("contact-page").addEventListener("click", function() {
    window.location.replace("../MySite/contact.html");
});

function CheckShit(elementId) {
    let alegedColor = document.getElementById(elementId).value;

    switch (elementId) {
        case 'bcolor':
            document.body.style.backgroundColor = alegedColor;
            break;
        case 'bscolor':
            document.getElementById("settings").style.transition = "0.5s";
            document.getElementById("settings").style.backgroundColor = alegedColor;
            var all = document.getElementsByTagName("input");
            for (var i=0, max=all.length; i < max; i++) {
                all[i].style.transition = "0.5s";
                all[i].style.backgroundColor = alegedColor;
            }
            break;
        case 'tcolor':
            var all = document.getElementsByTagName("*");
            for (var i=0, max=all.length; i < max; i++) {
                all[i].style.transition = "0.5s";
                all[i].style.color = alegedColor;
            }
            break;
        case 'pcolor':
            let progresses = document.getElementsByClassName("main-inner-progressbar");
            progresses = Array.from(progresses);
            for (let i = 0; i < progresses.length; i++) {
                progresses[i].style.backgroundColor = alegedColor;
            }
            break;
        case 'fperc':
            document.getElementById("main-inner-progressbar-f").style.width = (alegedColor || 0) + "%";
            const obj1 = document.getElementById("main-inner-progressbar-f-t");
            animateValue(obj1, parseInt(document.getElementById("main-inner-progressbar-t-t").innerHTML), alegedColor, 500);
            break;
        case 'sperc':
            document.getElementById("main-inner-progressbar-s").style.width = (alegedColor || 0) + "%";
            const obj2 = document.getElementById("main-inner-progressbar-s-t");
            animateValue(obj2, parseInt(document.getElementById("main-inner-progressbar-t-t").innerHTML), alegedColor, 500);
            break;
        case 'tperc':
            document.getElementById("main-inner-progressbar-t").style.width = (alegedColor || 0) + "%";
            const obj = document.getElementById("main-inner-progressbar-t-t");
            animateValue(obj, parseInt(document.getElementById("main-inner-progressbar-t-t").innerHTML), alegedColor, 500);
            break;
        default:
            break;
    }
}

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start) + "%";
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
}

let settingsShown = false;
function ToggleSettings() {
    if (settingsShown) {
        document.getElementById("settings").style.opacity = 0;
        settingsShown = false;
    } else {
        document.getElementById("settings").style.opacity = 1;
        settingsShown = true;
    }
}