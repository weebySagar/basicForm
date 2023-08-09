const myForm = document.querySelector("#myForm");
const usersList = document.querySelector("#usersList");
const editButton= document.querySelectorAll('.edit');
const deleteButton = document.querySelector('.delete')

myForm.addEventListener("submit",submitForm);
usersList.addEventListener('click',deleteUser);
usersList.addEventListener('click',editUser)



function submitForm(event){

    event.preventDefault();
    const name= event.target.name.value;
    const email = event.target.email.value;
    const phone =event.target.phone.value;

    if(!name || !email || !phone){
        alert("please enter all fields")
    }
    else{
        const li = document.createElement("li");
        li.className='list-group-item';


        const editBtn = document.createElement('button');
        editBtn.innerText="Edit";
        editBtn.className='btn btn-success mx-2 btn-sm float-end edit';
        

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.className='btn btn-danger btn-sm float-end delete'
        li.appendChild(document.createTextNode(`${name}  `));
        li.appendChild(document.createTextNode(email));
        li.appendChild(document.createTextNode(`  ${phone}`));

        li.appendChild(deleteBtn)
        li.appendChild(editBtn);
        usersList.appendChild(li);



        const user ={name,email,phone}
        localStorage.setItem(email,JSON.stringify(user));

       
        event.target.name.value=""
        event.target.email.value=""
        event.target.phone.value=""

    }
    


}


function deleteUser(e){
if(e.target.classList.contains('delete')){
    const li = e.target.parentElement;
    
    const email = li.childNodes[1].textContent;
    
    localStorage.removeItem(email);
    usersList.removeChild(li)
   
}
}

function editUser(e){
    if(e.target.classList.contains('edit')){
        const li = e.target.parentElement;
        myForm.name.value= li.childNodes[0].textContent.trim();
        myForm.email.value= li.childNodes[1].textContent.trim();
        myForm.phone.value= li.childNodes[2].textContent.trim();
        const email=li.childNodes[1].textContent.trim();
        localStorage.removeItem(email);
    usersList.removeChild(li)

    }

}

