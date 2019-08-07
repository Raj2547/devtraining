function RunnerTask() {
    // this.stepEntered = prompt("Enter Distance in multiply of 1000",0);
    this.stepEntered = 10000;
    this.stepCount = this.stepEntered / 1000;
    this.track = document.getElementsByClassName("track")[0];
    this.lable = document.getElementById("distLable");
    this.table = document.getElementById("tableDyn");
    this.gobtn = document.getElementById("goBtn");
    this.resetbtn = document.getElementById("resetBtn");
    this.runner = document.getElementById("runner");
    this.left = 0;
    this.delayrun;
    this.left = 0;
    this.step = 0;
    this.posx = 0;
    this.variable = 0;
    this.currentTime = 0;
    this.clickedTime = 0;
    this.currentLeft = 0;
    this.stepWidth = 48;
    this.runnerWidth = document.getElementById("runner").clientWidth;
    this.timeCell = document.getElementsByClassName("time");
    this.distanceCell = document.getElementsByClassName("distance");
    this.gobtn.addEventListener("click", RunnerTask.prototype.run);
    this.resetbtn.addEventListener("click", RunnerTask.prototype.reverse);
    this.gobtn.focus();
    this.track.style.width = this.stepCount * 48 + "px";
    for (let i = 1; i <= this.stepCount; i++) {
        this.lable.insertAdjacentHTML("beforeend", " <div class=\"d-lable\">" + i + "000</div>");
    }
    for (let i = 1; i < this.stepCount; i++) {
        this.table.insertAdjacentHTML("beforeend", "  <tr> <td class=\"time\">---</td><td class=\"distance\">---</td></tr>");
    }
}
Array.prototype.randomePick = function () {
    return this[Math.floor(Math.random() * this.length)];
}

RunnerTask.prototype.run = function () {
    a.speed = [3000, 4000, 5000, 6000, 7000, 8000].randomePick() / a.stepCount / a.stepWidth;
    a.gobtn.disabled = true;
    a.clickedTime = (new Date()).getTime();
    a.variable = a.clickedTime;
    startRun = setInterval(a.leftIncrease, a.speed);
    console.log(a.clickedTime);
    console.log(a.speed);

}

RunnerTask.prototype.leftIncrease = function () {
    a.runner.style.left = a.currentLeft + "px";
    if (a.currentLeft > a.stepCount * a.stepWidth) {
        clearInterval(startRun);
        a.currentTime = 0;
        a.gobtn.style.display = "none";
        a.resetbtn.style.display = "block";
        a.resetbtn.disabled = false;
        a.resetbtn.focus();
        a.runner.style.animationName = "";
        a.runner.style.left = a.stepWidth * a.stepCount + "px";
    }
    if (a.currentLeft == a.left + a.stepWidth) {
        console.log(((new Date()).getTime() - a.clickedTime) / 1000)
        a.currentTime = (new Date()).getTime() - a.clickedTime;
        a.enterScore(a.currentTime / 1000 + "s", a.step + 1 + "000", a.timeCell[a.step], a.distanceCell[a.step]);
        a.left += a.stepWidth;
        a.step++;
        if (a.step % 4 == 0) { document.querySelectorAll(".scoreboardArea")[0].scrollTop += 200; }
    }
    a.currentLeft++;
    a.posx -= a.runnerWidth;
    a.runner.style.backgroundPositionX = a.posx + "px";
    if (a.posx == -a.runnerWidth * 10) { a.posx = a.runnerWidth * 10; }
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
    var j = a.stepCount - 1;
    reverseRun = setInterval(leftDecrease, 8);
    function leftDecrease() {
        a.currentLeft -= 10
        a.runner.style.left = a.currentLeft + "px";
        posx += 30;
        a.runner.style.backgroundPositionX = posx + "px";
        if (a.currentLeft < 0) {
            clearInterval(reverseRun);
            a.reset();
        }
        document.querySelectorAll(".scoreboardArea")[0].scrollTop -= 0.5;
        if (j !== 0) { a.enterScore("---", "---", a.timeCell[j], a.distanceCell[j]); j--; }

    }

}

var a = new RunnerTask;