let task = document.querySelector("taskList");
let add = document.querySelector("addButton");
let input = document.querySelector("inputTask");
let tasks = document.querySelector("#tasks");
let img = document.querySelector("#img");



let tasksArr = JSON.parse(localStorage.getItem("tasks")) || [];


function displayTasks(){
    tasks.innerHTML="";
    if(tasksArr.length===0){
        img.style.display="block";
    }else{
        img.style.display="none";
        tasksArr.forEach((taskObj,index)=>{
            let list = document.createElement("div");
            list.className = "taskItem";

            let checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className="check";
            checkbox.checked =taskObj.completed;
            checkbox.style.marginRight="16px";
            checkbox.style.textDecoration="line-through";
            
            checkbox.addEventListener("change",()=>{
                tasksArr[index].completed= checkbox.checked;
                if(checkbox.checked){
                    taskSpan.style.textDecoration="line-through";
                }else{
                    taskSpan.style.textDecoration="none";
                }
                localStorage.setItem("tasks", JSON.stringify(tasksArr));
                
            });
            
            
            


            let taskSpan=document.createElement("span");
            taskSpan.className="text";
            taskSpan.textContent=taskObj.text;
            taskSpan.style.textDecoration = taskObj.completed ? "line-through" : "none";

            

            
            

            //X remove icon
            let removeIcon =document.createElement("i");
            removeIcon.className="fa-solid fa-xmark";
            removeIcon.style.cursor="pointer";
            removeIcon.style.marginLeft="10px";
            
            removeIcon.addEventListener("click",()=>{
                tasksArr.splice(index,1);
                localStorage.setItem("tasks",JSON.stringify(tasksArr));
                displayTasks();
            });
            
            // Add everything to the list item
            list.appendChild(checkbox);
            list.appendChild(taskSpan);
            list.appendChild(removeIcon);
            // Add everything to the tasks item
            tasks.appendChild(list);
            

            
        });
    }
}

displayTasks();



addButton.addEventListener("click",()=>{
    let input1=inputTask.value;
    if(input1===""){
        console.log("Add the task first");
    }else{
        tasksArr.push({ text: input1, completed: false});
        localStorage.setItem("tasks",JSON.stringify(tasksArr));
        inputTask.value="";
        displayTasks();
    }
});






