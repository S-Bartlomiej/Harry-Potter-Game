var dalej = document.getElementById('dalej');


var postac = document.getElementById('postac');
var y = 0;
var x = 0;

var r = document.getElementById('czar');
var rz = document.getElementById('rzut');

var dementor1 = document.getElementById('dementor1');
var d1x = 200;
var d1x1 = -40;
var d1x2 = -120;
var d1y = 625;
var d1y1 = 150;

var dementor2 = document.getElementById('dementor2');
var d2x = -260;
var d2y = 450;
var d2x1 = 80;
var d2y1 = 0;

var idementor1 = setInterval(function () {

    if (d1x > -40) {
        d1x--;
        dementor1.style.left = d1x + 'px';
    } else if (d1y > 150) {
        d1y--;
        dementor1.style.top = d1y + 'px';
    } else if (d1x1 > -120) {
        d1x1--;
        dementor1.style.left = d1x1 + 'px';
    } else if (d1y1 < 625) {
        d1y1++;
        dementor1.style.top = d1y1 + 'px';
    } else if (d1x2 < 200) {
        d1x2++;
        dementor1.style.left = d1x2 + 'px';
    } else {
        d1x = 200;
        d1x1 = -40;
        d1x2 = -120;
        d1y = 625;
        d1y1 = 150;
    }

}, 1);

var idementor2 = setInterval(function () {

    if (d2y > 0) {
        d2y--;
        dementor2.style.top = d2y + 'px';
    } else if (d2x < 80) {
        d2x++;
        dementor2.style.right = d2x + 'px';
    } else if (d2x1 > -260) {
        d2x1--;
        dementor2.style.right = d2x1 + 'px';
    } else if (d2y1 < 450) {
        d2y1++;
        dementor2.style.top = d2y1 + 'px';
    } else {
        d2x = -260;
        d2y = 450;
        d2x1 = 80;
        d2y1 = 0;
    }

}, 1);

//czary

document.getElementById('rzut').addEventListener('click', function () {
    var czar = document.getElementById('czar');
    var zaklecie = czar.value;

    if (zaklecie === 'Bombarda Maxima' || zaklecie === 'bombarda maxima' || zaklecie === 'Bombarda maxima' || zaklecie === 'bombarda Maxima') {
        
        var powrot = document.getElementById('powrot');
        powrot.style.boxShadow = '0px 0px 15px 5px red';
        powrot.style.color = 'red';
        
        dementor1.style.backgroundColor = 'red';
        dementor1.style.border = '3px solid #960e0e';
        dementor1.style.boxShadow = '0px 0px 5px 3px #f0483c';
        dementor1.style.borderRadius = '100px';
        dementor2.style.backgroundColor = 'red';
        dementor2.style.border = '3px solid #960e0e';
        dementor2.style.boxShadow = '0px 0px 5px 3px #f0483c';
        dementor2.style.borderRadius = '100px';
        
        var menu = document.getElementById('menu');
        menu.style.color = 'red';

        var przyciski = document.querySelector('#menu a');
        przyciski.style.color = '#990014';
        przyciski.style.backgroundColor = '#ff0022';
        przyciski.style.border = '3px solid #6b000e';
        przyciski.style.boxShadow = '0px 0px 5px 3px #c20202';

        r.style.visibility = 'hidden';
        rz.style.visibility = 'hidden';

        var miejsce = document.getElementById('miejsce');
        miejsce.style.backgroundColor = 'red';


    }

    if (zaklecie === 'Avada Kedavra' || zaklecie === 'avada kedavra' || zaklecie === 'Avada kedavra' || zaklecie === 'avada Kedavra') {

        var powrot = document.getElementById('powrot');
        powrot.style.boxShadow = '0px 0px 15px 5px red';
        powrot.style.color = 'red';
        
        dementor1.style.backgroundColor = 'yellowgreen';
        dementor1.style.border = '3px solid #green';
        dementor1.style.boxShadow = '0px 0px 5px 3px #149933';
        dementor1.style.borderRadius = '100px';
        dementor2.style.backgroundColor = 'yellowgreen';
        dementor2.style.border = '3px solid #green';
        dementor2.style.boxShadow = '0px 0px 5px 3px #149933';
        dementor2.style.borderRadius = '100px';

        var menu = document.getElementById('menu');
        menu.style.color = 'green';
        var przyciski = document.querySelector('#menu a');
        przyciski.style.color = '#35700d';
        przyciski.style.backgroundColor = '#88fc3a';
        przyciski.style.border = '3px solid #8df542';
        przyciski.style.boxShadow = '0px 0px 5px 3px #50ad11';

        r.style.visibility = 'hidden';
        rz.style.visibility = 'hidden';

        var miejsce = document.getElementById('miejsce');
        miejsce.style.backgroundColor = 'yellowgreen';

    }

    if (zaklecie === 'Expecto Patronum' || zaklecie === 'expecto patronum' || zaklecie === 'Expecto patronum' || zaklecie === 'expecto Patronum' || zaklecie === 'ExpectoPatronum' || zaklecie === 'expectopatronum') {
       
        r.style.visibility = 'hidden';
        rz.style.visibility = 'hidden';
        
        postac.style.width = '100px';
        postac.style.height = '100px';
        postac.style.backgroundSize = 'cover';
        postac.style.backgroundImage = "url('swiatlo.png')";

        document.addEventListener('keypress', function (e) {

    var klawisz = e.key;

    if (klawisz === 'w') {
        y = y - 5;
        postac.style.top = y + 'px';
        if (y < 0) {
            y = 0;
        }
    } else if (klawisz === 's') {
        y = y + 5;
        postac.style.top = y + 'px';
        if(y>625)
            {
                y=625;
            }
        
    } else if (klawisz === 'a') {
        x = x - 5;
        postac.style.left = x + 'px';
        if (x <= -35) {
            x = -35;
        }
    } else if (klawisz === 'd') {
        x = x + 5;
        postac.style.left = x + 'px';
        //375
        
        if(x > 370)
            {
                dalej.style.visibility = 'visible';
            }
        
        if(x>445)
            {
                x=445;
            }
        
    } else {
        console.log('Wcisnąłeś inny klawisz niż klawisz ruchu');
    }

});
        
        clearInterval(idementor1, 1);
        clearInterval(idementor2, 1);
        
        dementor1.style.border = '3px solid white';
        dementor1.style.boxShadow = '0px 0px 15px 5px white';
        dementor1.style.borderRadius = '100px';
        dementor1.style.backgroundColor = 'lightgray';
        dementor2.style.border = '3px solid white';
        dementor2.style.boxShadow = '0px 0px 15px 5px white';
        dementor2.style.borderRadius = '100px';
        dementor2.style.backgroundColor = 'lightgray';
        
        dementor1.style.backgroundImage = "url('Magia1.png'))";
        dementor2.style.backgroundImage = "url('Magia1.png'))";
        
        var miejsce = document.getElementById('miejsce');
        miejsce.style.visibility = 'visible';
        
        
    } else if (zaklecie === 'Nox' || zaklecie === 'nox') {
        postac.style.backgroundImage = 'none';

    } else {
        dementor1.style.display = 'block';
        dementor2.style.display = 'block';
    }

});

document.getElementById('px').addEventListener('click', function(){
    
        var podpowiedz = document.getElementById('podpowiedz');
        podpowiedz.style.display = 'block';
    
});
