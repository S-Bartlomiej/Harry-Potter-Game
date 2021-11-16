var postac = document.getElementById('postac');
var wilkolak = document.getElementById('wilkolak');
var y = 0;
var x = 0;


document.addEventListener('keypress', function (e) {

    var klawisz = e.key;

    if (klawisz === 'w') {
        y = y - 5;
        postac.style.top = y + 'px';
    } else if (klawisz === 's') {
        y = y + 5;
        postac.style.top = y + 'px';
        console.log(y);
        if (y >= 185) {
            var wilkolak = document.getElementById('wilkolak');
            wilkolak.style.backgroundImage = "url('wilkolak.png')";
            var r = document.getElementById('czar');
            var rz = document.getElementById('rzut');
            r.style.visibility = 'hidden';
            rz.style.visibility = 'hidden';
            document.getElementById('powrot');
            powrot.style.boxShadow = '0px 0px 15px 5px red';
            powrot.style.color = 'red';
        }

        if (y >= 245) {
            postac.style.visibility = 'hidden';
        }

    } else if (klawisz === 'a') {
        x = x - 5;
        postac.style.left = x + 'px';
    } else if (klawisz === 'd') {
        x = x + 5;
        postac.style.left = x + 'px';


    } else {
        console.log('Wcisnąłeś inny klawisz niż klawisz ruchu');
    }

});

var wx = 150;
var wx1 = -90;

var iwilkolak = setInterval(function () {

    if (wx > -90) {
        wx--;
        wilkolak.style.left = wx + 'px';
    } else if (wx1 < 150) {
        wx1++;
        wilkolak.style.left = wx1 + 'px';
    } else {
        wx = 150;
        wx1 = -90;
    }

}, 1);


//czary

document.getElementById('rzut').addEventListener('click', function () {
    var czar = document.getElementById('czar');
    var zaklecie = czar.value;

    if (zaklecie === 'Homenum Revelio' || zaklecie === 'homenum revelio' || zaklecie === 'Homenum revelio' || zaklecie === 'homenum Revelio') {

        wilkolak.style.backgroundImage = "url('wilkolak.png')";
        clearInterval(iwilkolak, 1);
        
        var dalej = document.querySelector('#menu a');
        dalej.style.visibility = 'visible';
        dalej.style.backgroundColor = '#e005f0';
        dalej.style.border = '3px solid #7a0a82';
        dalej.style.boxShadow = '0px 0px 15px 5px #e942f5';

        wilkolak.style.border = '3px solid #e681f7';
        wilkolak.style.boxShadow = '0px 0px 15px 5px #d703fc';
        wilkolak.style.borderRadius = '100px';
        wilkolak.style.backgroundColor = '#681b75';
        wilkolak.style.top = '550px';
        wilkolak.style.left = '300px';

        var strzalka = document.getElementById('strzalka');
        strzalka.style.visibility = 'hidden';
    } else {
        wilkolak.style.display = 'block';

    }

});

document.getElementById('px').addEventListener('click', function () {

    var podpowiedz = document.getElementById('podpowiedz');
    podpowiedz.style.display = 'block';

});
