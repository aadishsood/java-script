function changeBackground() {

    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    let color = `rgb(${r}, ${g}, ${b})`;

    document.body.style.backgroundColor = color;

    document.getElementById("backgroundcolor").innerHTML = color;
}


function toggleMenu() {

    let links = document.getElementById("links");

    links.classList.toggle("active");
}


function goHome() {

    window.scrollTo(0, 0);

    document.getElementById("links").classList.remove("active");
}