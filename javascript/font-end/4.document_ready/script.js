document.addEventListener("DOMContentLoaded",function(){
    var x1 = document.getElementById('n1');
    x1.onclick = function(){
        console.log('ban vua kich vao ' + x1);
        x1.classList.add('dixuong');
    }
},false);