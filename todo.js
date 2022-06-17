var count = 1;
var editId;

function deleteFn(event) {
  event.target.parentNode.parentNode.remove();
}

function doneFn(event) {
  event.target.parentNode.parentNode.setAttribute("class", "bg-success");
}

function editFn(event) {
  document.getElementById("editPanel").setAttribute("class", "row col-12");
  editId = event.target.parentNode.parentNode.getAttribute("id");
}

function editSaveFn(event) {
  let tempInputEdit = document.getElementById("taskEditInput").value;
  console.log(tempInputEdit);
  if (tempInputEdit != "") {
    updateEditTask(tempInputEdit);
  } else {
    alert("Plz fill all the values.");
  }
}

function updateEditTask(temp) {
  console.log(editId);
  console.log(temp);
  let path = "#" + editId + " " + "td:nth-child(2)";
  console.log(path);
  let targetTd = document.querySelector(path);
  targetTd.innerText = temp;
  document.getElementById("taskEditInput").value = "";
  document
    .getElementById("editPanel")
    .setAttribute("class", "row col-12 d-none");
}

function addTableFn(tempInput) {
  let td1 = document.createElement("td");
  td1.innerText = count;
  let td2 = document.createElement("td");
  td2.innerText = tempInput;
  let td3 = document.createElement("td");
  td3.innerHTML = `<button onclick="deleteFn(event)" class="btn btn-danger">Delete</button>
    <button class="btn btn-success" onclick="doneFn(event)">Done</button>
    <button class="btn btn-info" onclick="editFn(event)" >Edit</button>`;

  let tr1 = document.createElement("tr");
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  let tempId = "taskid" + Math.random().toString().slice(2);
  tr1.setAttribute("id", tempId);

  document.getElementById("tableList").appendChild(tr1);
  count = count + 1;
}

function addFn() {
  let tempInput = document.getElementById("taskInput").value;
  if (tempInput != "") {
    addTableFn(tempInput);
  } else {
    alert("Plz fill all the values.");
  }
}
