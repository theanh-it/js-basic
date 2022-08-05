function tinhtong(x1,x2){
    var tong = x1 + x2;
    console.log(" tong cua 2 so la:" + tong);
    return tong;
}
tinhtong(1,4);

// anonymous function == ham khong ten | uu diem : tiec kiem bo nho
var z = function (x,y){
    return (x+y)/2;
}
console.log(z(2,3));

// closure function == function con co the su dung dc bien trong function cha
function chao(){
    var ten = "vietnd";
    var thongbao = function(){
        return "cafe khong ha " + ten;
    }
    ten = ten + " - dep trai"
    return thongbao();
}
console.log(chao());
