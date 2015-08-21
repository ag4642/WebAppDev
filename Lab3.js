var timer;
var totalSeconds;
var minutes;
var seconds;
var s;
var a = 0;
var b = 1;
var c = 0;

function createTimer(timerID, time) {
  timer = document.getElementById(timerID);
  totalSeconds = time;
  updateTimer();
  window.setTimeout("Tick()", 1000);
}

function Tick() {
  if (b == 1) {
    if (totalSeconds <= 0) {
      document.getElementById("text_box_1").value = "";
      createTimer("timer", 10);
      newState();
      return;
    }
  } else if (b == 0) {
    timer = null;
  }
  totalSeconds -= 1;
  updateTimer();
  window.setTimeout("Tick()", 1000);
}

function updateTimer() {
  timer.innerHTML = totalSeconds + "s";
}

function doSomething() {
  if (a == 0) {
    createTimer("timer", 10);
  }
  a++;
  console.log(c);
  checkInput();
}

var stateslist = {
  "NEW YORK": "ALBANY",
  "MARYLAND": "ANNAPOLIS",
  "GEORGIA": "ATLANTA",
  "MAINE": "AUGUSTA",
  "TEXAS": "AUSTIN",
  "LOUISIANA": "BATON ROUGE",
  "NORTH DAKOTA": "BISMARCK",
  "IDAHO": "BOISE",
  "MASSACHUSETTS": "BOSTON",
  "NEVADA": "CARSON CITY",
  "WEST VIRGINIA": "CHARLESTON",
  "WYOMING": "CHEYENNE",
  "SOUTH CAROLINA": "COLUMBIA",
  "OHIO": "COLUMBUS",
  "NEW HAMPSHIRE": "CONCORD",
  "COLORADO": "DENVER",
  "IOWA": "DES MOINES",
  "DELAWARE": "DOVER",
  "KENTUCKY": "FRANKFORT",
  "PENNSYLVANIA": "HARRISBURG",
  "CONNECTICUT": "HARTFORD",
  "MONTANA": "HELENA",
  "HAWAII": "HONOLULU",
  "INDIANA": "INDIANAPOLIS",
  "MISSISSIPPI": "JACKSON",
  "MISSOURI": "JEFFERSON CITY",
  "ALASKA": "JUNEAU",
  "MICHIGAN": "LANSING",
  "NEBRASKA": "LINCOLN",
  "ARKANSAS": "LITTLE ROCK",
  "WISCONSIN": "MADISON",
  "ALABAMA": "MONTGOMERY",
  "VERMONT": "MONTPELIER",
  "TENNESEE": "NASHVILLE",
  "OKLAHOMA": "OKLAHOMA CITY",
  "WASHINGTON": "OLYMPIA",
  "ARIZONA": "PHOENIX",
  "SOUTH DAKOTA": "PIERRE",
  "RHODE ISLAND": "PROVIDENCE",
  "NORTH CAROLINA": "RALEIGH",
  "VIRGINIA": "RICHMOND",
  "CALIFORNIA": "SACRAMENTO",
  "OREGON": "SALEM",
  "UTAH": "SALT LAKE CITY",
  "NEW MEXICO": "SANTA FE",
  "ILLINOIS": "SPRINGFIELD",
  "MINNESOTA": "ST. PAUL",
  "FLORIDA": "TALLAHASSEE",
  "KANSAS": "TOPEKA",
  "NEW JERSEY": "TRENTON"
};

var score = 0;
var states = ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN"];
var enteredStates = [];

function checkInput() {

  var state = document.getElementById("state").innerHTML;
  var capital = document.getElementById("text_box_1").value.toUpperCase().trim();
  if (capital == null) {
    hint();
  } else if (states.length != 0) {
    if (stateslist[state] == capital) {
      right();
    } else if (state == "MINNESOTA") {
      if (capital == "ST. PAUL" || capital == "ST PAUL" || capital == "SAINT PAUL") {
        right();
      }
    }
  } else if (states.length == 0) {
    win();
  }
}

function right() {
    if (c == 1) {
    score++;
    c--;
    document.getElementById("score").innerHTML = "Score: " + score;
  } else if (totalSeconds >= 5) {
    score += 3;
    c--;
    document.getElementById("score").innerHTML = "Score: " + score;
  } else if (totalSeconds > 0) {
    score += 2;
    c--;
    document.getElementById("score").innerHTML = "Score: " + score;
  }
  newState();
  document.getElementById("text_box_1").style.borderColor = "rgb(67,240,79)";

  enteredStates[enteredStates.length] = state;
  states.splice(states.indexOf(state), 1);
  delete stateslist[state];
}

function newState() {
  c--;
  document.getElementById("text_box_1").value = "";
  document.getElementById("state").innerHTML = states[Math.floor((Math.random() * states.length))];
  timer = document.getElementById("timer");
  totalSeconds = 10;
  updateTimer();
  document.getElementById("text_box_1").focus();
}

function restart() {
  document.getElementById("state").innerHTML = states[Math.floor((Math.random() * states.length))];
  timer = document.getElementById("timer");
  totalSeconds = 10;
  updateTimer();
  score = 0;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("text_box_1").focus();
}

function win() {
  alert("Congratulations, you won!");
  b = 0;
  window.clearTimeout(timer);
  timer = null;
}

function hint() {
  var state = document.getElementById("state").innerHTML;
  var capital = stateslist[state];
  var hint = capital.substring(0,1);
  document.getElementById("text_box_1").value=hint;
  totalSeconds = 11;
  c = 1;
  checkInput();
  document.getElementById("text_box_1").focus();
}