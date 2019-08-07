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
    this.startRun = 0;
    this.runnerWidth = document.getElementById("runner").clientWidth;
    this.timeCell = document.getElementsByClassName("time");
    this.distanceCell = document.getElementsByClassName("distance");
    this.gobtn.addEventListener("click", RunnerTask.prototype.run);
    this.resetbtn.addEventListener("click", RunnerTask.prototype.reset);
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
    a.speed = [3000].randomePick() / a.stepCount / a.stepWidth;
    a.gobtn.disabled = true;
    a.clickedTime = (new Date()).getTime();
    a.variable = a.clickedTime;
    console.log(a.clickedTime);
    console.log(a.speed);
    a.startRun = setInterval(a.leftIncrease, a.speed);
}

RunnerTask.prototype.leftIncrease = function () {
    a.runner.style.left = a.currentLeft + "px";
    a.currentLeft++;
    a.posx -= a.runnerWidth;
    a.runner.style.backgroundPositionX = a.posx + "px";
    if (a.posx == -a.runnerWidth * 10) {
        a.posx = a.runnerWidth * 10;
    }
    
    if (a.currentLeft > a.stepCount * a.stepWidth) {
        a.clear();
    }
    if (a.currentLeft == a.left + a.stepWidth) {
        a.enterScore();
    }
    // var stepTime = ((new Date()).getTime() - a.clickedTime);
    // if (stepTime - 300 <= 1 && stepTime - 300 > 0) {
    //     console.log(stepTime);
    // }
    // console.log(Math.round(stepTime / 300));
}

RunnerTask.prototype.enterScore = function () {
    a.currentTime = (new Date()).getTime() - a.clickedTime;
    a.timeCell[a.step].innerHTML = a.currentTime / 1000 + "s";
    a.distanceCell[a.step].innerHTML = a.step + 1 + "000";
    a.left += a.stepWidth;
    a.step++;
    if (a.step % 4 == 0) { document.querySelectorAll(".scoreboardArea")[0].scrollTop += 200; }
}

RunnerTask.prototype.clear = function () {
    clearInterval(a.startRun);
    a.currentTime = 0;
    a.gobtn.style.display = "none";
    a.resetbtn.style.display = "block";
    a.resetbtn.disabled = false;
    a.resetbtn.focus();
    a.runner.style.animationName = "";
    a.runner.style.left = a.stepWidth * a.stepCount + "px";
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
        a.timeCell[i].innerHTML = "---";
        a.distanceCell[i].innerHTML = "---";
    }
}



var a = new RunnerTask;