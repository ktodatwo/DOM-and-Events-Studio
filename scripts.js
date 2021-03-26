function init () {
    const takeOffButton = document.getElementById("takeoff");
    const landButton = document.getElementById("landing");
    const missionAbortButton = document.getElementById("missionAbort");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const rocket = document.getElementById("rocket");
    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    
// Write your JavaScript code here.

//functions
function takeOff () {
    let test = confirm("Confirm that the shuttle is ready for takeoff.");
    if (test === true) {
      flightStatus.innerHTML = "Shuttle in flight.";
      shuttleBackground.style.backgroundColor="blue";
      shuttleHeight.innerHTML = 10000;
    }
}

function land () {
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed.";
    shuttleBackground.style.backgroundColor="";
      shuttleHeight.innerHTML = "0"
}

function abortMission () {
    let test = confirm("Confirm that you want to abort the mission.");
    if (test === true) {
        flightStatus.innerHTML = "Mission aborted.";
        shuttleBackground.style.backgroundColor="";
        shuttleHeight.innerHTML = "0"
    }
}

function move(direction) {
    element = rocket;
    elementStyle = window.getComputedStyle(element);
    
    if (direction.id === ("down")) {
        topValue = elementStyle.getPropertyValue("top").replace("px","");
        element.style.top = (Number(topValue) + 10) + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) - 1000;
    } else if (direction.id === ("up")) {
        topValue = elementStyle.getPropertyValue("top").replace("px","");
        element.style.top = (Number(topValue) - 10) + "px";
        shuttleHeight.innerHTML = Number(shuttleHeight.innerHTML) + 1000;
    } else if (direction.id === ("right")) {
        leftValue = elementStyle.getPropertyValue("left").replace("px","");
        element.style.left = (Number(leftValue) + 10) + "px";
    } else if (direction.id === ("left")) {
        leftValue = elementStyle.getPropertyValue("left").replace("px","");
        element.style.left = (Number(leftValue) - 10) + "px";
    }
    }


//event handlers
takeOffButton.addEventListener("click", takeOff);
landButton.addEventListener("click", land);
missionAbortButton.addEventListener("click", abortMission)
down.addEventListener("click", function(){move(this);});
up.addEventListener("click", function(){move(this);});
right.addEventListener("click", function(){move(this);});
left.addEventListener("click", function(){move(this);});


}
// Remember to pay attention to page loading!
window.onload =  init();


