/**
 *
 * Created by Administrator on 2017/4/14.
 */
// alert('hello');
// var box = document.getElementById('box');
// box.style.color='red';
// box.style.background = 'black';
// var box1 = document.getElementById('box1');
// console.log(box1.innerHTML="hello word");
// var text = document.getElementById('text');
// console.log(text.innerHTML='yellow');
// var text1 = document.getElementsByTagName('input')[2].value='yellow';

// function a() {
//     var box = document.getElementById('box').innerHTML='thanks';
//     // alert('thanks');
// }
var btn = document.getElementById('btn'),
    number = document.getElementById('number'),
    addBtn = document.getElementById('addBtn'),
    unit_price = document.getElementById('unit_price').innerHTML,
    total_price = document.getElementById('total_price');
addBtn.onclick=function () {
        var num = ++number.value;
        total_price.innerHTML=(num*unit_price).toFixed(2);

}
btn.onclick = function () {
    var num = number.value;
    if (num<=1) {

    }else{
        num  = --number.value;
    }
    total_price.innerHTML=(num*unit_price).toFixed(2);
}




