// const nickName=document.querySelector('.nickname')
// const chatOrder=document.querySelector('#chat-order')
// const textInput=document.querySelector('.text-input')
// const buttonChat=document.querySelector('button')
const todo=document.querySelector('#to-do')
const todoInput=document.querySelector('#todo-input')
const buttonTodo=document.querySelector('.ok')


buttonTodo.addEventListener('click',onSubmit)

function onSubmit(e){
    if(todoInput.value=='')
        return

    const li=document.createElement('li')
    li.appendChild(document.createTextNode(todoInput.value));
    li.classList.add('list')
    todo.appendChild(li)
    todoInput.value='';
}



