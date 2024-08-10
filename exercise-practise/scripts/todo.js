const todo =[
{
  name:'make dinner',
  dueDate:'2022-03-12'
}
];
rendertodo();
function rendertodo(){
let todoHtml ='';
for(let i =0;i<todo.length;i++)
  {
 
    const todosobject =todo[i];
    const {name,dueDate} = todosobject;
    
  const html =`
    <div> ${name}</div>
    <div> ${dueDate} </div>
     <button onclick="
      todo.splice(${i},1);
      rendertodo();
     " class="del-button">Delete</button>
     
     `;

    todoHtml += html;
}

document.querySelector('.js-todo').innerHTML = todoHtml;
}

function addTodo(){

let variable1= document.querySelector('.todo-input');

const name = variable1.value;
const date = document.querySelector('.date-js');
const dueDate = date.value;

todo.push({
  name:name,
  dueDate:dueDate
});



variable1.value ='';
rendertodo()

}

