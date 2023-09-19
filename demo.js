var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// ADD item
function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;

    // Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // create delete button li
    var deleteButton = document.createElement('button');
    var editBtn = document.createElement('button');

    // Add classes to deleteButton
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-light btn-sm float-right edit';

    //append text node
    deleteButton.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('edit'));

    //append button to li
    li.appendChild(deleteButton);
    li.appendChild(editBtn);

    itemList.appendChild(li);
}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            var li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}