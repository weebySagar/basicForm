const myForm = document.querySelector("#myForm");
const usersList = document.querySelector("#usersList");
const editButton= document.querySelectorAll('.edit');
const deleteButton = document.querySelector('.delete')

myForm.addEventListener("submit",submitForm);
usersList.addEventListener('click',deleteUser);
usersList.addEventListener('click',editUser)


// for loading users at the beginning
document.addEventListener('DOMContentLoaded',fetchData)


//  for adding users in the crud crud when the website loaded
function submitForm(event){

    event.preventDefault();
    const name= event.target.name.value;
    const email = event.target.email.value;
    const phone =event.target.phone.value;

    if(!name || !email || !phone){
        alert("please enter all fields")
    }
    else{
       const obj={
        name,
        email,
        phone
       }

    //    api function to add users
       postData(obj);

        event.target.name.value=""
        event.target.email.value=""
        event.target.phone.value=""

    }
    


}

// for creating list of users
function createList(data){
    const li = document.createElement("li");
    li.className='list-group-item';


    const editBtn = document.createElement('button');
    editBtn.innerText="Edit";
    editBtn.className='btn btn-success mx-2 btn-sm float-end edit';
    

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.className='btn btn-danger btn-sm float-end delete'
    li.appendChild(document.createTextNode(`${data.name}  `));
    li.appendChild(document.createTextNode(data.email));
    li.appendChild(document.createTextNode(`  ${data.phone}`));

    li.appendChild(deleteBtn)
    li.appendChild(editBtn);
    usersList.appendChild(li);
}


// for deleting users
function deleteUser(e){
if(e.target.classList.contains('delete')){
    const li = e.target.parentElement;
    
    const email = li.childNodes[1].textContent;
    
    localStorage.removeItem(email);
    usersList.removeChild(li)
   
}
}


// for editing users
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


// default url 
const baseUrl="https://crudcrud.com/api/7e1e72ff5d794cbbbb93f68e300378d1/userdata";

// for fetching users from crud crud
async function fetchData(){
try {
    const {data} = await axios.get(baseUrl);
    for(let i=0;i<data.length;i++){
        // 
        createList(data[i])
    }
} catch (error) {
    
}
}


// this is api for adding users to crud crud
async function postData(obj){
    try {
        const {data}= await axios.post(baseUrl,obj);
        createList(data)
    } catch (error) {
        

    }
}

