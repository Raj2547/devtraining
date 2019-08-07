function RunnerTask() {
    this.gobtn = document.getElementById("goBtn");
    this.resetbtn = document.getElementById("resetBtn");
    this.runner = document.getElementById("runner");
    this.left = 0;
    this.delayrun;
    this.left = 0;
    this.step = 0;
    this.currentTime = 0;
    this.currentLeft = 0;
    this.timeCell = document.getElementsByClassName("time");
    this.distanceCell = document.getElementsByClassName("distance");

    this.gobtn.addEventListener("click", RunnerTask.prototype.run);
    this.resetbtn.addEventListener("click", RunnerTask.prototype.reset);

    this.gobtn.focus();
}
Array.prototype.randomePick = function () {
    return this[Math.floor(Math.random() * this.length)];
}

RunnerTask.prototype.run = function () {
    // var speed = Math.floor(Math.random() * 10) + 6;
    var posx = 0;
    // var speed = [16].randomePick();
    var speed = [6, 8, 10, 12, 14, 16].randomePick();
    a.gobtn.disabled = true;
    clock = setInterval(timer, 100);
    animation = setInterval(animate, 30);
    startRun = setInterval(a.leftIncrease, speed);
    console.log("" + speed + "ms");
    // a.runner.style.animationName = "run";
    function timer() {
        a.currentTime += 100;
    }
    function animate() {
        posx -= 30;
        a.runner.style.backgroundPositionX = posx + "px";
    }
}

RunnerTask.prototype.leftIncrease = function () {
    a.runner.style.left = a.currentLeft + "px";
    if (a.currentLeft > 510) {
        clearInterval(startRun);
        clearInterval(clock);
        clearInterval(animation);
        a.currentTime = 0;
        a.gobtn.style.display = "none";
        a.resetbtn.style.display = "block";
        a.resetbtn.disabled = false;
        a.resetbtn.focus();
        a.runner.style.animationName = "";
    }
    if (a.currentLeft < 510 && a.currentLeft == a.left + 50) {
        a.enterScore(a.currentTime / 1000 + "s", a.step + 1 + "000", a.timeCell[a.step], a.distanceCell[a.step]);
        a.left += 50;
        a.step++;
        if (a.step % 4 == 0) { document.querySelectorAll(".scoreboardArea")[0].scrollTop += 200; }
    }
    a.currentLeft += 1;
}

RunnerTask.prototype.enterScore = function (t, d, element1, element2) {
    element1.innerHTML = t;
    element2.innerHTML = d;
}

RunnerTask.prototype.reset = function () {
    a.currentLeft = 0;
    a.currentTime = 0;
    a.left = 0;
    a.step = 0;
    runner.style.left = "0px";
    a.gobtn.style.display = "block";
    a.resetbtn.style.display = "none";
    a.gobtn.disabled = false;
    a.gobtn.focus();
    document.querySelectorAll(".scoreboardArea")[0].scrollTop = 0;
    for (let i = 0; i < a.timeCell.length; i++) {
        a.enterScore("---", "---", a.timeCell[i], a.distanceCell[i]);
    }
}

RunnerTask.prototype.reverse = function () {
    a.currentTime = 0;
    a.resetbtn.disabled = true;
    var posx = 0
    var j = 10;

    reverseRun = setInterval(leftDecrease, 2);
    function leftDecrease() {
        a.currentLeft -= 1
        a.runner.style.left = a.currentLeft + "px";
        posx += 30;
        a.runner.style.backgroundPositionX = posx + "px";
        if (!a.currentLeft) {
            clearInterval(reverseRun);
            a.reset();
        }
        document.querySelectorAll(".scoreboardArea")[0].scrollTop -= 0.5;
        j--;
    }

}

var a = new RunnerTask;