// Loops
// console.log("For Loop");

// for(let index=1; index  <= 5; index++){
//     console.log(index);   
// }

// console.log("While Loop");

// let number2 = 5;
// while(number2<=25){
//     console.log(number2);
//     number2++;  
// }

// console.log("Do-while Loop");

// let number3 = 2;
// do{
//     console.log(number3);
//     number3++;
// }while(number3 <= 12);


// table generate
let userNumber = prompt("enter any number to generate a table");

for(let table=1; table<=20; table++){
    let product = (userNumber*table);
    // console.log(userNumber,"x",table,"=",product);
    console.log(`${userNumber} X ${table} = ${product}`);
    
    
}