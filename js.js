const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

b1.addEventListener('click',but1);
b2.addEventListener('click',but2);
b3.addEventListener('click',but3);

function but1(){
    b1.parentNode.removeChild(b1);
}

function but2(){
    b2.style.display = "none";
}

function but3(){
    b3.style.display = "none";
}

