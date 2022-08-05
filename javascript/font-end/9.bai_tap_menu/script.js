document.addEventListener("DOMContentLoaded",function(){
    // khai bao cac bien can dung
    var nut = document.querySelector(".nut");
    var menutrai = document.querySelector(".menutrai");
    var den = document.querySelector(".den");
    var khoito = document.querySelector(".noidungto");
    var mautrang = document.querySelector(".mautrang");
    // khi click vao nut push
    nut.onclick = function(){
        menutrai.classList.toggle("vetrai");
        den.classList.add("len");
        //khoito.classList.add("dichphai");
        mautrang.classList.add("trangquay");
    }
    den.onclick = function(){
        menutrai.classList.toggle("vetrai");
        den.classList.remove('len');
        //khoito.classList.remove('dichphai');
        mautrang.classList.remove("trangquay");
    }
},false);