# Loop - Advanced 2 - Project
### In this project Loopers will make a simple scoreboard game which can also be played as challenging game between two players who touch/ press faster

## 1
- Start with making a copy of the starter folder for each Looper, The starter folder has     
  index.html, empty style.css+ script.js
- Create a parent div with the class "container"
- Inside the "container" div create 2 new divs (children)
- Give both children divs the class "player" and give each one a specific id "blueP" + "redP"
- Use the <center> to alight all elements in the center.

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
  ```  <button id="reset" onclick="reset()"> Reset </button>
  <button id="random" onclick="random()"> Random </button>
<button id="Showlogs" onclick="showLogs()"> Show Logs </button>
```
