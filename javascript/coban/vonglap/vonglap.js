// Vong lap for duyet mang
console.log("Vong lap for duyet mang");
var sv = ['anh','bay','bach'];
for(var i = 0; i < sv.length; i++){
    console.log(sv[i]);
}

// Vong lap duyet object
console.log("---------------------------------")
console.log("Vong lap duyet object");
var hocvien = {
    hoten : "theanh",
    tuoi : "23",
    lop : "15tclc1"
}
for(var x in hocvien){
    console.log(hocvien[x]);
}