let blueScore = 0;
let redScore = 0;
let logs = [];

let blueDiv = document.getElementById("blueP");
let redDiv = document.getElementById("redP");
let logsDiv = document.getElementById("logs");

function blueFunc()
{
    blueScore++;
    updateScore();
    logs.push("Blue");
}

function redFunc()
{
    redScore++;
    updateScore();
    logs.push("Red");
}

function updateScore() {
    document.getElementById("blueScore").innerHTML = blueScore;
    document.getElementById("redScore").innerHTML = redScore;
    updateScoreWidth();
}

function updateScoreWidth() {
    const maxWidth = 200; // Maximum width in pixels
    const maxScore = 10;  // Maximum possible score
    const blueWidth = (blueScore / maxScore) * maxWidth + "px";
    const redWidth = (redScore / maxScore) * maxWidth + "px";
    blueDiv.style.width = blueWidth;
    redDiv.style.width = redWidth;
}

function reset()
{
    blueScore = 0;
    redScore = 0;
    logs = [];
    logsDiv.innerText = logs;
    updateScore();
}

function random()
{
    blueScore = Math.floor(Math.random() * 100);
    redScore = Math.floor(Math.random() * 100);
    updateScore();
}

function showLogs()
{
    logsDiv.innerText = logs.join("\n");
}

document.addEventListener("keydown", function(event) {
    
    if (event.key === "w" || event.key === "W") { blueFunc();}
 
    else if (event.key === "ArrowUp") { redFunc();}
      
    else {console.log("Key pressed: " + event.key);} 
  });