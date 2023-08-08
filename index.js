// const header = document.querySelector("#main-header");
// const title = document.querySelector(".title");
// const lists = document.getElementsByClassName("list-group-item");
// const listEl = document.getElementsByTagName("li");
// console.log(listEl);


// title.style.color="green";
// title.style.fontWeight="bold"
// header.style.borderBottom ="5px solid black";

// // get elements by classname assignment
// lists[2].style.backgroundColor="green";
// for(let list of lists){
//     list.style.fontWeight= "bold"
// }


// // get elements by tag name assignment
// for(let list of lists){
//     list.style.backgroundColor="#ccc"
// }

// for(let list of listEl){
//     list.style.backgroundColor ="skyblue"
// }


// query and query all selector assingment
const list2 = document.querySelector("li:nth-child(2)");
const list3 = document.querySelector("li:nth-child(3)");

// list2.style.backgroundColor="green" ;
// list3.style.display ="none"

const lists = document.querySelectorAll("li");
const oddLists = document.querySelectorAll("li:nth-child(odd)")
lists[1].style.color="green";

for(let list of oddLists){
    list.style.backgroundColor="green"
}

