"use strict";

window.onload=function(){
    fetchUser();
}

let table = document.getElementById("table");
function fetchUser(){
    fetch(`http://jsonplaceholder.typicode.com/users`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            for(let i=0; i<data.length; i++) {
                let row = table.insertRow(-1);
                let cell1 = row.insertCell(0);
                let cell2 = row.insertCell(1);
                let cell3 = row.insertCell(2);
                let cell4 = row.insertCell(3);
                let cell5 = row.insertCell(4);
                let cell6 = row.insertCell(5)
                cell1.innerHTML = data[i].id;
                cell2.innerHTML = data[i].name;
                cell3.innerHTML = data[i].email;
                cell4.innerHTML = data[i].phone;
                cell5.innerHTML = data[i].username;
                cell6.innerHTML = data[i].website;


                }
            });
        }