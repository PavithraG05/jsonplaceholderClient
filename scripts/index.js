"use strict";

let element = document.querySelector("#todo");
let btn = document.getElementById("submitBtn");
btn.addEventListener("click",displayTodo);


function displayTodo(){
    let user_id = document.getElementById("userId").value;
    console.log(user_id);
    fetch(`http://jsonplaceholder.typicode.com/users/${user_id}`)
        .then(response => response.json())
        .then(data => {
            //let message = "User email: " + data.email;
            element.innerText = JSON.stringify(data); 
            console.log(data);
        });
}
