
let minCount;
let secCount;
let msCount;
let counter = 0;

function count() {
    get("ms").innerHTML = counter % 100;
    if (counter % 100 == 0) {
        get("sec").innerHTML = counter / 100 < 10 ? ("0" + counter / 100) : counter / 100; 
    }
    if (counter % 6000 == 0) {
        get("min").innerHTML = counter / 6000 < 10 ? ("0" + counter / 6000) : counter / 6000; 
    }
    counter++;
}

let get = function (id) {
    return document.getElementById(id);
}

get("startbtn").onclick = function () {
    msCount = setInterval(count, 10);

}

get("stopbtn").onclick = function () {
    clearInterval(msCount);
}

get("resetbtn").onclick = function () {
    counter = 0;
    get("min").innerHTML = "00";
    get("sec").innerHTML = "00";
    get("ms").innerHTML = "00";
}
    