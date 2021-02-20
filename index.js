const btn = document.querySelector('.btn-1');
const para = document.querySelector('.p');
const btn2 = document.querySelector('.btn-2');
const btn3 = document.querySelector('.btn-3');
const text = document.querySelector('.p');

btn.addEventListener('click',()=>{
    para.innerHTML='Hey, you just clicked Button-1'
})

btn2.addEventListener('click',()=>{
    document.body.style.backgroundColor='grey';
});

btn3.addEventListener('click',()=>{
    text.style.backgroundColor='blue';
    text.style.color='white';
})