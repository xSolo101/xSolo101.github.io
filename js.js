let counter =0;
let result = "";


function tickUp() {
    counter++;
    document.getElementById("counter").textContent = counter;
}

function tickDown() {
    counter--;
    document.getElementById("counter").textContent = counter;
}

function runForLoop() {
    let result = "";
    for (let i = 0; i <= counter; i++) {
        result += i + " ";
    }
    document.getElementById("forLoopResult").textContent = result;
}

function showOddNumbers() {
    let result = "";
    for (let i = 1; i <= counter; i++) {
        if (i % 2 === 1) {
            result += i + " ";
        }
    }
    document.getElementById("oddNumberResult").textContent = result;
}


function addMultiplesToArray() {
    let multiples = [];

    for (let i = counter; i >= 5; i--) {
        if (i % 5 === 0) {
            multiples.push(i);
        }
    }

    console.log(multiples);
}

function printCarObject() {
    let type = document.getElementById("carType").value;
    let mpg = document.getElementById("carMPG").value;
    let color = document.getElementById("carColor").value;

    let car = {
        cType: type,
        cMPG: mpg,
        cColor: color
    };

    console.log(car);
}

function loadCar(choice) {
    let car;

    if (choice === 1) {
        car = carObject1;
    } else if (choice === 2) {
        car = carObject2;
    } else if (choice === 3) {
        car = carObject3;
    }

    document.getElementById("carType").value = car.cType;
    document.getElementById("carMPG").value = car.cMPG;
    document.getElementById("carColor").value = car.cColor;
}

function changeColor(choice) {
    let paragraph = document.getElementById("styleParagraph");

    if (choice === 1) {
        paragraph.style.color = "red";
    } else if (choice === 2) {
        paragraph.style.color = "green";
    } else if (choice === 3) {
        paragraph.style.color = "blue";
    }
}
