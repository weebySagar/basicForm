const myForm = document.querySelector("#myForm");
const usersList = document.querySelector("#usersList");

myForm.addEventListener("submit",submitForm);
usersList.addEventListener('click',deleteUser)


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
        li.className='list-group-item'

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent='Delete';
        deleteBtn.className='btn btn-danger btn-sm float-end delete'
        li.appendChild(document.createTextNode(`${name}  `));
        li.appendChild(document.createTextNode(email));
        li.appendChild(document.createTextNode(`  ${phone}`));

        li.appendChild(deleteBtn)
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

