var timer;
var totalSeconds;
var minutes;
var seconds;
var s;
var a = 0;
var b = 1;

function createTimer(timerID, time) {
  timer = document.getElementById(timerID);
  totalSeconds = time;
  minutes = time / 60;
  seconds = 0;
  s = "0";

  updateTimer();
  window.setTimeout("Tick()", 1000);
}

function Tick() {
  if (b == 1) {
    if (totalSeconds <= 0) {
      alert("You lose, but you got " + score + " states correct!");
      return;
    }
  } else if (b == 0) {
    timer = null;
  }
  totalSeconds -= 1;
  if (seconds == 0) {
    seconds = 60;
    minutes -= 1;
  }
  if (seconds >= 11) {
    s = "";
  } else {
    s = "0";

  }
  seconds -= 1;
  updateTimer();
  window.setTimeout("Tick()", 1000);
}

function updateTimer() {
  timer.innerHTML = minutes + ":" + s + seconds;
}

function searchKeyPress(e) {

  if (typeof e == 'undefined' && window.event) {
    e = window.event;
  }
  if (e.keyCode == 13) {
    wrong();
  }
}

function doSomething() {
  if (a == 0) {
    createTimer("timer", 300);
  }
  a++;
  checkInput();
}

var usStates = {
  "ALABAMA": "AL",
  "ALASKA": "AK",
  "ARIZONA": "AZ",
  "ARKANSAS": "AR",
  "CALIFORNIA": "CA",
  "COLORADO": "CO",
  "CONNECTICUT": "CT",
  "DELAWARE": "DE",
  "FLORIDA": "FL",
  "GEORGIA": "GA",
  "HAWAII": "HI",
  "IDAHO": "ID",
  "ILLINOIS": "IL",
  "INDIANA": "IN",
  "IOWA": "IA",
  "KANSAS": "KS",
  "KENTUCKY": "KY",
  "LOUISIANA": "LA",
  "MAINE": "ME",
  "MARYLAND": "MD",
  "MASSACHUSETTS": "MA",
  "MICHIGAN": "MI",
  "MINNESOTA": "MN",
  "MISSISSIPPI": "MS",
  "MISSOURI": "MO",
  "MONTANA": "MT",
  "NEBRASKA": "NE",
  "NEVADA": "NV",
  "NEW HAMPSHIRE": "NH",
  "NEW JERSEY": "NJ",
  "NEW MEXICO": "NM",
  "NEW YORK": "NY",
  "NORTH CAROLINA": "NC",
  "NORTH DAKOTA": "ND",
  "OHIO": "OH",
  "OKLAHOMA": "OK",
  "OREGON": "OR",
  "PENNSYLVANIA": "PA",
  "RHODE ISLAND": "RI",
  "SOUTH CAROLINA": "SC",
  "SOUTH DAKOTA": "SD",
  "TENNESSEE": "TN",
  "TEXAS": "TX",
  "UTAH": "UT",
  "VERMONT": "VT",
  "VIRGINIA": "VA",
  "WASHINGTON": "WA",
  "WEST VIRGINIA": "WV",
  "WISCONSIN": "WI"
};

var usStatesLength = usStates.length;
var score = 0;
var enteredStates = ["ALABAMA", "ALASKA", "ARIZONA", "ARKANSAS", "CALIFORNIA", "COLORADO", "CONNECTICUT", "DELAWARE", "FLORIDA", "GEORGIA", "HAWAII", "IDAHO", "ILLINOIS", "INDIANA", "IOWA", "KANSAS", "KENTUCKY", "LOUISIANA", "MAINE", "MARYLAND", "MASSACHUSETTS", "MICHIGAN", "MINNESOTA", "MISSISSIPPI", "MISSOURI", "MONTANA", "NEBRASKA", "NEVADA", "NEW HAMPSHIRE", "NEW JERSEY", "NEW MEXICO", "NEW YORK", "NORTH CAROLINA", "NORTH DAKOTA", "OHIO", "OKLAHOMA", "OREGON", "PENNSYLVANIA", "RHODE ISLAND", "SOUTH CAROLINA", "SOUTH DAKOTA", "TENNESSEE", "TEXAS", "UTAH", "VERMONT", "VIRGINIA", "WASHINGTON", "WEST VIRGINIA", "WISCONSIN"];
var enteredStates = []


function checkInput() {

  var test = document.getElementById("text_box_1").value.toUpperCase().trim();
  if (test in usStates) {
    if (enteredStates.indexOf(test) == -1) {
      enteredStates[enteredStates.length] = test;
      document.getElementById("text_box_1").style.borderColor = "rgb(67,240,79)";
      document.getElementById("text_box_1").value = "";
      updateList();
      score++;
      document.getElementById("score").innerHTML = "Score: " + score;
      console.log(enteredStates.length);
      if (enteredStates.length == 50) {
        win();
      }
    }
  }
}

function updateList() {
  enteredStates.sort();
  var text = "";
  var linecount = 0;
  for (i = 0; i < enteredStates.length; i++) {
    text += enteredStates[i] + "&nbsp&nbsp&nbsp&nbsp";
    linecount += 1
    if (linecount == 1) {
      linecount = 0;
      text += "\n"
    }
  }
  document.getElementById("list").innerHTML = text;
}

function wrong() {
  document.getElementById("text_box_1").value = "";
  document.getElementById("text_box_1").style.borderColor = "red";
}

function restart() {
  document.getElementById("score").innerHTML = "Score: " + 0;
  createTimer("timer", 300);
  document.getElementById("text_box_1").value = "";
  enteredStates = null;
  document.getElementById("list").innerHTML = null;
  a = 1;
}

function win() {
  alert("Congratulations, you win!");
  b = 0;
  timer.innerHTML = null;

}