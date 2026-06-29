console.log(window);
console.log(document);
// old way
// let oneHead = document.getElementsByClassName("heading");
// oneHead[0].innerHTML = "Document Object Model";
// console.log(oneHead);

// let button = document.getElementById("btn-1");
// button.innerHTML = "button to click";
// console.log(button);


// new way 

let firstHead = document.querySelector(".heading");
firstHead.innerHTML= "DOM";
console.log(firstHead);

