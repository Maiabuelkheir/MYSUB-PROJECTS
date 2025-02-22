let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3= document.getElementById('mountains3');
let mountains4= document.getElementById('mountains4');
let river= document.getElementById('river');
let boat= document.getElementById('boat');
let Nouvil= document.querySelector('#Nouvil');


window.onscroll=function(){
    let value = scrollY;
    console.log(value)
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    Nouvil.style.fontSize = value + 'px';
    if(scrollY >= 67){
        Nouvil.style.fontSize = 67 + 'px';
        Nouvil.style.position = 'fixed';
        if(scrollY >=400){
            Nouvil.style.display= 'None'

        }
        else{
             Nouvil.style.display= 'block'
        }

        if(scrollY >=120){
            document.querySelector('.main').style.background='linear-gradient(#376281,#10001f)'
        }
        else{
            document.querySelector('.main').style.background= 'linear-gradient(#200016,#10001f)'
       }

    }
    
    
    
} 
    















// if (value >= maxScroll) {
//     window.scrollTo(0, maxScroll);
// }

// // تثبيت حجم النص وعدم اختفائه بعد حد معين
// if (scrollY >= 67) {
//     Nouvil.style.fontSize = '67px';
//     Nouvil.style.position = 'fixed';

//     if (scrollY >= 478) {
//         Nouvil.style.display = 'none';
//     } else {
//         Nouvil.style.display = 'block';
//     }

//     if (scrollY >= 120) {
//         document.querySelector('.main').style.background = 'linear-gradient(#376281,#10001f)';
//     }
// }
