document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let add = document.querySelector('form')
  add.addEventListener('submit', (event)=>{
    event.preventDefault();
   buildToDo(event.target.new.value);
   add.reset()
  })
  function buildToDo(todo){
    let p = document.createElement('li');
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x';
    p.textContent = `${todo} `
    document.querySelector('ul').appendChild(p)
    p.appendChild(btn)
  }
  function handleDelete(e){
e.target.parentNode.remove()
  }
 
});
