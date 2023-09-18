//EXAMINE THE DOCUMENT OBJECT

//console.dir(document);
// console.log(document.URL);
// console.log(document.title);

// //document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.querySelectorAll);
// console.log(document.forms[0]);
// console.log(document.links);

// console.log(document.images);


//GET ELEMENT BY ID
//console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');

//console.log(headerTitle);
// headerTitle.textContent = 'Hello Brother';
// headerTitle.innerText = 'Bonjour';
// headerTitle.innerHTML = '<h3>Hellopepe</h3>';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'bye bye';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// items[2].style.backgroundColor = 'green';

// for(var i=0;i<items.length;i++){
//     items[i].style.fontWeight = 'bold';
// }

//GETELEMENTSBYTAGNAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'bye bye';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// li[2].style.backgroundColor = 'green';

// for(var i=0;i<li.length;i++){
//     li[i].style.fontWeight = 'bold';
// }

// var li = document.getElementsByClassName('new-list');

// console.log(li);
// li[0].style.backgroundColor = 'blue';

var li = document.getElementsByTagName('li');

console.log(li);
for(var j=0;j<li.length;j++){
    li[j].style.backgroundColor = 'blue';
}



// QUERYSELECTOR

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'hello world';



