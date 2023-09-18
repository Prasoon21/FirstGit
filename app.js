//TRAVERSING tHE DOM

var itemList = document.querySelector('#items');

//parentNode property

// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes

//console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor='pink';

// //firstChild

// console.log(itemList.firstChild);
// //firstElementChild

// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'dhol';

//lastChild

// console.log(itemList.lastChild);
// //lastElementChild

// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'dhol';

// nextSibling
// console.log(itemList.nextSibling);
// // nextElementSibling
// console.log(itemList.nextElementSibling);

//previousSibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'green';

//createElement

//create a div
var newDiv = document.createElement('div');
var newDiv2 = document.createElement('divi')

//add class
newDiv.className = 'hello';
newDiv2.className = 'byeee';
//add id
newDiv.id = 'helll1';

//add attribute
newDiv.setAttribute('title', 'hello div');

//create text node
var newDivText = document.createTextNode('hello jimmy');
var newDiv2Text = document.createTextNode('to kaise hai aap');

//add text to div
newDiv.appendChild(newDivText);
newDiv2.appendChild(newDiv2Text);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
var kardiya = document.querySelector('ul .list-group-item');
var liii = document.querySelector('ul li');

console.log(newDiv2);

newDiv.style.fontSize = '30px';

container.insertBefore(newDiv, h1);
kardiya.insertBefore(newDiv2, liii);







