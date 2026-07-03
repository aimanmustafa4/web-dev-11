console.log("API TESTING");
let button = document.querySelector("#mainbutton");
button.addEventListener("click" , ()=>{

    let xhr = new XMLHttpRequest();
    const method = "GET";
    const apiKey = "b365a2f8a0834f58b8baaef613f541e1";
    const apiEndpoint = `https://newsapi.org/v2/everything?q=tesla&from=2026-06-03&sortBy=publishedAt&apiKey=${apiKey}`;

    xhr.open(method , apiEndpoint);
    xhr.onprogress=()=>{
        console.log("data is in progress");
        
    };

    xhr.send();
})