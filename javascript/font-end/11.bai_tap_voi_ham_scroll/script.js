document.addEventListener("DOMContentLoaded",function(){
    // bat su kien cuon chuot
    var trangthai = false; // false la trang thai twuoc do chua co class nholai
    // lay ve menu
    var doituongmenu = document.querySelector(".menu");
    window.addEventListener("scroll",function(){
        if(this.window.pageYOffset > 100){
            if(trangthai == false){ 
                doituongmenu.classList.add("nholai");
                trangthai = true;// class nho lai da co
            }
        }else{
            if(trangthai == true){ 
                doituongmenu.classList.remove("nholai");
                trangthai = false;// class nholai da bi xoa
            }
        }
    })
});