// Write your JavaScript code here.
// Remember to pay attention to page loading!
// let takeoff;
// let land;
// let missionAbort;
// let flightStatus;
// let shuttleBackground;
let heightTotal = 0;
let moveVertical = 0;
let moveHorizontal = 0;

function load() {
    takeOff = document.getElementById("takeoff");
    land = document.getElementById("landing");
    missionAbort = document.getElementById("missionAbort");
    flightStatus = document.getElementById("flightStatus");
    shuttleBackground = document.getElementById("shuttleBackground");
    shuttleHeight = document.getElementById("spaceShuttleHeight");
    rocketImage = document.getElementById("rocket");

    function startPos(element) {
        moveVertical = 0;
        moveHorizontal = 0;
        element.style.bottom = 0 + "px";
        element.style.left = 0 + "px";
    }

    takeOff.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if (response) {
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBackground.style.backgroundColor = "blue";
            heightTotal += 10000;
            shuttleHeight.innerHTML = heightTotal;
        }
    });

    land.addEventListener("click", function(event) {
        let response = window.confirm("The shuttle is landing. Landing gear engaged.");
        if (response) {
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            heightTotal = 0;
            shuttleHeight.innerHTML = heightTotal;
            startPos(rocket);
        }
    });

    missionAbort.addEventListener("click", function(event) {
        let response = window.confirm("Confirm that you want to abort the mission.");
        if (response) {
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            heightTotal = 0;
            shuttleHeight.innerHTML = heightTotal;
            startPos(rocket);
        }
    });

    document.getElementById("up").addEventListener("click", function(event) {
        moveVertical += 10;

        // rocketImage.style.position = "absolute";
        rocketImage.style.bottom = (moveVertical) + "px";
        heightTotal += 10000;
        shuttleHeight.innerHTML = heightTotal;
    });

    document.getElementById("down").addEventListener("click", function(event) {
        moveVertical -= 10;

        // rocketImage.style.position = "absolute";
        rocketImage.style.bottom = (moveVertical) + "px";
        heightTotal -= 10000;
        shuttleHeight.innerHTML = heightTotal;
    });

    document.getElementById("right").addEventListener("click", function(event) {
        moveHorizontal += 10;

        // rocketImage.style.position = "absolute";
        rocketImage.style.left = (moveHorizontal) + "px";
    });

    document.getElementById("left").addEventListener("click", function(event) {
        moveHorizontal -= 10;

        // rocketImage.style.position = "absolute";
        rocketImage.style.left = (moveHorizontal) + "px";
    });

}

window.onload = load;