var x1 = document.querySelectorAll('.n1');
x1[0].classList.remove('btn-outline-info');// xoa class trong the chua class n1
x1[0].classList.remove('btn'); 
x1[0].classList.add('btn'); 
x1[0].classList.add('btn-block'); // them class vao the
x1[0].classList.add('btn-warning');

var x2 = document.querySelectorAll('.n2');
x2[0].classList.toggle('btn-outline-danger');// neu co class btn-outline-danger thi se xoa di
x1[0].classList.toggle('btn-outline-danger');// neu khong co class btn-outline-danger thi them vao