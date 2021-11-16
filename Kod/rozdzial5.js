var wop1 = 0;

var postac = document.getElementById('postac');
var y = 0;
var x = 0;
var pz = 100;

var wiwerna = document.getElementById('wiwerna');
var xw = -80;
var yw = 520;

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
        if (y >= 200) {

            var zaklecie = document.getElementById('czar');
            var rzut = document.getElementById('rzut');
            zaklecie.style.opacity = '0%';
            rzut.style.opacity = '0%';
            
            postac.style.backgroundImage = "url('ogien.png')"
            postac.style.backgroundSize = 'contain';
            postac.style.width = '75px';
            postac.style.height = '100px';
            var p = document.getElementById('p');
            p.style.visibility = 'hidden';
            postac.style.top = '200px'
            
            var izp = setInterval(function(){
            
                    if(pz > 0)
                        {
                            pz--;
                            postac.style.opacity = pz + '%';
                        }
                    else
                        {
                            clearInterval(izp, 10);
                        }
                
            }, 10);
            
            y=200;
            

            //var wop1 = 0;
            var iwiwerna1 = setInterval(function () {

                if (wop1 < 100) {
                    wop1++;
                    wiwerna.style.opacity = wop1 + '%';


                } else {
                    clearInterval(iwiwerna1, 1);
                }
            });
            
            

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

        if(x>445)
            {
                x=445;
            }

    } else {
        console.log('Wcisnąłeś inny klawisz niż klawisz ruchu');
    }

});


document.getElementById('rzut').addEventListener('click', function () {

    var czar = document.getElementById('czar');
    var zaklecie = czar.value;

    if (zaklecie === 'Homenum Revelio' || zaklecie === 'homenum revelio' || zaklecie === 'Homenum revelio' || zaklecie === 'homenum Revelio') {

        var wiwerna = document.getElementById('wiwerna');

        wiwerna.style.border = '3px solid #e681f7';
        wiwerna.style.boxShadow = '0px 0px 15px 5px #d703fc';
        wiwerna.style.borderRadius = '300px';
        wiwerna.style.backgroundColor = '#681b75';


        var wop = 0;
        var wy = 520;

        var iwiwerna = setInterval(function () {

            if (wop < 100) {
                wop++;
                wy--;
                wiwerna.style.opacity = wop + '%';
                wiwerna.style.top = wy + 'px';

            } else if (wop === 100) {
                wiwerna.style.border = 'none';
                wiwerna.style.boxShadow = 'none';
                wiwerna.style.backgroundColor = 'transparent';
                wiwerna.style.borderRadius = '0px';

            } else {
                clearInterval(iwiwerna, 1);
            }

        }, 1);


        var wr = 0;

        var iwiwerna2 = setInterval(function () {

            if (wr < 40) {
                wr++;
                wiwerna.style.left = wr + 'px';
            } else if (wy >= 20) {
                wy--;
                wiwerna.style.top = wy + 'px';

                if (wy === 20) {
                    var ogienop = 100;
                    p.style.visibility = 'hidden';
                    postac.style.width = '75px';
                    postac.style.height = '100px';
                    postac.style.backgroundSize = 'contain';
                    postac.style.backgroundImage = "url('ogien.png')"
                    postac.style.left = '0px';
                    postac.style.right = '0px';
                    var powrot = document.getElementById('powrot');
                    powrot.style.boxShadow = '0px 0px 3px 5px red';
                    powrot.style.color = 'red';

                    var iogien = setInterval(function () {

                        if (ogienop > 0) {
                            ogienop--;

                            postac.style.opacity = ogienop + '%';
                        } else {
                            clearInterval(iogien, 10);
                        }

                    }, 10);



                }

            } else {
                clearInterval(iwiwerna2, 0);
            }

        }, 0);

    }

    if (zaklecie === 'Avada Kedavra' || zaklecie === 'avada kedavra' || zaklecie === 'Avada kedavra' || zaklecie === 'avada Kedavra') {

        
        var zaklecie = document.getElementById('czar');
        var rzut = document.getElementById('rzut');
        zaklecie.style.opacity = '0%';
        rzut.style.opacity = '0%';
        
        var wiwerna = document.getElementById('wiwerna');

        wiwerna.style.border = '3px solid #05a11c';
        wiwerna.style.boxShadow = '0px 0px 15px 5px #128022';
        wiwerna.style.borderRadius = '300px';
        wiwerna.style.backgroundColor = '#12cc2e';


        var wop = 0;
        var wy = 520;

        var iwiwerna = setInterval(function () {

            if (wop < 100) {
                wop++;
                wy--;
                wiwerna.style.opacity = wop + '%';
                wiwerna.style.top = wy + 'px';

            } else if (wop === 100) {
                wiwerna.style.border = 'none';
                wiwerna.style.boxShadow = 'none';
                wiwerna.style.backgroundColor = 'transparent';
                wiwerna.style.borderRadius = '0px';

            } else {
                clearInterval(iwiwerna, 1);
            }

        }, 1);


        var wr = 0;

        var iwiwerna2 = setInterval(function () {

            if (wr < 40) {
                wr++;
                wiwerna.style.left = wr + 'px';
            } else if (wy >= 20) {
                wy--;
                wiwerna.style.top = wy + 'px';

                if (wy === 20) {
                    var ogienop = 100;
                    p.style.visibility = 'hidden';
                    postac.style.width = '75px';
                    postac.style.height = '100px';
                    postac.style.backgroundSize = 'contain';
                    postac.style.backgroundImage = "url('ogien.png')"
                    postac.style.left = '0px';
                    postac.style.right = '0px';
                    var powrot = document.getElementById('powrot');
                    powrot.style.boxShadow = '0px 0px 3px 5px red';
                    powrot.style.color = 'red';

                    var iogien = setInterval(function () {

                        if (ogienop > 0) {
                            ogienop--;

                            postac.style.opacity = ogienop + '%';
                        } else {
                            clearInterval(iogien, 10);
                        }

                    }, 10);



                }

            } else {
                clearInterval(iwiwerna2, 0);
            }

        }, 0);

    }

    if (zaklecie === 'Bombarda Maxima' || zaklecie === 'bombarda maxima' || zaklecie === 'bombarda Maxima' || zaklecie === 'Bombarda maxima') {

        var zaklecie = document.getElementById('czar');
        var rzut = document.getElementById('rzut');
        zaklecie.style.opacity = '0%';
        rzut.style.opacity = '0%';
        
        var wiwerna = document.getElementById('wiwerna');

        wiwerna.style.border = '3px solid #ab0f0f';
        wiwerna.style.boxShadow = '0px 0px 15px 5px #7d0909';
        wiwerna.style.borderRadius = '300px';
        wiwerna.style.backgroundColor = '#ed0909';


        var wop = 0;
        var wy = 520;

        var iwiwerna = setInterval(function () {

            if (wop < 100) {
                wop++;
                wy--;
                wiwerna.style.opacity = wop + '%';
                wiwerna.style.top = wy + 'px';

            } else if (wop === 100) {
                wiwerna.style.border = 'none';
                wiwerna.style.boxShadow = 'none';
                wiwerna.style.backgroundColor = 'transparent';
                wiwerna.style.borderRadius = '0px';

            } else {
                clearInterval(iwiwerna, 1);
            }

        }, 1);


        var wr = 0;

        var iwiwerna2 = setInterval(function () {

            if (wr < 40) {
                wr++;
                wiwerna.style.left = wr + 'px';
            } else if (wy >= 20) {
                wy--;
                wiwerna.style.top = wy + 'px';

                if (wy === 20) {
                    var ogienop = 100;
                    p.style.visibility = 'hidden';
                    postac.style.width = '75px';
                    postac.style.height = '100px';
                    postac.style.backgroundSize = 'contain';
                    postac.style.backgroundImage = "url('ogien.png')"
                    postac.style.left = '0px';
                    postac.style.right = '0px';
                    var powrot = document.getElementById('powrot');
                    powrot.style.boxShadow = '0px 0px 3px 5px red';
                    powrot.style.color = 'red';

                    var iogien = setInterval(function () {

                        if (ogienop > 0) {
                            ogienop--;

                            postac.style.opacity = ogienop + '%';
                        } else {
                            clearInterval(iogien, 10);
                        }

                    }, 10);



                }

            } else {
                clearInterval(iwiwerna2, 0);
            }

        }, 0);

    }

    if (zaklecie === 'Imperio' || zaklecie === 'imperio') {

        
        var zaklecie = document.getElementById('czar');
        var rzut = document.getElementById('rzut');
        zaklecie.style.display = 'none';
        rzut.style.display = 'none';
        
        var wiwerna = document.getElementById('wiwerna');
        var miejsce = document.getElementById('miejsce');
        miejsce.style.visibility = 'hidden';
        var strzalka = document.getElementById('strzalka');
        strzalka.style.visibility = 'hidden';

        wiwerna.style.border = '3px solid #3e3efa';
        wiwerna.style.boxShadow = '0px 0px 15px 5px #0d0dd4';
        wiwerna.style.borderRadius = '300px';
        wiwerna.style.backgroundColor = '#03fbff';


        var wop = 0;

        var iwiwerna = setInterval(function () {

            if (wop < 100) {
                wop++;
                wy--;
                wiwerna.style.opacity = wop + '%';
                wiwerna.style.top = wy + 'px';
            } else {
                clearInterval(iwiwerna, 1);
            }

        }, 1);


        document.addEventListener('keypress', function (i) {
            //x = -80
            //y = 520
            var klawisz = i.key;

            if (klawisz === 'i') {
                yw = yw - 15;
                wiwerna.style.top = yw + 'px';

                if (yw <= 10) {
                    var dalej = document.querySelector('#menu a');
                    dalej.style.visibility = 'visible';
                    dalej.style.color = 'black';
                    dalej.style.backgroundColor = '#1fdbdb';
                    dalej.style.border = '3px solid #1f64db';
                    dalej.style.boxShadow = '0px 0px 3px 3px #528df2'
                    
                    
                }

            } else if (klawisz === 'k') {
                yw = yw + 15;
                wiwerna.style.top = yw + 'px';
                console.log(y);
            } else if (klawisz === 'j') {
                xw = xw - 15;
                wiwerna.style.left = xw + 'px';
            } else if (klawisz === 'l') {
                xw = xw + 15;
                wiwerna.style.left = xw + 'px';

            } else {
                console.log('Kierujesz teraz wiwerną');
            }

        });

    } else {
        wiwerna.style.opacity = '0%';
    }

});

document.getElementById('px').addEventListener('click', function(){
    
        var podpowiedz = document.getElementById('podpowiedz');
        podpowiedz.style.display = 'block';
    
});
