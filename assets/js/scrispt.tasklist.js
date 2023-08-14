let i = 0;
let ColorCounter = 0;

function AddDiv() {
    i++

    class TaskClass{
        constructor(Task){
            this.Task = Task;
        }
        introduce(){
            document.getElementById("general").innerHTML += '<div class="newdivs" id="div'+i+'"><p>' + this.Task + '</p><div><button class="bnts" id="bnt'+ i +'" onclick="ChangeColor('+ i +')"><i class="fa-solid fa-check" style="color: #ffffff;"></i></button><button class="bnts" onclick="remove('+ i +')" id="thash'+ i +'"><i class="fa-solid fa-trash" style="color: #ffffff;"></i></button></div></div>';
        }
    }
       
const Task1 = new TaskClass(document.getElementById("Task").value);


if (document.getElementById("Task").value != "") {
    Task1.introduce();
}
}


function ChangeColor(id) {
    ColorCounter++
    document.getElementById("bnt" + id).style.background = 'Green';
    if (ColorCounter > 1) {
        ColorCounter = 0;
        document.getElementById("bnt" + id).style.background = '#18181b';
    }
}

function remove(id) {
    document.getElementById("div" + id).style.display = "none";
}