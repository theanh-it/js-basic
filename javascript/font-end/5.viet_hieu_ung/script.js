document.addEventListener("DOMContentLoaded",function(){
    var nut1 = document.getElementById('n1');
    var nut2 = document.getElementById('n2');
    var nut3 = document.getElementById('n3');
    var khoi = document.getElementsByClassName('card');
    //goi su kien click
    nut1.onclick = function(){
        khoi[0].classList.toggle('diphai');
    }
    nut2.onclick = function(){
        khoi[1].classList.toggle('animation');
    }
    var trangthai=0;
    // xu ly 2 chieu
    nut3.onclick = function(){
        console.log(trangthai);
        if(trangthai==0){
            khoi[2].classList.remove('animation2');
            khoi[2].classList.add('animation');
            trangthai=1;
        }else{
            khoi[2].classList.remove('animation');
            khoi[2].classList.add('animation2');
            trangthai=0;
        }
    }
},false);