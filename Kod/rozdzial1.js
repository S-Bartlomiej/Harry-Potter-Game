 var dalej = document.getElementById('dalej');

var r = document.getElementById('czar');
var rz = document.getElementById('rzut');


//pajak1
var pajak1 = document.getElementById('pajak');
var p1y = 350;
var p1ya = -70;

//pajak2
var pajak2 = document.getElementById('pajak2');
var p2x = 60;
var p2xa = -50;
var p2y = 180;
var p2ya = -73;
var p2o = 100;

//postac
var postac = document.getElementById('postac');

var ipajak = setInterval(function () {
    if (p1y > p1ya) {

        p1y--;
        pajak1.style.marginTop = p1y + 'px';


    } else if (p1y === p1ya) {
        postac.style.visibility = 'hidden';
        

    } else {
        clearInterval(ipajak, 60);
    }
}, 60);


var ipajak2 = setInterval(function () {
    if (p2x > p2xa) {

        p2x--;
        pajak2.style.marginLeft = p2x + 'px';


    } else if (p2y > p2ya) {
        p2y--;
        pajak2.style.marginTop = p2y + 'px';
        pajak2.style.backgroundImage = "url('Pająk3.png')";
        
    } else {
        clearInterval(ipajak2, 30);
        document.getElementById('powrot');
            powrot.style.boxShadow = '0px 0px 15px 5px red';
            powrot.style.color = 'red';
        pajak2.style.visibility = 'hidden';
        postac.style.visibility = 'hidden';
        if (postac.style.visibility = 'hidden') {
            r.style.visibility = 'hidden';
            rz.style.visibility = 'hidden';
        } else {
            r.style.display = 'block';
            rz.style.visibility = 'hidden';
        }


    }
}, 30);

document.getElementById('rzut').addEventListener('click', function () {
    var czar = document.getElementById('czar');
    var zaklecie = czar.value;


    if (zaklecie === 'Bombarda Maxima' || zaklecie === 'bombarda maxima' || zaklecie === 'Bombarda maxima' || zaklecie === 'bombarda Maxima') {

        clearInterval(ipajak, 60);
        clearInterval(ipajak2, 30);
        
        var podpowiedz = document.getElementById('podpowiedz');
        var p = document.getElementById('p');
        podpowiedz.style.display = 'none';
        p.style.display = 'none';

        pajak1.style.backgroundSize = 'contain';
        pajak1.style.backgroundImage = "url('Magia1.png')";
        pajak2.style.backgroundSize = 'contain';
        pajak2.style.backgroundImage = "url('Magia1.png')";

        var menu = document.getElementById('menu');
        menu.style.color = 'red';
        
        var przyciski = document.querySelector('#menu a');
        przyciski.style.color = '#990014';
        przyciski.style.backgroundColor = '#ff0022';
        przyciski.style.border = '3px solid #6b000e';
        przyciski.style.boxShadow = '0px 0px 5px 3px #c20202';
        
        r.style.visibility = 'hidden';
        rz.style.visibility = 'hidden';
        
        dalej.style.visibility = 'visible';

    }

    if (zaklecie === 'Avada Kedavra' || zaklecie === 'avada kedavra' || zaklecie === 'Avada kedavra' || zaklecie === 'avada Kedavra') {
        clearInterval(ipajak, 60);
        clearInterval(ipajak2, 30);
        
        var podpowiedz = document.getElementById('podpowiedz');
        var p = document.getElementById('p');
        podpowiedz.style.display = 'none';
        p.style.display = 'none';

        pajak1.style.backgroundSize = 'contain';
        pajak1.style.backgroundImage = "url('Magia1-1.png')";
        pajak2.style.backgroundSize = 'contain';
        pajak2.style.backgroundImage = "url('Magia1-1.png')";

        var menu = document.getElementById('menu');
        menu.style.color = 'green';
        var przyciski = document.querySelector('#menu a');
        przyciski.style.color = '#35700d';
        przyciski.style.backgroundColor = '#88fc3a';
        przyciski.style.border = '3px solid #8df542';
        przyciski.style.boxShadow = '0px 0px 5px 3px #50ad11';
        
        r.style.visibility = 'hidden';
        rz.style.visibility = 'hidden';
        
        dalej.style.visibility = 'visible';


        var znak = document.getElementById('znak');
        var znakl = 0;
        var iznak = setInterval(function () {

            if (znakl < 100) {
                znakl++;
                znak.style.opacity = znakl + '%';
            } else {
                clearInterval(iznak, 22);
            }

        }, 22);


    } else {
        pajak1.style.display = 'block';
        pajak2.style.display = 'block';
    }

});

document.getElementById('p').addEventListener('click', function(){
    
        var podpowiedz = document.getElementById('podpowiedz');
        podpowiedz.style.display = 'block';
    
});


