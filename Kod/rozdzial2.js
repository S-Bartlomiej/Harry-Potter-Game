var dalej = document.getElementById('dalej');
dalej.style.visibility = 'hidden';

var postac = document.getElementById('postac');
var y = 0;
var x = 0;

var r = document.getElementById('czar');
var rz = document.getElementById('rzut');



var chochlik1 = document.getElementById('chochlik1');
var ch1x = 200;
var ch1x1 = -40;
var ch1x2 = -120;
var ch1y = 525;
var ch1y1 = 250;

var chochlik2 = document.getElementById('chochlik2');
var ch2x = -230;
var ch2y = 150;
var ch2x1 = 110;
var ch2y1 = 20;



var ichochlik1 = setInterval(function () {

    if (ch1x > -40) {
        ch1x--;
        chochlik1.style.left = ch1x + 'px';
        var pl = chochlik1.style.pixelLeft;
    } else if (ch1y > 250) {
        ch1y--;
        chochlik1.style.top = ch1y + 'px';
    } else if (ch1x1 > -120) {
        ch1x1--;
        chochlik1.style.left = ch1x1 + 'px';
    } else if (ch1y1 < 525) {
        ch1y1++;
        chochlik1.style.top = ch1y1 + 'px';
    } else if (ch1x2 < 200) {
        ch1x2++;
        chochlik1.style.left = ch1x2 + 'px';
    } else {
        ch1x = 200;
        ch1x1 = -40;
        ch1x2 = -120;
        ch1y = 525;
        ch1y1 = 250;
    }

}, 1);

var ichochlik2 = setInterval(function () {

    if (ch2y > 20) {
        ch2y--;
        chochlik2.style.top = ch2y + 'px';
    } else if (ch2x < 110) {
        ch2x++;
        chochlik2.style.right = ch2x + 'px';
    } else if (ch2x1 > -230) {
        ch2x1--;
        chochlik2.style.right = ch2x1 + 'px';
    } else if (ch2y1 < 150) {
        ch2y1++;
        chochlik2.style.top = ch2y1 + 'px';
    } else {
        ch2x = -230;
        ch2y = 150;
        ch2x1 = 110;
        ch2y1 = 20;
    }

}, 1);

//czary

document.getElementById('rzut').addEventListener('click', function () {
    var czar = document.getElementById('czar');
    var zaklecie = czar.value;

    if (zaklecie === 'Bombarda Maxima' || zaklecie === 'bombarda maxima' || zaklecie === 'Bombarda maxima' || zaklecie === 'bombarda Maxima') {

        clearInterval(ichochlik1, 1);
        clearInterval(ichochlik2, 1);
        
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
        console.log('y: ' + y);
        if(y >= 460)
           {
               dalej.style.visibility = 'visible';
           }
        
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
        
        if(x >= 10)
           {
            miejsce.style.visibility = 'visible';
           }
        if(x>445)
            {
                x=445;
            }
        
    } else {
        console.log('Wcisnąłeś inny klawisz niż klawisz ruchu');
    }

});

        chochlik1.style.backgroundSize = 'contain';
        chochlik1.style.backgroundImage = "url('Magia1.png')";
        chochlik2.style.backgroundSize = 'contain';
        chochlik2.style.backgroundImage = "url('Magia1.png')";

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
        clearInterval(ichochlik1, 1);
        clearInterval(ichochlik2, 1);
        
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
        console.log('y: ' + y);
        if(y >= 460)
           {
               dalej.style.visibility = 'visible';
           }
        
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
        
        if(x >= 10)
           {
            miejsce.style.visibility = 'visible';
           }
        if(x>445)
            {
                x=445;
            }
        
    } else {
        console.log('Wcisnąłeś inny klawisz niż klawisz ruchu');
    }

});

        chochlik1.style.backgroundSize = 'contain';
        chochlik1.style.backgroundImage = "url('Magia1-1.png')";
        chochlik2.style.backgroundSize = 'contain';
        chochlik2.style.backgroundImage = "url('Magia1-1.png')";

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

    if (zaklecie === 'Lumos' || zaklecie === 'lumos') {
        postac.style.width = '100px';
        postac.style.height = '100px';
        postac.style.backgroundSize = 'cover';
        postac.style.backgroundImage = "url('swiatlo.png')";
    } else if (zaklecie === 'Nox' || zaklecie === 'nox') {
        postac.style.backgroundImage = 'none';

    } else {
        chochlik1.style.display = 'block';
        chochlik2.style.display = 'block';
    }

});

document.getElementById('px').addEventListener('click', function(){
    
        var podpowiedz = document.getElementById('podpowiedz');
        podpowiedz.style.display = 'block';
    
});

