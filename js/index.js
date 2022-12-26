function openNav() {
    document.getElementById("sidenav").style.width = "320px";
    document.getElementById("main").style.marginLeft = "320px";
    document.getElementById("sideBar-btn").innerHTML = "&times";
    document.getElementById("sideBar-btn").style.fontSize = "26px";
}

function closeNav() {
    document.getElementById("sidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("sideBar-btn").innerHTML = "☰";
    document.getElementById("sideBar-btn").style.fontSize = "16px";
}

function nav() {
    const element = document.querySelector('#sidenav')
    const style = getComputedStyle(element)
    if(style.width == "0px") {
        openNav()
    } else {
        closeNav()
    }
}


function pageTop() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
}
window.onload = (e) => {
    pageTop()
}

//smooth scrolling 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});