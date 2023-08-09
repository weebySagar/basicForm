const form = document.getElementById('addForm');
const items = document.getElementById('items');

form.addEventListener('submit',addItem);
items.addEventListener('click',deleteItem);


// Add item to the list

function addItem(e){
    e.preventDefault();
    const item = document.getElementById('item').value;
    const li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(item));

    // delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className='btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('Delete'));
    li.appendChild(deleteBtn)
    
    // edit button
    const editBtn =document.createElement('button');
    editBtn.className='btn btn-success btn-sm float-right mx-2';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);


    items.appendChild(li);
    document.getElementById('item').value=""
}


// Delete item form the list


function deleteItem(e){
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        items.removeChild(li)
    }
}