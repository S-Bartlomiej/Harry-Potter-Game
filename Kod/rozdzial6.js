var postac = document.getElementById('postac');
var y = 0;
var x = 0;
var pfop = 0;
var feniks = document.getElementById('feniks');
var postacop = 100;
var fod = 0;

document.addEventListener('keypress', function (e) {

    var klawisz = e.key;


    if (klawisz === 'w') {
        y = y - 15;
        postac.style.top = y + 'px';

        if (y < 0) {
            y = 0;
        }


    } else if (klawisz === 's') {
        y = y + 15;
        postac.style.top = y + 'px';
        if(y>625)
            {
                y=625;
            }

        if (y > 140) {

            var pojawienie = setInterval(function () {
                if (pfop < 100) {
                    pfop++;
                    feniks.style.opacity = pfop + '%';
                }
            }, 10);
        } 
        
        else {
            clearInterval(pojawienie, 10);
        }

        if (y >= 165) {
            postac.style.backgroundImage = "url('ogien.png')";
            postac.style.backgroundSize = 'cover';
            postac.style.width = '200px';
            postac.style.height = '120px';
            document.getElementById('czar');
            document.getElementById('rzut');
            czar.style.visibility = 'hidden';
            rzut.style.visibility = 'hidden';
            y = 165;

            var ipostac = setInterval(function () {

                if (postacop > 0) {
                    postacop--;
                    postac.style.opacity = postacop + '%';
                    console.log(postacop);
                } else {
                    clearInterval(ipostac, 15);
                }

                var powrot = document.getElementById('powrot');
                powrot.style.boxShadow = '0px 0px 3px 5px red';
                powrot.style.color = 'red';

            }, 15);

        } else {
            postac.style.visibility = 'visible';
        }

    } else if (klawisz === 'a') {
        x = x - 15;
        postac.style.left = x + 'px';
        if (x <= -35) {
            x = -35;
        }

    } else if (klawisz === 'd') {
        x = x + 15;
        postac.style.left = x + 'px';

       if(x>300)
            {
                x=300;
            }



    } else {
        console.log('Wcisnąłeś inny klawisz niż klawisz ruchu');
    }

});

document.getElementById('rzut').addEventListener('click', function () {

    var czar = document.getElementById('czar');
    var zaklecie = czar.value;
    var fop = 100;

    if (zaklecie === 'Aguamenti' || zaklecie === 'aguamenti') {

        var feniks = document.getElementById('feniks');
        feniks.style.backgroundColor = 'blue';
        feniks.style.border = '3px solid cyan';
        feniks.style.borderRadius = '2000px';
        feniks.style.boxShadow = '0px 0px 15px 5px #405ded';

        var ifeniks = setInterval(function () {

            if (fop > 0) {
                fop--;
                feniks.style.opacity = fop + '%';


            } else if (fop < 50) {
                feniks.style.border = 'none';
                feniks.style.boxShadow = 'none';
                feniks.style.backgroundColor = 'transparent';
                feniks.style.borderRadius = '0px';

            } else {
                clearInterval(ifeniks, 1);
            }

        }, 10);

        var dalej = document.querySelector('#menu a');
        dalej.style.visibility = 'visible';
        dalej.style.backgroundColor = 'blue';
        dalej.style.border = '3px solid cyan';
        dalej.style.boxShadow = '0px 0px 15px 5px green';

    } else if (zaklecie === 'Bombarda Maxima' || zaklecie === 'bombarda maxima' || zaklecie === 'Bombarda maxima' || zaklecie === 'bombarda Maxima') {

        var feniks = document.getElementById('feniks');
        feniks.style.backgroundColor = '#e82315';
        feniks.style.border = '3px solid #ad270c';
        feniks.style.borderRadius = '2000px';
        feniks.style.boxShadow = '0px 0px 15px 5px ##fc1e1e';

        var zaklecie = document.getElementById('czar');
        var rzut = document.getElementById('rzut');
        zaklecie.style.opacity = '0%';
        rzut.style.opacity = '0%';

        postac.style.backgroundImage = "url('ogien.png')";
        postac.style.backgroundSize = 'cover';
        postac.style.width = '200px';
        postac.style.height = '120px';
        document.getElementById('czar');
        document.getElementById('rzut');
        czar.style.visibility = 'hidden';
        rzut.style.visibility = 'hidden';
        var ipostac = setInterval(function () {

            if (postacop > 0) {
                postacop--;
                postac.style.opacity = postacop + '%';
                console.log(postacop);
            } else {
                clearInterval(ipostac, 15);
            }

            var powrot = document.getElementById('powrot');
            powrot.style.boxShadow = '0px 0px 3px 5px red';
            powrot.style.color = 'red';

        }, 15);

        var ifeniks2 = setInterval(function () {

            if (fod < 100) {
                fod++;
                feniks.style.opacity = fod + '%';


            } else if (fod > 30) {
                feniks.style.border = 'none';
                feniks.style.boxShadow = 'none';
                feniks.style.backgroundColor = 'transparent';
                feniks.style.borderRadius = '0px';

            } else {
                clearInterval(ifeniks2, 10);
            }

        }, 10);

    } else if (zaklecie === 'Avada Kedavra' || zaklecie === 'avada kedavra' || zaklecie === 'Avada kedavra' || zaklecie === 'avada Kedavra') {

        var feniks = document.getElementById('feniks');
        feniks.style.backgroundColor = '#10b03b';
        feniks.style.border = '3px solid #0a7326';
        feniks.style.borderRadius = '2000px';
        feniks.style.boxShadow = '0px 0px 15px 5px #25f55c';

        var zaklecie = document.getElementById('czar');
        var rzut = document.getElementById('rzut');
        zaklecie.style.opacity = '0%';
        rzut.style.opacity = '0%';

        postac.style.backgroundImage = "url('ogien.png')";
        postac.style.backgroundSize = 'cover';
        postac.style.width = '200px';
        postac.style.height = '120px';
        document.getElementById('czar');
        document.getElementById('rzut');
        czar.style.visibility = 'hidden';
        rzut.style.visibility = 'hidden';
        var ipostac = setInterval(function () {

            if (postacop > 0) {
                postacop--;
                postac.style.opacity = postacop + '%';
                console.log(postacop);
            } else {
                clearInterval(ipostac, 15);
            }

            var powrot = document.getElementById('powrot');
            powrot.style.boxShadow = '0px 0px 3px 5px red';
            powrot.style.color = 'red';

        }, 15);

        var ifeniks3 = setInterval(function () {

            if (fod < 100) {
                fod++;
                feniks.style.opacity = fod + '%';


            } else if (fod > 30) {
                feniks.style.border = 'none';
                feniks.style.boxShadow = 'none';
                feniks.style.backgroundColor = 'transparent';
                feniks.style.borderRadius = '0px';

            } else {
                clearInterval(ifeniks3, 10);
            }

        }, 10);

    } else {
        feniks.style.display = 'block';
    }
});


document.getElementById('px').addEventListener('click', function(){
    
        var podpowiedz = document.getElementById('podpowiedz');
        podpowiedz.style.display = 'block';
    
});






