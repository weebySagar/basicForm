const header = document.querySelector("#main-header");
const title = document.querySelector(".title");
const lists = document.getElementsByClassName("list-group-item");


title.style.color="green";
title.style.fontWeight="bold"
header.style.borderBottom ="5px solid black";

// get elements by classname assignment
lists[2].style.backgroundColor="green";
for(let list of lists){
    list.style.fontWeight= "bold"
}
