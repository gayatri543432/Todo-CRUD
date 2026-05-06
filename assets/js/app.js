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
const todoform=document.getElementById('todoform');
const todoItem=document.getElementById('todoItem');


function onTodosubmit(ele){
    ele.preventDefault();
    let newTodo={
        todoItem : todoItem.value,
        todoId: Date.now().toString()
    }
    

    let li=document.createElement('li');
    li.classList='list-group-item d-flex justify-content-between';
    
    li.innerHTML=`
                        <strong>${newTodo.todoItem}</strong>

                        <div>
                            <i class="fa-solid fa-pen-to-square fa-2x text-primary"></i>
                            <i class="fa-regular fa-trash-can fa-2x text-danger"></i>
                        </div>
                `
    todolist.append(li);
    todoform.reset()
}

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

todoform.addEventListener('submit',onTodosubmit)