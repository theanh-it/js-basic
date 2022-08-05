document.addEventListener("DOMContentLoaded",function(){
    var tg = document.getElementsByClassName('tamgiac');
    var tamgiac = tg[0];
    var danhsach = document.getElementsByClassName('danhsach');
    var danhsach = danhsach[0];
    tamgiac.onclick = function(){
        // tamgiac.style.color = 'white'; // cach khac
        tamgiac.classList.toggle('tamgiactrang');
        danhsach.classList.toggle('ra');
    }
},false);