function greetings(userName, userAge) {
    console.log(`Hy i am  ${userName}.I am ${userAge} years old`);
}

greetings("Asad", 12);



function multiply(firstNum , secondNum){
    console.log(firstNum*secondNum);
    
}

multiply(9,23)






















function add(numOne, numTwo) {

    console.log(numOne + numTwo);

}

add(5, 7);

function getTable(a) {
    for (let table = 1; table <= 20; table++) {
        let product = (a * table);
        console.log(`${a} X ${table} = ${product}`);
    }
}
getTable(9);