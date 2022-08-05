document.addEventListener("DOMContentLoaded",function(){
    // bat su kien khi nguoi dung scroll
    window.addEventListener("scroll",function(){
        console.log("dan cuon chuot");
        // vi tri khi cuon chuot
        console.log(window.pageYOffset);
    });
},false);