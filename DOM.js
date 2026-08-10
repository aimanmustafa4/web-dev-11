console.log("DOCUMENT OBJECT MODEL ");
console.log(window);
console.log(document);

// Old way
// let firstHead = document.getElementsByClassName("title");
// firstHead[0].innerHTML="DOCUMENT OBJECT MODEL ";
// console.log(firstHead);

// let paragraph = document.getElementsByClassName("para");
// paragraph[0].innerHTML="DOM FOR WEB-DEV-11";
// console.log(paragraph);


// let btn = document.getElementById("myButton");
// btn.innerHTML = "LOGIN/SIGNUP";
// console.log(btn);

// New Way


let firstPara = document.querySelector(".para");
firstPara.innerHTML = "lorem ipsum constrectrator"
console.log(firstPara);

let btn = document.querySelectorAll("#myButton");
btn[0].innerHTML = "Login here";
console.log(btn);
