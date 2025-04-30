// original code
let d = new Date();
let time = d.toLocaleTimeString();
// console.log(time);

// updated version
// made into a function
function timeInterval() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

setInterval(timeInterval, 1000);
