function playerManager() {
    var trackdist = 10000;
    this.setcount = trackdist / 1000;
    this.runner = document.getElementById("runner");
    this.go = document.getElementById("gobtn");
    this.reset = document.getElementById("resetbtn");
    this.left = 0;
    this.condition = 0;
    this.curtime = 0;
    this.curdist = 0;
    this.bpos = 0;
    this.curmsec = 0;
    this.track = document.getElementById("track")
    this.trackwidth = this.setcount * 48;
    this.track.style.width = this.trackwidth + "px"
    this.tabletime = document.getElementsByClassName("tabletime");
    this.tabledist = document.getElementsByClassName("tabledist");
    this.go.addEventListener("click", this.run);
    this.reset.addEventListener("click", this.gameReset)
    var datalabel = document.getElementById("datalabel");
    var table = document.getElementById("datadisp");
    for (let i = 1000; i <= trackdist; i += 1000) {
        datalabel.insertAdjacentHTML("beforeend", "<div class=\"setlabel\">" + i + "</div>");
        table.insertAdjacentHTML("beforeend", " <tr><td class=\"tabletime\">--</td><td class=\"tabledist\">--</td></tr>");
    }

}

playerManager.prototype.run = function () {
    var timeSpeed= player.setSpeed()/player.trackwidth;
    player.curmsec = (new Date()).getTime();
    player.go.setAttribute("disabled", "disabled");
    player.run = setInterval(player.leftincrease,timeSpeed);
}

playerManager.prototype.leftincrease = function () {
    player.bpos -= 32;
    player.runner.style.backgroundPositionX = player.bpos + "px";
    if (player.bpos < -250) { player.bpos = 0 }
    player.runner.style.left = player.left + "px";
    if (player.left == player.trackwidth + 10) {
        clearInterval(player.run);
        player.go.setAttribute("hidden", "hidden");
        player.reset.removeAttribute("hidden");
    }
    if (player.left == player.condition + 48) {
        player.curtime = (new Date()).getTime() - player.curmsec;
        player.setscore(player.curtime / 1000, player.curdist + 1 + "000", player.tabledist[player.curdist], player.tabletime[player.curdist]);
        player.condition += 48;
        player.curdist++;
        if (player.curdist > 0 && player.curdist % 4 == 0) {
            document.getElementsByClassName("dispTime")[0].scrollTop += 130;
        }
    }

    player.left += 1;

}
 
playerManager.prototype.setscore = function (t, d, distance, time) {
    time.innerHTML = t;
    distance.innerHTML = d;
}

playerManager.prototype.setSpeed = function () {
    var speed = [3000, 4000, 5000, 6000, 7000, 8000];
    var random = speed[Math.floor(Math.random() * speed.length)];
    console.log(random);
    return random;
}

playerManager.prototype.gameReset = function () {
    player.go.removeAttribute("hidden");
    player.go.removeAttribute("disabled");
    player.reset.setAttribute("hidden", "hidden");
    player.runner.style.left = 0;
    player.left = 0;
    player.condition = 0;
    player.curtime = 0;
    player.curdist = 0;
    player.bpos = 0;
    document.getElementsByClassName("dispTime")[0].scrollTop = 0;
    player.runner.style.backgroundPositionX = 0 + "px";
    for (let i in player.tabletime) {
        player.setscore("--", "--", player.tabledist[i], player.tabletime[i]);
    }
    clearInterval(player.run);

}

var player = new playerManager;