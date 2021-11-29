let workersData = [
    {
        name: 'Abdul Hadi',
        Age: 5,
        WorkPlace: 'Darul Madina',
    },
    {
        name: 'Huzefa',
        Age: 5,
        WorkPlace: 'Bahria Town School',
    },
    {
        name: 'Mustafa Raza',
        Age: 3,
        WorkPlace: 'Darul Madina-II',
    },
    {
        name: 'Maria',
        Age: 2,
        WorkPlace: 'Bahria Town Play Land',
    }
    
];

class DataTabel {
    constructor(data, elementId) {
       this.data = data;
       this.elementId = elementId;
       this.renderTable();

    }
    
    renderTable () {
        let container = document.getElementById(this.elementId);
        container.innerHTML = '';
        this.mainTable = document.createElement('table');
        this.mainTable.classList.add('table', 'table-striped', 'table-hover')
        container.appendChild(this.mainTable);

        this.renderThead();
        this.renderTbody();
        this.renderTr();
    }

    renderThead () {
        this.tHead = document.createElement('thead');
        this.tHead.classList.add('text-center');
        this.mainTable.appendChild(this.tHead);
    }

    renderTbody () {
        this.tBody = document.createElement('tbody');
        this.mainTable.appendChild(this.tBody);
    }

    renderTr () {
        this.data.forEach((worker, index) => {
            this.tablerow = document.createElement('tr');
            this.tHead.appendChild(this.tablerow);
            this.tBody.appendChild(this.tablerow);


            if(index === 0) {
                for(let key in worker) {
                    console.log(`${key}: ${worker[key]}`);
                    this.tableHeadings = document.createElement('th');
                    this.tableHeadings.innerText = key.toUpperCase();
                    this.tHead.appendChild(this.tableHeadings);
                }
            }
            for(let value in worker) {
                console.log(`${value}: ${worker}`);
                this.tData = document.createElement('td');
                this.tData.innerText = worker[value];
                this.tablerow.appendChild(this.tData);
            }
                this.buttonTd = document.createElement('td');
                this.deleteButton = document.createElement('button');
                this.deleteButton.classList.add('btn','btn-info');
                this.deleteButton.innerText = 'Delete';
                this.buttonTd.appendChild(this.deleteButton);
                this.tablerow.appendChild(this.buttonTd);

                this.deleteButton.onclick = () => {
                    workersData.splice(index, 1);
                    this.renderTable();
                    
                }

                this.editButtonTd = document.createElement('td');
                this.editButton = document.createElement('button');
                this.editButton.classList.add('btn', 'btn-warning');
                this.editButton.innerText = 'Edit Button';
                this.editButtonTd.appendChild(this.editButton);
                this.tablerow.appendChild(this.editButtonTd);
        });
    }
}


let dataTabel = new DataTabel(workersData, 'workersId');
dataTabel.buttonTd;
