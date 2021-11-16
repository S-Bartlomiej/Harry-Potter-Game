function ww() {
    var wartosc = document.getElementById('przycisk').value;
    if (wartosc == "Knuję coś niedobrego") {
        document.getElementById("przycisk").value = "Koniec psot";
        przycisk.style.width = '180px';
        p();
    } else {
        document.getElementById("przycisk").value = "Knuję coś niedobrego";
        przycisk.style.width = '310px';
        x();
    }
}

function p() {
    var x = document.getElementById("srodek");
    if (x.style.visibility = "hidden") {
        x.style.display = "block",
            x.style.visibility = "visible",
            x.style.opacity = "1";

    } else {
        x.style.display = "none";
    }
}

function x() {
    var x = document.getElementById("srodek");
    if (x.style.visibility = "visible") {
        x.style.display = "block",
            x.style.visibility = "hidden",
            x.style.opacity = "0";

    } else {
        x.style.display = "none";
    }
}

var harry = document.getElementById('harry');
var albus = document.getElementById('albus');
var ron = document.getElementById('ron');
var hermiona = document.getElementById('hermiona');


//harry
var hx = 0;
var xh = 0;
var hy = 650;
var yh = 500;
var xhh = -20;
var yhh = 350;
var xhhh = -60;

setInterval(function ()

    {

        if (hx < 5) {
            hx++;
            harry.style.left = hx + 'px';
        } else if (hy > 500) {
            hy--;
            harry.style.top = hy + 'px';
        } else if (xh > -20) {
            xh--;
            harry.style.left = xh + 'px';
        } else if (yh > 350) {
            yh--;
            harry.style.top = yh + 'px';
        } else if (xhh > -60) {
            xhh--;
            harry.style.left = xhh + 'px';
        } else if (yhh < 650) {
            yhh++;
            harry.style.top = yhh + 'px';
        } else if (xhhh < 0) {
            xhhh++;
            harry.style.left = xhhh + 'px';
        } else {

            hx = 0;
            xh = 0;
            hy = 650;
            yh = 500;
            xhh = -20;
            yhh = 350;
            xhhh = -60;
        }

    }, 25);

//hermiona

var Hy = 370;
var Hyy = 220;

setInterval(function () {
    if (Hy > 220) {
        Hy--;
        hermiona.style.top = Hy + 'px';

    } else if (Hyy < 370) {
        Hyy++;
        hermiona.style.top = Hyy + 'px';
    } else {

        Hy = 370;
        Hyy = 220;
    }

}, 25);

//Dumbledore

var dx = 0;
var dy = 210;
var dxx = -30;
var dyy = 150;
var dxxx = -65;

setInterval(function () {
    if (dx > -30) {
        dx--;
        albus.style.left = dx + 'px';
    } else if (dy > 150) {
        dy--;
        albus.style.top = dy + 'px';
    } else if (dxx > -65) {
        dxx--;
        albus.style.left = dxx + 'px';
    } else if (dyy < 210) {
        dyy++;
        albus.style.top = dyy + 'px';
    } else if (dxxx < 0) {
        dxxx++;
        albus.style.left = dxxx + 'px';

    } else {
        dx = 0;
        dy = 210;
        dxx = -30;
        dyy = 150;
        dxxx = -65;
    }

}, 25);

// Ron

var rx = 0;
var ry = -20;
var rxx = -90;
var ryy = 215;
var rxxx = 30;
var ryyy = 140;
var rxxxx = -90;

setInterval(function () {

    if (rx > -90) {
        rx--;
        ron.style.left = rx + 'px';

    } else if (ry < 215) {
        ry++;
        ron.style.top = ry + 'px';
    } else if (rxx < 30) {
        rxx++;
        ron.style.left = rxx + 'px';
    } else if (ryy > 140) {
        ryy--;
        ron.style.top = ryy + 'px';
    } else if (rxxx > -90) {
        rxxx--;
        ron.style.left = rxxx + 'px';
    } else if (ryyy > -20) {
        ryyy--;
        ron.style.top = ryyy + 'px';
    } else if (rxxxx < 0) {
        rxxxx++;
        ron.style.left = rxxxx + 'px';
    } else {
        rx = 0;
        ry = -20;
        rxx = -90;
        ryy = 215;
        rxxx = 30;
        ryyy = 140;
        rxxxx = -90;
    }

}, 25);
