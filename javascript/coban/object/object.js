var dongho = {
    hangsx : 'casio',
    mau : 'den',
    giagoc : 50000,
    sale : 30,
    gioitinh : 'name',
    giaban : function(){
        return this.giagoc * (1 - this.sale / 100);
    }
}
//Cach 1 vs thuoc tinh
console.log(dongho.hangsx);
//Cach 2 vs thuoc tinh
console.log( dongho['hangsx'] );

//Cach 1 vs hanh dong
console.log(dongho.giaban());
//Cach 2 vs hanh dong
console.log( dongho['giaban']() );