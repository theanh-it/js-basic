document.addEventListener("DOMContentLoaded",function(){
    var getPassword = document.getElementsByClassName('btn');
    console.log(getPassword);
    for(var i=0; i < getPassword.length; i++){
        getPassword[i].onclick = function(){
            var mk = this.getAttribute('data-matkhau');
            var thongtin = this.getAttribute('data-thongtin2');
            console.log(mk);
            console.log(thongtin);
        };
    }
},false);