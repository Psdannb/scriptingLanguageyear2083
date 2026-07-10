let entryForm = document.getElementById("entryform");

entryForm.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title");
  let titleValue = title.value.trim();
  let description = document.getElementById("description");
  let descriptionValue = description.value.trim();
  addTodo(titleValue, descriptionValue, "pending");
  titleValue = "";
  descriptionValue = "";
});
function addTodo(titleValue, descriptionValue, status) {
  let previousDatas = getTodo();
  //   console.log(previousDatas);
  previousDatas.push({ titleValue, descriptionValue, status });
  saveTodo(previousDatas);
  renderTodo();
}
// addTodo("test", "des");
function saveTodo(todos) {
  localStorage.setItem("testingTodo", JSON.stringify(todos));
}

function getTodo() {
  let localStorageData = localStorage.getItem("testingTodo");
  let originalData = JSON.parse(localStorageData);
  return originalData ? originalData : [];
}

function renderTodo() {
  let datasFromBrowser = getTodo();
  //   console.log(datasFromBrowser);
  let todoDisplay = document.getElementById("todostask");
  todoDisplay.innerHTML = "";
  datasFromBrowser.forEach((data) => {
    // console.log(data);
    let singleTodoDiv = document.createElement("div");
    singleTodoDiv.setAttribute("id", "singleTodoDiv");
    let heading = document.createElement("h2");
    let paragraph = document.createElement("P");

    heading.innerText = data.titleValue;
    paragraph.innerText = data.descriptionValue;

    let confirmBtn = document.createElement("button");
    confirmBtn.setAttribute("id", "confirmbtn");
    confirmBtn.setAttribute("class", "confirmbtn");
    confirmBtn.innerText = "confirm";
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("id", "deletebtn");
    deleteBtn.setAttribute("class", "deletebtn");
    deleteBtn.innerText = "delete";

    if (data.status !== "pending") {
      confirmBtn.style.display = "none";
      heading.setAttribute("class", "done");
      paragraph.setAttribute("class", "done");
    }
    singleTodoDiv.append(heading);
    singleTodoDiv.append(paragraph);
    singleTodoDiv.append(confirmBtn);
    singleTodoDiv.append(deleteBtn);
    todoDisplay.append(singleTodoDiv);
  });

  activateDeleteBtns();
  activateConfirmBtns();
}

function activateDeleteBtns() {
  let deleteBtns = document.querySelectorAll(".deletebtn");
  // console.log(deleteBtns);
  deleteBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      let userResonse = confirm("DO you really want to delete");
      if (userResonse) {
        deleteTodo(index);
      }
    });
  });
}
function deleteTodo(index) {
  let oldData = getTodo();
  oldData.splice(index, 1);
  saveTodo(oldData);
  renderTodo();
}

function activateConfirmBtns() {
  let confirmBtns = document.querySelectorAll(".confirmbtn");
  confirmBtns.forEach((button, index) => {
    button.addEventListener("click", () => {
      confirmTodo(index);
    });
  });
}
function confirmTodo(index) {
  let oldData = getTodo();
  oldData[index].status = "done";
  saveTodo(oldData);
  renderTodo();
}
window.addEventListener("load", () => {
  renderTodo();
});
