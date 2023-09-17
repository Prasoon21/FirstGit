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

var items = document.getElementsByClassName('title');
console.log(items);
// console.log(items[1]);
// items[1].textContent = 'bye bye';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
items[0].style.fontWeight = 'bold';
items[0].style.color = 'green';

