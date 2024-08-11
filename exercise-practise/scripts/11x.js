const todo = JSON.parse(localStorage.getItem('todo')) ||
 [{
  name:'make dinner',
  dueDate:'2022-12-22'
},
{
  name:'wash dishes',
  dueDate:'2022-12-22'
}];


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
    savestroage();
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
  name,
  dueDate
});

variable1.value ='';
rendertodo();
savestroage();

}

function savestroage(){
localStorage.setItem('todo',JSON.stringify(todo));
}
