let entryform = document.getElementById("entryform");

entryform.addEventListener("submit", (event) => {
  event.preventDefault();
  let title = document.getElementById("title");
  let titleValue = title.value.trim();
  //   console.log(titleValue);
  let description = document.getElementById("description");
  let descriptionValue = description.value.trim();
  //   console.log(descriptionValue);
  addTodo(titleValue, descriptionValue);
  title.value = "";
  description.value = "";
});
function addTodo(title, description) {
  let oldData = getTodo();
  oldData.push({ title, description });
  saveTodo(oldData);
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
  oldData.forEach((data) => {
    // console.log(data);
    let singleTodoDiv = document.createElement("div");
    singleTodoDiv.setAttribute("class", "singleTodo");

    let heading = document.createElement("h1");
    heading.setAttribute("class", "todoTitle");
    heading.innerText = data.title;

    singleTodoDiv.append(heading);
    todostaskDiv.append(singleTodoDiv);
  });
}
renderTodo();
function deleteTodo() {
  localStorage.removeItem("todoappData");
}
// deleteTodo();
