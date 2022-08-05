// cach dung document.getElementsByTagName()
var x1 = document.getElementsByTagName("h2");// lay toan bo the h1
console.log(x1);
console.log(x1[0]);
console.log(x1[0].innerHTML);
console.log(x1[0].innerText);
console.log(x1[0].textContent);
// sua thong tin trong the html
x1[0].innerHTML="<span>hello</span>";
x1[1].innerText="<span>hello</span>";
x1[2].textContent="<span>hello</span>";

var x2 = document.getElementsByTagName("p");
for( var i=0; i < x2.length; i++){
    x2[i].innerHTML="success p !";
}

// Cach dung document.getElementById
var x3 = document.getElementById("test_id");
console.log(x3);
console.log(x3.innerHTML);
console.log(x3.innerText);
console.log(x3.textContent);

// Cach dung document.getElementsByClassName()

var x4 = document.getElementsByClassName("title");
console.log(x4);
for(var i=0; i<x4.length; i++){
    console.log(x4[i].innerHTML);
}

// dung document.querySelector() // lay phan tu dau tien
var x5 = document.querySelector('.title'); //neu la id thi sudung dau # phia truoc con class thi dung dau .
x5.onclick=function(){
    alert("success");
}
console.log(x5);

// dung document.querySelectorAll() lay toan bo phan tu
var x6 = document.querySelectorAll('.title');
console.log(x6);

var x7 = document.querySelectorAll('.title span');// lay tat cac cac the span trong class title
console.log(x7);

// lay data-<thuoctinh>
var x8 = document.querySelectorAll('[data-title]');
console.log(x8);