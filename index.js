const header = document.querySelector("#main-header");
const title = document.querySelector(".title");
const lists = document.getElementsByClassName("list-group-item");
const listEl = document.getElementsByTagName("li");
console.log(listEl);


title.style.color="green";
title.style.fontWeight="bold"
header.style.borderBottom ="5px solid black";

// get elements by classname assignment
lists[2].style.backgroundColor="green";
for(let list of lists){
    list.style.fontWeight= "bold"
}


// get elements by tag name assignment
for(let list of lists){
    list.style.backgroundColor="#ccc"
}

for(let list of listEl){
    list.style.backgroundColor ="skyblue"
}
