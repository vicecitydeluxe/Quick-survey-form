const addData = document.getElementById("survey-form");
addData.addEventListener("submit", (e) => {
  e.preventDefault();
  let DataLogs = [];
  let data = {
    id: Date.now(),
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    age: document.getElementById("number").value,
    role: document.getElementById("dropdown").value,
  };
  console.log(data);
  DataLogs.push(data);
  addData.reset();
  localStorage.setItem("MyDataList", JSON.stringify(DataLogs));
});
