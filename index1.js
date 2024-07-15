let act=[]
let cot=[]
let at = []
function addTask(){
    var ta = document.getElementById("Tasks");
    var u = ta.value;
    if(u !== ""){  
        at.push(u);
        act.push(u);
        ta.value = "";
        var e = document.getElementById("content");
        e.innerHTML = "";
        for(var i = 0; i < act.length; i++){
            var deleteButton = '<button onclick="deleteTask('+i+')">Delete</button>';
            e.innerHTML += (i+1) + ': ' + at[i] + ' ' + deleteButton + '<br>';
        }
    }
}
function deleteTask(index){
    var deletedTask = act[index];
    var deletedIndex = act.indexOf(deletedTask); 
    if(deletedIndex !== -1){
        act.splice(deletedIndex, 1); 
    }
    cot.push(deletedTask); 
    var e = document.getElementById("content");
    e.innerHTML = "";
    for(var i = 0; i < act.length; i++){
        var deleteButton = '<button onclick="deleteTask('+i+')">Delete</button>';
        e.innerHTML += (i+1) + ': ' + act[i] + ' ' + deleteButton + '<br>';
    }
}
function dispAlltask(){
    var e= document.getElementById("content")
    e.innerHTML=""
    for(var i=0;i<at.length;i++){
        e.innerHTML+=(i+1)+':'+' '+at[i]+'<br>'
    }
}
function dispActivetask(){
    var e= document.getElementById("content")
    e.innerHTML="Double click the delete button twice for the first time"+'<br>'
    var deleteButton = '<button onclick="deleteTask('+i+')">Delete</button>';
    for(var i=0;i<act.length;i++){
        e.innerHTML+=(i+1)+':'+' '+act[i]+deleteButton+'<br>'
    }
}
function dispCompletedtask(){
    var e= document.getElementById("content")
    e.innerHTML=""
    for(var i=0;i<cot.length;i++){
        e.innerHTML+=(i+1)+':'+' '+cot[i]+'<br>'
    }
}
function dispTaskcount(){
    var e= document.getElementById("content")
    e.innerHTML=""
    e.innerHTML=at.length
}