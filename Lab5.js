var options = {
  "Cleveland Cavaliers": ["LeBron James", "Kyrie Irving", "Kevin Love", "J.R. Smith", "Timofey Mozgov"],
  "Golden State Warriors": ["Steph Curry", "Klay Thompson", "Andrew Bogut", "Draymond Green", "David Lee", "Harrison Barnes", "Andre Iguodala"],
  "Oklahoma City Thunder": ["Russell Westbrook", "Kevin Durant", "Serge Ibaka", "Dion Waiters"],
  "Atlanta Hawks": ["Jeff Teague", "Kyle Korver", "Al Horford"],
  "San Antonio Spurs": ["Tony Parker", "Tim Duncan", "Kawhi Leonard", "Danny Green", "Manu Ginobili", "Tiago Splitter"]
};

function loadOptions() {
  var select = document.getElementById("selectone");
  var a;
  var key;
  for (key in options) {
    a = document.createElement("option");
    a.text = key;
    a.value = key;
    select.add(a);
  }
}

function loadDrop() {
  document.getElementById("selectone").size = 0;
}

function loadList() {
  document.getElementById("selectone").size = 5;
}

function loadSecondOptions() {
  var key = document.getElementById("selectone");
  var two = document.getElementById("selecttwo");
  var a;
  var list = options[key.children[key.selectedIndex].value];

  for (var i = two.options.length - 1; i >= 0; i--) {
    two.options[i] = null;
  }
  for (i = 0; i < list.length; i++) {
    a = document.createElement("option");
    a.text = list[i];
    a.value = list[i];
    two.add(a);
  }
}