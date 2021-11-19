//1st: i created a Array of Object named EmployeesData//

let employeesData = [
    {
        fullName: 'Shehmir Hussain',
        surname: 'Khanzada',
        designation: 'UI Developer',
        address: 'Premnager Tando Allahyar'
    },
    {
        fullName: 'Muhmmad Furqan',
        surname: 'Khanzada',
        designation: 'Senior Full Stack Developer',
        address: 'Bahria Town Karachi',
    },
    {
        fullName: 'Ali Khan',
        surname: 'Gabool',
        designation: 'Front End Developer',
        address: 'Karachi',
    }
];

    //i cretaed a function renderEmployeeTable with two parameters 1: items & 2: elementID//
let renderEmployeeTable = (items, elementsId) => {


    //2nd i get Main Container Table ID & stored in a Variable named mainContainer//

const mainContainer = document.getElementById(elementsId)
    mainContainer.innerHTML = '';

    //3rd i creat Table emplement & its tHEad & tBody and appended it as mentioned//

const table = document.createElement('table')
table.classList.add('table', 'table-striped', 'table-hover')
mainContainer.appendChild(table)

let tableHead = document.createElement('thead')
table.appendChild(tableHead)

let tableBody = document.createElement('tbody')
table.appendChild(tableBody)

//4th i used forEach loop to loop over array named employeesData in above created Table//

items.forEach((employee, indexCount) => {
    let tablerow = document.createElement('tr');
    tableHead.appendChild(tablerow);
    tableBody.appendChild(tablerow);

//5th i set condition if index === 0 than give value in tHead by For In loop from above array of object//

    if(indexCount === 0) {
        for(let key in employee) {
            console.log(`${key}: ${employee[key]}`)
            let tableHeading = document.createElement('th')
            tableHeading.innerText = key.toUpperCase();
            tableHead.appendChild(tableHeading);
        }
    }

//6th i again used For In loop to get Values from above array & append it to table row//

    for(const value in employee) {
        console.log(`${value}: ${employee}`)
        let tableTd = document.createElement('td');
        tableTd.innerText = employee[value];
        tablerow.appendChild(tableTd);
    }

//7th i add Delete Button & assign it Onclick function to remove row for now//

    let deleteButtonTd = document.createElement('td');
        let deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger');
        deleteButton.innerText = 'Delete';
        deleteButtonTd.appendChild(deleteButton);
        tablerow.appendChild(deleteButtonTd);

        deleteButton.onclick = () => {
           tableBody.removeChild(tablerow);
        }

//8th i add a Edit Button Creat TD & then Button & then apply Classis to Button and at the end i append button into td & then apped td into table Row//

    let editButtonTd = document.createElement('td')
        let editButton = document.createElement('button')
        editButton.classList.add('btn', 'btn-success')
        editButton.innerText = 'Edit';
        editButtonTd.appendChild(editButton);
        tablerow.appendChild(editButtonTd);

        editButton.onclick = () => {
            
            document.getElementById('fullName').value = employee.fullName;
            document.getElementById('surname').value = employee.surname;
            document.getElementById('designation').value = employee.designation;
            document.getElementById('address').value = employee.address;
            document.getElementById('submit').innerText = 'Update';

            document.getElementById('hiddenIndex').value = indexCount;
            tableBody.appendChild(tablerow);
            renderEmployeeTable(employeesData, 'employeesTable');
        }
    })
}
            renderEmployeeTable(employeesData, 'employeesTable');

//9th i get id of employeesForm and add eventlistner 'submit' and get values from input fields and push them into above employees Data array//

let employeesForm = document.getElementById('employeesForm');

    employeesForm.addEventListener('submit', (event) => {

        event.preventDefault();

        let fullName = document.getElementById('fullName').value
        let surname = document.getElementById('surname').value
        let designation = document.getElementById('designation').value
        let address = document.getElementById('address').value
        let indexStrength = document.getElementById('hiddenIndex').value

        let formItems = {fullName, surname, designation, address};
        console.log(formItems);

        if(indexStrength) {
            let updatedEmployees = employeesData.map((employee, index) => {

                if (indexStrength == index) {
                    employee.fullName = fullName;
                    employee.surname = surname;
                    employee.designation = designation;
                    employee.address = address;
                }
                return employee;
            })
            renderEmployeeTable(updatedEmployees, 'employeesTable');
        } else {
//10th when submit button clicked the Data in input fields will push into array and our function will show updated array in table//
        employeesData.push(formItems);
        renderEmployeeTable(employeesData, 'employeesTable');
        }
    })