var oz = 0;
var zakazane = document.getElementById('zakazane');
var avada = document.getElementById('avada');
var krucio = document.getElementById('krucio');
var imperio = document.getElementById('imperio');
document.getElementById('rzut').addEventListener('click', function () {
    
    
    
                var czar = document.getElementById('czar');
                var zaklecie = czar.value;
                  
    
                if(zaklecie === 'Aperacjum' && oz < 100 || zaklecie === 'aperacjum' && oz < 100)
   {
            
            var interwal1 = setInterval(function(){
                oz++;
                avada.style.color = '#097d2c';
                imperio.style.color = '#3003fc';
                zakazane.style.opacity = oz + '%';
                document.getElementById('l').innerHTML = '';
                if(oz === 100)
                    {
                        clearInterval(interwal1, 10);
                    }
            }, 10);
   }

else
{
    
}
    
});



document.getElementById('p').addEventListener('click', function(){
    
        var podpowiedz = document.getElementById('podpowiedz');
        podpowiedz.style.display = 'block';
    
});


        