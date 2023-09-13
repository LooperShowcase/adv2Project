# Loop - Advanced 2 - Project
### In this project Loopers will make a simple scoreboard game which can also be played as challenging game between two players who touch/ press faster

the projects will have couple new features that will make cooler such as making random score and saving logs.
Explin to Loopers what Logs are and give an example in football that in a match we don't just add the score when a team scores a goal but we know in what order what time and more data.

## 1 HTML
- Start with making a copy of the starter folder for each Looper, The starter folder has     
  index.html, empty style.css+ script.js
- Create a parent div with the class "container"
- Inside the "container" div create 2 new divs (children)
- Give both children divs the class "player" and give each one a specific id "blueP" + "redP"
- Use the <center> to align all elements in the center.

###### The code till now should look like this
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loop ADV-2</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
      <div class="player" id="blueP">     </div>
  
       <div class="player" id="redP">     </div>
  </div>

  <script src="script.js"></script>
</body>
</html>
```
###### Inside each child div add

- h1-tag with the color name same for the red (look at the code below)
- Add p-tag with the class="score" and id="blueScore"/"redScore" and write the number 0 between the p-tag

```html
<div class="container">
    <div class="player" id="blueP">
        <h1>Blue</h1>
        <p class="score" id="blueScore">0</p>
    </div>

    <div class="player" id="redP">
        <h1>Red</h1>
        <p class="score" id="redScore">0</p>
    </div>
</div>
```
- Add 3 buttons below the parent ("container") div
- add another div that has p-tag inside it with the id="logs" (as in the code below)
```html
  <button id="reset" onclick="reset()"> Reset </button>
  <button id="random" onclick="random()"> Random </button>
  <button id="Showlogs" onclick="showLogs()"> Show Logs </button>
  <div>
    <p id="logs"></p>
  </div>
```

## 2 JS
- Strat with defining the variables we'll use
```js
let blueScore = 0;
let redScore = 0;
let logs = [];

let blueDiv = document.getElementById("blueP");
let redDiv = document.getElementById("redP");
let logsDiv = document.getElementById("logs");
```

- Before we continue in JS we should go to the HTML and add the "onclick" event for some elements
```html
  <div class="player" id="blueP" onclick="blueFunc()">
  <div class="player" id="redP" onclick="redFunc()">
  <button id="reset" onclick="reset()"> Reset </button>
  <button id="random" onclick="random()"> Random </button>
  <button id="Showlogs" onclick="showLogs()"> Show Logs </button>
```

#### Now will start with functions
- function that will be called when we click on the div
```js
function blueFunc() {
    blueScore++;
    updateScore();
    logs.push("Blue");
}
function redFunc() {
    redScore++;
    updateScore();
    logs.push("Red");
}
```

```js
function updateScore() {
    document.getElementById("blueScore").innerHTML = blueScore;
    document.getElementById("redScore").innerHTML = redScore;
    updateScoreWidth();
}
```

### Buttons functions
##### Reset
```js
function reset()
{
    blueScore = 0;
    redScore = 0;
    logs = [];
    logsDiv.innerText = logs;
    updateScore();
}
```
##### Random
```js
function random()
{
    blueScore = Math.floor(Math.random() * 100);
    redScore = Math.floor(Math.random() * 100);
    updateScore();
}
```
##### ShowLogs
```js
function showLogs()
{
    logsDiv.innerText = logs.join("\n");
}
```

#### Add Event Listener
```js
document.addEventListener("keydown", function(event) {
    if (event.key === "w" || event.key === "W") { blueFunc();}
    else if (event.key === "ArrowUp") { redFunc();}
    else {console.log("Key pressed: " + event.key);} 
  });
```

- Last step is to change the width of the players div according to the score that they got
```js
function updateScoreWidth() {
    const maxWidth = 200; // Maximum width in pixels
    const maxScore = 10;  // Maximum possible score
    const blueWidth = (blueScore / maxScore) * maxWidth + "px";
    const redWidth = (redScore / maxScore) * maxWidth + "px";
    blueDiv.style.width = blueWidth;
    redDiv.style.width = redWidth;
}
```
