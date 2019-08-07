function task() {
    document.getElementById("body").onload = function () {
        document.getElementById("img").setAttribute("src", "https://www.w3schools.com/Html/pic_trulli.jpg");
        document.getElementById("msg").setAttribute("hidden", "hidden");
    };
    // window.onbeforeunload = function() {
    //     return "Do you really want Exit?";
    //  };
    boxDragg(document.getElementById("box"));
}


function boxDragg(box) {
    var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0;
    box.onmousedown = drag;

    function drag(e) {
        x2 = e.clientX;
        y2 = e.clientY;
        document.onmouseup = stop;
        document.onmousemove = move;

    }
    function move(e) {
        x1 = x2 - e.clientX;
        y1 = y2 - e.clientY;
        x2 = e.clientX;
        y2 = e.clientY;
        document.getElementById("offset").innerHTML = e.x + " X " + e.y;
        box.style.left = (box.offsetLeft - x1) + "px";
        box.style.top = (box.offsetTop - y1) + "px";
    }
    function stop() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}



function passValidate() {
    var pass = document.getElementById("pass"),
        msg2 = document.getElementById("msg2"),
        con1 = document.getElementById("con1"),
        con2 = document.getElementById("con2"),
        con3 = document.getElementById("con3"),
        con4 = document.getElementById("con4"),
        con5 = document.getElementById("con5");
    pass.onkeyup = validate;

    function validate(e) {
        con1.style.color = "red";
        con2.style.color = "red";
        con3.style.color = "red";
        con4.style.color = "red";
        con5.style.color = "red";
        if (!pass.value.length) {
            return;
        }
        if (pass.value.length > 8) {
            con1.style.color = "green";
        }
        if (/([A-Z])/.test(pass.value)) {
            con2.style.color = "green";
        }
        if (/([a-z])/.test(pass.value)) {
            con3.style.color = "green";
        }
        if (/([0-9])/.test(pass.value)) {
            con4.style.color = "green";
        }
        if (/[^\w\s]/.test(pass.value)) {
            con5.style.color = "green";
        }
    }
}


passValidate();

task();

