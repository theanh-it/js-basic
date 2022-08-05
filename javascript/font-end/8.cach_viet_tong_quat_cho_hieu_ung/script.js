document.addEventListener("DOMContentLoaded",function(){
    //
    var nut = document.getElementsByClassName("dekich");
    var lists = document.getElementsByClassName('dehienthi')
    for(var i=0; i < nut.length; i++){
        nut[i].onclick = function(){
            var vitri_end = this.classList.length-1;
            var class_name = this.classList[vitri_end];
            if(class_name=='mautrang'){ // xu ly khi click lai chinh minh
                this.classList.remove('mautrang');// xoa kich hoat vao icon
                var dataList = this.getAttribute('data-list');
                document.querySelector(dataList).classList.remove('hienthi');// an danh sach vua kich hoat
            }else{
                for(var j=0; j < nut.length; j++){// tat toan bo icon vs danh sach duoc hien thi truoc do
                    nut[j].classList.remove("mautrang");
                    lists[j].classList.remove("hienthi");
                }
                this.classList.toggle("mautrang");
                var dataList = this.getAttribute("data-list");
                var list = document.querySelector(dataList);
                list.classList.toggle("hienthi");
            }
        }
    }
},false);