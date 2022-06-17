const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const Btnsubmit = document.getElementById("btnsubmit");
const ageIn = document.getElementById("dob");

Btnsubmit.addEventListener("click", () => {
  let name = fname.value + " " + lname.value;
  let dob = ageIn.value;
  var today = new Date();
  let thisyr = today.getFullYear();
  let birthyr = dob.substr(0, 4);
  let age = thisyr - parseInt(birthyr);
  alert("My name is " + name + "and my age is " + age);
});
