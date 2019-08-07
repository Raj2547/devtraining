window.addEventListener("beforeunload",function (e) {
    e.preventDefault();
    e.returnValue= "Do you want to leave the site";
});
function timeOut() {
    var a = setTimeout(imgShow, 800);
}
function imgShow() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("displayimage").src = "https://www.w3schools.com/Html/pic_trulli.jpg";
}
dragElement(document.getElementById("dragbox"));
// addEventListener("click", dragElement(document.getElementById("pass-area")));
function dragElement(box) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    box.onmousedown = dragMouseDown;

    function dragMouseDown(e) {
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        box.style.top = (box.offsetTop - pos2) + "px";
        box.style.left = (box.offsetLeft - pos1) + "px";
        document.getElementById("offsetdisp").innerHTML = box.offsetLeft + " x " + box.offsetTop;

    }
    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}


document.getElementById("pass").addEventListener("keyup", passValidate);
function passValidate() {
    var pass=document.getElementById("pass").value,
        check1 = document.getElementById("check1"), 
        check2 = document.getElementById("check2"), 
        check3 = document.getElementById("check3"), 
        check4 = document.getElementById("check4"), 
        check5 = document.getElementById("check5"); 
    check1.setAttribute("color", "red");
    check2.setAttribute("color", "red");
    check3.setAttribute("color", "red");
    check4.setAttribute("color", "red");
    check5.setAttribute("color", "red");
    if (pass.length > 8) {
        check1.setAttribute("color", "green");
    }
    if (/([A-Z])+/.test(pass)) {
        check2.setAttribute("color", "green");
    }
    if (/([a-z])+/.test(pass)) {
        check3.setAttribute("color", "green");
    }
    if (/([0-9])+/.test(pass)) {
        check4.setAttribute("color", "green");
    }
    if (/[^\w\s]/.test(pass)) {
        check5.setAttribute("color", "green");
    }
}

