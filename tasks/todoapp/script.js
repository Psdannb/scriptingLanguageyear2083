let entryform = document.getElementById("entryform");

entryform.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title");
  let titleValue = title.value.trim();
  //   console.log(titleValue);
  let description = document.getElementById("description");
  let descriptionValue = description.value.trim();
  //   console.log(descriptionValue);
  let status = "pending";
  addTodo(titleValue, descriptionValue, status);
  title.value = "";
  description.value = "";
});
function addTodo(title, description, status) {
  let oldData = getTodo();
  oldData.push({ title, description, status });
  saveTodo(oldData);
  renderTodo();
}
function saveTodo(todos) {
  localStorage.setItem("todoappData", JSON.stringify(todos));
}

function getTodo() {
  let previousData = localStorage.getItem("todoappData");
  //   console.log(typeof previousData);
  let originalData = JSON.parse(previousData);
  return originalData ? originalData : [];
}
function renderTodo() {
  let oldData = getTodo();
  console.log(oldData);

  let todostaskDiv = document.getElementById("todostask");
  todostaskDiv.innerHTML = "";
  oldData.forEach((data) => {
    // console.log(data);
    let singleTodoDiv = document.createElement("div");
    singleTodoDiv.setAttribute("class", "singleTodo");

    let heading = document.createElement("h1");
    heading.setAttribute("class", "todoTitle");
    heading.innerText = data.title;

    let description = document.createElement("P");
    description.setAttribute("class", "todoDescription");
    description.innerText = data.description;

    let confirmbtn = document.createElement("button");
    confirmbtn.setAttribute("class", "confirmBtn");
    confirmbtn.innerText = "Confirm";

    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "deleteBtn");
    deleteBtn.innerText = "Delete";

    if (data.status !== "pending") {
      heading.setAttribute("class", "done");
      description.setAttribute("class", "done");
      confirmbtn.style.display = "none";
    }

    singleTodoDiv.append(heading);
    singleTodoDiv.append(description);

    singleTodoDiv.append(confirmbtn);

    singleTodoDiv.append(deleteBtn);
    todostaskDiv.append(singleTodoDiv);
  });
  activateDeleteBtn();
  activateConfirmBtn();
}

function activateDeleteBtn() {
  let deleteBtns = document.querySelectorAll(".deleteBtn");
  // console.log(deleteBtns);

  deleteBtns.forEach((btn, index) => {
    // console.log(index);
    btn.addEventListener("click", () => {
      // console.log(index);
      deleteTodo(index);
    });
  });
}

function activateConfirmBtn() {
  let confirmBtns = document.querySelectorAll(".confirmBtn");

  confirmBtns.forEach((btn, index) => {
    // console.log(index);
    btn.addEventListener("click", () => {
      // console.log(index);
      confirmTodo(index);
    });
  });
}

function deleteTodo(index) {
  let oldData = getTodo();
  // console.log(oldData[index]);
  let flag = confirm("DO you really want to delete?");
  if (flag) {
    oldData.splice(index, 1);
    saveTodo(oldData);
    renderTodo();
  }
}

function confirmTodo(index) {
  let olddata = getTodo();
  olddata[index].status = "done";
  saveTodo(olddata);
  renderTodo();
}
window.addEventListener("load", () => {
  renderTodo();
});
