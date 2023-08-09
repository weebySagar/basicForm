const form = document.getElementById('addForm');
const items = document.getElementById('items');
const filter = document.getElementById('filter');

form.addEventListener('submit',addItem);
items.addEventListener('click',deleteItem);
filter.addEventListener('keyup',filterItem)


// Add item to the list

function addItem(e){
    e.preventDefault();
    const item = document.getElementById('item').value;
    const description = document.getElementById('description').value;
    const li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(item));
    li.appendChild(document.createTextNode(`  ${description}`));


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
    document.getElementById('item').value="";
    document.getElementById('description').value=""
}


// Delete item from the list
function deleteItem(e){
    if(e.target.classList.contains('delete')){
        const li = e.target.parentElement;
        items.removeChild(li)
    }
}


// filter item from the list
function filterItem(e){
    const searchedItem = e.target.value.toLowerCase();

    const items = document.getElementsByTagName('li');
    Array.from(items).forEach((item)=>{
        
        const itemName= item.firstChild.textContent.toLowerCase() ;
        const desription = item.childNodes[1].textContent.toLowerCase()
        if(itemName.indexOf(searchedItem)!=-1 || desription.indexOf(searchedItem)!=-1){
            item.style.display='block'
        }
        else{
            item.style.display='none'
        }
    })
}