var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);

// Filter Event
filter.addEventListener('keyup', filterItems);

// ADD item
function addItem(e){
    e.preventDefault();
    
    // Get input value
    var newItem = document.getElementById('item').value;
    var itemDescription = document.getElementById('description').value;
    var mybr = document.createElement('br');

    var myObj = {
        newItem: newItem,
        itemDescription: itemDescription
    };

    localStorage.setItem(myObj.newItem,JSON.stringify(myObj));
    
    
    

    // Create new li element
    var li = document.createElement('li');
    //Add class
    li.className = 'list-group-item';
    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));
    li.appendChild(mybr);
    // adding description with items
    li.appendChild(document.createTextNode(" " + itemDescription));

    // create delete button li
    var deleteButton = document.createElement('button');
    var editBtn = document.createElement('button');

    // Add classes to deleteButton
    deleteButton.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-light btn-sm float-right edit';

    //append text node
    deleteButton.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('EDIT'));

    //append button to li
    li.appendChild(deleteButton);
    li.appendChild(editBtn);

    itemList.appendChild(li);

    form.reset();
    
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




// filter items
function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // get lis
    var items = itemList.getElementsByTagName('li');
    // convert to array
    Array.from(items).forEach(function(item) {
        var itemName = item.firstChild.textContent;
        var des = item.firstChild.nextSibling.textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || des.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';

        }else{
            item.style.display = 'none';
        }
        
    });
}