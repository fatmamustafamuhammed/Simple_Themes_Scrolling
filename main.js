if (localStorage.length > 0) {
    document.body.style.background = localStorage.color;
}

function setColor(color) {
    localStorage.setItem('color', color)
    document.body.style.background = color;
}

// 

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
