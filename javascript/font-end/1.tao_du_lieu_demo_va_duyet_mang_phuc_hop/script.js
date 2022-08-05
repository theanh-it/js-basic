var mangdl = [
    {
        anh:"https://upload.wikimedia.org/wikipedia/commons/9/9c/GNOME_Web_logo.png",
        ten:"nguyen the anh",
        ngoidungcm:"test 123123"
    },
    {
        anh:"https://i.stack.imgur.com/IA7uX.png",
        ten:"nguyen the",
        ngoidungcm:"test 123123"
    }
];
var content="";
for(var i=0; i < mangdl.length; i++){
    content+='<div>'+
                '<div>'+
                    '<img src="'+mangdl[i].anh+'"/>'+
                '</div>'+
                '<div>'+
                    '<h2>'+ mangdl[i].ten +'</h2>'+
                    '<p>'+ mangdl[i].ngoidungcm +'</p>'+
                '</div>'+
            '</div>';
}
document.getElementById("item").innerHTML=content;