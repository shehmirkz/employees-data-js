
// window.onload = () => {
//     document.querySelector('#user-info').addEventListener('click', recieveData);
// }
// function recieveData() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(responce => console.log(responce))
// }

// console.log(DataTabel);

let onlineData = fetch('https://jsonplaceholder.typicode.com/users');
console.log(onlineData);
onlineData.then(response => {
    return response.name, response.email, response.phone.json();
}).then(users => {
    
    console.log(users);

    let userTable = new DataTabel(users, 'user-id');
})

// let onlineTable = fetch('https://jsonplaceholder.typicode.com/users');

// onlineTable.then(resp => {
//     return resp.json();
// }).then(user => {
//     console.log(user);

//     let newUser = new DataTabel(user, 'new-id');
// })




