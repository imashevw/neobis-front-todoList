document.addEventListener("DOMContentLoaded", () => {

    //добавление задание, нажатие кнопки add
    const btnAdd = document.querySelector('.btn-add');
    function addTask(){
        const inputToDo = document.querySelector('.todo__input').value;
        // проверка инпута
        if (inputToDo.trim() === ''){
            // если были пробелы, очищаем инпут
            cleanInput()
        } else {
            //создание таск блока в todo list
            createNewToDoTask()
            //очищение инпута
            cleanInput()
        }
    }
    btnAdd.addEventListener('click', addTask);

    //функция очищения инпута
    function cleanInput(){
        document.querySelector('.todo__input').value = '';
    }

    //создание блока с таском
    function createNewToDoTask(){
        const toDoList = document.querySelector('.todo__list')
        const inputToDo = document.querySelector('.todo__input').value;
        //создание лист блока
        const taskBlock = document.createElement('div');
        taskBlock.classList.add('todo__item-box');
        taskBlock.innerHTML = `
        <div class="todo__item-wrapper">
            <div class="todo-item">
                <label>
                    <input type="checkbox"><span class="bubble ${categoryChoice()}"></span>
                </label>
            </div>
            <p class="todo__item-text editable">${inputToDo}</p>
        </div>
        <div class="btn__wrapper">
            <button class="btn-edit">Edit</button>
            <button class="btn-delete">Delete</button>
        </div>`
        
        toDoList.append(taskBlock);
    
        //удаление задание из таск лист
        deleteBtnPush();
        //редактирование списка
        editBtnPush();
        //отметить список выполненным
        done()
    }

    function categoryChoice(){
        if (document.getElementById('category2').checked){
            return 'personal'
        }else{
            return 'business'
        }
    };


    //удаление списка из todo лист
    function deleteBtnPush(){
        const btnDelete = document.querySelectorAll('.btn-delete');
        const todoBlockAll = document.querySelectorAll('.todo__item-box')
        for (let i = 0; i < btnDelete.length; i++){
            btnDelete[i].addEventListener('click', () =>{
                todoBlockAll[i].remove()
            })
        }
    }

    //редактирование имени пользователя
    const userName = document.querySelector('.userName');
    userName.addEventListener('click', () =>{
        userName.contentEditable = true;
        userName.focus();
    });

    //редактирование
    function editBtnPush(){
        const editBtn = document.querySelectorAll('.btn-edit')
        const task = document.querySelectorAll('.todo__item-text');
        for (let i = 0; i < editBtn.length; i++){
            editBtn[i].addEventListener('click', () =>{
                task[i].contentEditable = true;
                task[i].focus();
            })
        }
    }
    //отметить выполненным
    function done(){
        const checkbox = document.querySelectorAll('.todo-item input[type="checkbox"]');
        const taskCollection = document.querySelectorAll('.todo__item-text');
        for (let i = 0; i < checkbox.length; i++){
            checkbox[i].addEventListener('click', ()=>{
                if (checkbox[i].checked){
                    taskCollection[i].classList.add('done')
                }else{
                    taskCollection[i].classList.remove('done');
                }
            }
        )}
    }
})