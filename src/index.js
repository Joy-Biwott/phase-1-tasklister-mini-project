document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    form.reset();
  })
});

function buildToDo(todo){
  const li = document.createElement('li')
  const list = document.querySelector('#toDo')
  const btn = document.createElement('button')
  const ul = document.querySelector('#tasks')
  ul.appendChild(li);
  li.textContent = `${todo} `
  li.appendChild(btn);
  btn.textContent = 'del'
  btn.addEventListener('click', deleteAct);
  
}

function deleteAct(e){
  e.target.parentNode.remove();
}


  

