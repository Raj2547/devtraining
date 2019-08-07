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
    // a.runner.style.animationName = "run";
    var posx = 0;
    var speed = [6, 8, 10, 12, 14, 16].randomePick();
    a.gobtn.disabled = true;
    clock = setInterval(timer, 10);
    animation = setInterval(animate, 30);
    startRun = setInterval(a.leftIncrease, speed);
    console.log("" + speed + "ms");
    function timer() {
        a.currentTime += 10;
    }
    function animate() {
        posx -= 30;
        a.runner.style.backgroundPositionX = posx + "px";
        if(posx == -300){posx = 300;}
    }

}



RunnerTask.prototype.leftIncrease = function () {
    a.runner.style.left = a.currentLeft + "px";
    if (a.step == 20) {
        clearInterval(startRun);
        clearInterval(clock);
        clearInterval(animation);
        a.currentTime = 0;
        a.gobtn.style.display = "none";
        a.resetbtn.style.display = "block";
        a.resetbtn.focus();
    }
    if (a.step < 20 && a.currentLeft == a.left + 51) {
        a.enterScore(a.currentTime + "ms", a.step + 1 + "000", a.timeCell[a.step], a.distanceCell[a.step]);
        a.left += 51;
        a.step++;
        if (a.step === 6 || a.step === 12 || a.step === 17) { document.querySelectorAll(".scoreboardArea")[0].scrollTop += 300; }
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

var a = new RunnerTask;