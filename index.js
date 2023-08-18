const myForm = document.querySelector("#myForm");
const usersList = document.querySelector("#usersList");
const editButton= document.querySelectorAll('.edit');
const deleteButton = document.querySelector('.delete')

myForm.addEventListener("submit",submitForm);
usersList.addEventListener('click',deleteUser);
usersList.addEventListener('click',editUser)


// for loading users at the beginning
document.addEventListener('DOMContentLoaded',fetchData)

const userObj={
    name:undefined,
    email:undefined,
    phone:undefined,
    id:undefined
   }
//  for adding users in the crud crud when the website loaded.
function submitForm(event){

    event.preventDefault();
    const name= event.target.name.value;
    const email = event.target.email.value;
    const phone =event.target.phone.value;

    if(!name || !email || !phone){
        alert("please enter all fields")
    }
    else{
      userObj.name=name;
      userObj.email=email;
      userObj.phone=phone;


    //    api function to add users
    if(userObj.id){
        editData(userObj.id,userObj)
    }else{
        postData(obj);

    }

        event.target.name.value=""
        event.target.email.value=""
        event.target.phone.value=""

    }
    


}

// for creating list of users
function createList(data){
    
    if(!data) return
    const li = document.createElement("li");
    li.className='list-group-item';
    li.setAttribute('id',data._id)


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
    

    for(let key in userObj){
        userObj[key]=undefined
    }
}


// for deleting users
function deleteUser(e){
if(e.target.classList.contains('delete')){
    const li = e.target.parentElement;
    const id= li.getAttribute('id');
   
    // api to delete the user
    deleteData(id,li)

    // const email = li.childNodes[1].textContent;
     // localStorage.removeItem(email);
    //  usersList.removeChild(li)
   
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
        // localStorage.removeItem(email);
        userObj.id=li.getAttribute('id')
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
    console.log(error);
}
}


// this is api for adding users to crud crud
async function postData(obj){
    try {
        const {data}= await axios.post(baseUrl,obj);
        createList(data)
    } catch (error) {
        
console.log(error);
    }
}


async function deleteData(id,li){
    try {
        await axios.delete(`${baseUrl}/${id}`);
        usersList.removeChild(li)
    } catch (error) {
        console.log();
    }
}

async function editData(id,obj){
    delete obj.id;
    try {
        await axios.put(`${baseUrl}/${id}`,obj);
       createList(userObj);
       console.log(userObj);
    } catch (error) {
        console.log(error);
    }
}

