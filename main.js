let divClasses = document.querySelectorAll('.div');

divClasses.forEach((div) => {
    div.onclick = function () {
        setBgColor(div.id); // value of div.id will be the background-color of the body 
    }
});

if (localStorage.length > 0) {
    document.body.style.background = localStorage.bgColor;
}

function setBgColor(bgColor) {
    localStorage.setItem('bgColor', bgColor)
    document.body.style.background = bgColor;
}

//// Scroll to Top Button

let btn = document.getElementById("btn");

window.onscroll = function () {
    if (scrollY >= 500) {
        btn.style.display = "block";
    }
    else {
        btn.style.display = "none";
    }
}

btn.onclick = function () {
    scroll({
        left: 0,
        top: 0,
        behavior: "smooth"
    })
}
