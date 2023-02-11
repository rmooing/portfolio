// 시계
const clock = document.querySelector("#clock");

setInterval(getClock, 100);

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}

// to do list
// const loginForm = document.querySelector("#login-form");
const forms = document.querySelector("#forms");
const loginInput = document.querySelector("#login-form input");
const userid = document.querySelector("#userid");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const username1 = document.querySelector("#username1");
const dashBoard = document.querySelector("#dash-board");
const title = document.querySelector("#title");

const TODOS_KEY = "todos";
let toDos = [];

// 로그인 폼
function loginSubmit(e) {
  e.preventDefault();
  forms.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintUserId(username);
};

function paintUserId(username) {
  userid.classList.remove(HIDDEN_CLASSNAME);
  toDoForm.classList.remove(HIDDEN_CLASSNAME);
  dashBoard.classList.remove(HIDDEN_CLASSNAME);
  // title.classList.add(HIDDEN_CLASSNAME);
  userid.innerText = `Hello! ${username}'s To Do List`;
};

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null) {
  forms.classList.remove(HIDDEN_CLASSNAME);
  forms.addEventListener("submit", loginSubmit);
} else {
  paintUserId(savedUserName);
};


// 투 두 리스트
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

function deleteToDo(e) {
  const li = e.target.parentElement;
  li.remove();
};

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "X";
  button.addEventListener("click", deleteToDo);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
};

function handelToDoSubmit(e) {
  e.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  }
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

toDoForm.addEventListener("submit", handelToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
};

// function filter() {

// }
