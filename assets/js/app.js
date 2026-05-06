const cl=console.log;


let EDIT_ID = null;
let todoArr=[
    {
        todoItem :'html',
        todoId :'asdf123-123AS-21asd3'        
    },
     {
        todoItem :'CSS',
        todoId :'asdf123-123AS-214fdgs'        
    }
]

const todolist=document.getElementById('todolist');
function templating(arr){
    let result ='';
    arr.forEach(ele=> {
        result += `<li class="list-group-item d-flex justify-content-between">
                        <strong>${ele.todoItem}</strong>

                        <div>
                            <i class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
                            <i class="fa-regular fa-trash-can fa-2x text-danger"></i>
                        </div>
                    </li>`
        });
    todolist.innerHTML=result;
}
templating(todoArr)