function scroll() {
    var down = document.querySelectorAll(".down")[0];
    var up = document.querySelectorAll(".up")[0];
    var elmnt = document.getElementById("contact");
    up.addEventListener('click', function () {
        window.scrollTo(0, 0);
    });
    down.addEventListener('click', function () {
        elmnt.scrollIntoView();
    });
    up.style.display = "none";
    window.addEventListener('scroll', function () {
        var scroll = window.pageYOffset;
        if (scroll < 20) {
            down.style.display = "block";
            up.style.display = "none";
        } else {
            down.style.display = "none";
            up.style.display = "block";
        }
    });
}
scroll();