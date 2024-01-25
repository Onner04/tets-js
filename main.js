//  HTML DOM

//  có 3 thành phần 
/**
 * 1. Element
 * 2.attribute
 * 3. text
 */



//  document object

document.write('hello guys') ;    // ghi ra dòng text hello guys

// get element method

//  get id
var headingNode = document.getElementById('heading');   

console.log(headingNode) ;
 
// get class
var headingNode = document.getElementsByClassName('heading')
console.log(headingNode) ;
//  get tag
var headingNode = document.getElementsByTagName('h1') ;
console.log(headingNode) ;
  
// css selector

var headingNode = document.querySelector('.heading')
console.log(headingNode)

var headingNode = document.querySelector('.heading:nth-child(2)')  // lấy ra heading số 2=

var headingNode = document.querySelectorAll('heading')    // lấy tất cả các thẻ heading


var boxNote= document.querySelectorAll('.box-1 li') ;    // lấy ra thẻ li 
console.log(boxNote)
// công việc 1 sử dụng tới boxNote
// công việc 2 sử dụng tới các li element con của boxNote
var boxNote= document.querySelectorAll('.box-1');

console.log(boxNote.querySelectorAll('li')) ;
console.log(boxNote.querySelector('p'));





//  5 phương thức làm việc vs element

/**
 * getElementById  select các element
 * querySelector   select các element
 */

/**
 * getElêmntsByClassName  select thành array or HTML colection
 * querySelectorAll        select thành array or nodelist
 * getElêmntsByTagName      select thành array or HTML colection
 */



//  HTML colection

console.log(document.forms['form-1']) ;

// document.write

document.write('js')    // thực thi nội dung ngay trên code 









//  attribute node vs text node

// DOM attribute
var headingElement = document.querySelector('h1')
headingElement.title='heading' ;     // thêm attribute và các element

// cách 2 
headingElement.setAttribute('class','heading')



// lấy ra value
console.log(headingElement.getAttribute('class')) ;







//  innerText vs textContent Property


var headingElement= document.querySelector('.heading') ;
headingElement.innerText='new text'     // thay đổi nổi dung ở element h1   geter
headingElement.textContent='new text'     // thay đổi nổi dung ở element h1  seter

// innerText  hiển thị những nội dung thực trên màn hình 
//textContent  hiện thi tất cả nội dung trong code 






//  innerHTML    vs OuterHTML
var boxElement=document.querySelector('.box')
boxElement.innerHTML='<h1>heading</h1>'        // thêm thẻ h1 và đọc lệnh như html


var boxElement=document.querySelector('.box')
boxElement.innerHTML='<span>heading</span>'         // ghi đè lên class box








// node properties

var boxNote =  document.querySelector('.box')
console.log(boxNote)






//  DOM style
var boxElement=document.querySelector('.box');
  boxElement.style.width='100px' ;
  boxElement.style.height='200px';
  boxElement.style.backgroundColor='red';

//   cách 2                                   // css element qua js 
Object.assign(boxElement.style, {
    width: '100px',
    height:'200px',
    backgroundColor:'red'
})
// get thuộc tính css
console.log(boxElement.style.backgroundColor) ;







//  classList property
var boxElement=document.querySelector('.box') ;
console.log(boxElement.classList) ;


console.log(boxElement.classList.length)     //lấy độ dài class của element
console.log(boxElement.classList.value)       // lấy value nằm trong class


// add
var boxElement=document.querySelector('.box');
boxElement.classList.add('red');              // thêm class vào element
boxElement.classList.add('red','inbox')        // thêm nhiều class vào element


// contains
console.log(boxElement.classList.contains('red'))     // kiểm tra xem class có tồn tại trong elemnt hay không


// remove
boxElement.classList.remove('red')        //xóa class trong element


// toggle
boxElement.classList.toggle('red')   // kiểm tra nếu class có trong element thì sẽ xóa bỏ , nếu không có thì sẽ thêm class


setTimeout(() =>{
  boxElement.classList.remove('red') ;   // xóa bỏ class red trong vòng 3 giây
},3000);

setInterval(() =>{
  boxElement.classList.toggle('inbox')     // thêm hoặc xóa bỏ class inbox trong vòng 3 giây , có vòng lặp
},3000)






//  DOM event

//  attribute event
var h1Element= document.querySelector('h1');
h1Element.onclick=function(){
  console.log(Math.random());
}

var h1Element1=document.querySelectorAll('h1')
for(var i=0 ; i<h1Element1.length;++i ){
 h1Element1[i].onclick=function(e){
  console.log(e.target);
 }
}




// DOM events example

var inputElement=document.querySelector('input[type="text"]');
inputElement.onchange=function(e){
  console.log(e.target.value) ;          // lấy value của thẻ input với điều kiện số nhạp vào phải khác nhau 

}
inputElement.oninput=function(e){
  console.log(e.target.value) ;          // lấy value của thẻ input khi gõ đến đau lấy ra đến đấy 
             
}


var inputElement1=document.querySelector('input[type="chekbox"]');

inputElement1.onchange=function(e){       // lấy value có tích nút check hay ko
  console.log(e.target.checked);
}




var inputElement2=document.querySelector('select');
inputElement2.onchange=function(e){
  console.log(e.target.value);                    // lấy value của select       
}



var inputElement=document.querySelector('input[type="text"]');
inputElement.onkeydown=function(e){
  console.log(e.target.value);              // lấy value 
}





// preventDefault  and stoppropagation

// preventDafault

var aElement=document.querySelector('a');
for(var i=0 ; i<aElement.length ; ++i){
  aElement[i].onclick=function(e){
    if(!e.target.href.startsWith('http://f8.edu.vn'))     // nếu ko phải link f8 thì các link khác sẽ ko đc thực thi
    e.preventDefault() ;
  }
}



var ulElement=document.querySelector('ul')
ulElement.onmousedown=function(e){
  e.preventDefault();
}
ulElement.onclick=function(e){
  console.log(e.target);
}






// stoppropagation

document.querySelector('div').onclick=
function(){
  console.log('DIV')
}
document.querySelector('button').onclick=
function(e){
    e.stopPropagation() ;
  console.log('click me !')
}






// event listener

// dùng dom event
var btn = document.getElementById('btn');
btn.onclick=function(){
    // việc 1
    console.log(btn);
    //  việc 2                     // sử dụng dom event để thực hiện nhiều việc 
    alert('việc 3');

}

setTimeout(function(){
  btn.onclick=function(){
     // việc 1
     console.log(btn);           // thực hiện các việc sau 3s
     //  việc 2                   
     alert('việc 3');
 
  }
},3000);



btn.onclick=function(){
  // việc 1
  console.log(btn);
  //  việc 2                   
  alert('việc 3');

}
setTimeout(function(){
  btn.onclick=function(){}     // sau 3s không thực hiện các việc nữa 
},3000)






// dùng event listener

var btn=document.getElementById('btn') ;
btn.addEventListener('click',function(e){    // thực hiện các lệnh khi click
  console.log(Math.random());
});


function viec1(){

}
btn.addEventListener('click',viec1)
setTimeout(function(){
  btn.removeEventListener('click',viec1)     // sau 3s xóa đi event viec1
},3000)
