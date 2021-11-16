var napis = document.getElementById('napis');
var no = 0;

var inapis = setInterval(function(){
    
        if(no < 100)
            {
                no++;
                napis.style.opacity = no + '%';
                
            }
    
        else
        {
            clearInterval(inapis, 10);
        }
    
}, 10);

napis.style.color = 'red';
napis.style.border = '2px solid grey';
napis.style.boxShadow = '0px 0px 15px 5px red';

//zrobić wszędzie tak, żeby nie dało się wyjść poza mapę ale nie trać dużo czasu na to jak się nie da 
