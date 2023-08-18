class Id {
    constructor() {
        this.id = Id.generateId();
    }

    static generateId() {
        return Math.floor(Math.random() * 1000);
    }
}

class Task extends Id {
    constructor(name) {
        super();
        this.name = name;
        this.completed = false;
    }

    getName() {
        return this.name;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    send() {
        const taskInput = document.getElementById('Task');
        const texto = taskInput.value.trim();

        if (texto !== '') {
            const newTask = new Task(texto);
            this.tasks.push(newTask);

            this.introduce();
            taskInput.value = '';
        }
    }

    introduce() {
        const taskInput = document.getElementById('Task');
        const texto = taskInput.value.trim();
        const taskId = this.tasks[this.tasks.length - 1].id;

        document.getElementById("general").innerHTML += `
            <div class="newdivs" id="div${taskId}">
                <p id="text">${texto}</p>
                <div>
                    <button class="bnts" id="bnt${taskId}" onclick="completeTask(${taskId})">
                        <i class="fa-solid fa-check" style="color: #ffffff;"></i>
                    </button>
                    <button class="bnts" onclick="deleteTask(${taskId})" id="thash${taskId}">
                        <i class="fa-solid fa-trash" style="color: #ffffff;"></i>
                    </button>
                    <button onclick="changeButton(${taskId})" class="bnts"><i class="fa-solid fa-pencil" style="color: #ffffff;"></i></button>
                </div>
            </div>`;
    }

    deleteTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
        if (changeColor > 1) {
            this.tasks.splice(index, -1);
        }
    }

    editTask(id) {
        const index = this.tasks.findIndex(task => task.id === id);
        const taskInput = document.getElementById('Task');
        const newText = taskInput.value.trim();
        
        if (index !== -1 && newText !== '') {
            this.tasks[index].name = newText;
            this.introduce();
        }
    }

    completeTask(id) {
        const task = this.tasks.find(task => task.id === id);
        if (task) {
            task.completed = !task.completed;
        }
    }
}

const taskList = new TaskList();

function AddDiv() {
    taskList.send();
    console.log(taskList.tasks);
}
let changeColor = 0;
function completeTask(id) {
    taskList.completeTask(id);
    changeColor++
    if (changeColor == 1) {
        document.getElementById("bnt" + id).style.backgroundColor = "green";
    }if (changeColor > 1) {
        document.getElementById("bnt" + id).style.backgroundColor = "#18181b";
        changeColor = 0;
    }
    
}
function deleteTask(id) {
    taskList.deleteTask(id);
    document.getElementById("div" + id).style.display = "none";
}
function editTask(id) {
     document.getElementById("div" + id).style.display = "none";
    taskList.editTask(id);
    document.getElementById("edit").innerHTML = 'button onclick="AddDiv()" class="bnts1" id="add"><i class="fa-solid fa-plus" style="color: #ffffff;"></i></button>'
}

function changeButton(id) {
    document.getElementById("Task").value = document.getElementById("text").innerText; 
    document.getElementById("add").innerHTML = '<button class="bnts1" onclick="editTask('+id+')" id="edit"><i class="fa-solid fa-pencil" style="color: #ffffff;"></i></button>'
}