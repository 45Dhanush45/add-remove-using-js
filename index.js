
//select a form element
const formEl = document.forms.formEl;

//select a table element
const tableEl = document.getElementById("table")



tableEl.style.display = 'none';

// submit event panniruku and then FormData cunstructor f use panni form la irrukura data vaangiruku
const handleSubmit = (event) => {
  event.preventDefault();
  console.log([...new FormData(formEl)]);
  tableEl.style.cssText = "display" 
  

}

 //form la irrukura value vaangiruku
const handleFormdata = (e) => {
  
  const formData = e.formData 
  const formValues =[...formData.values()];

  //table row create  panniruku
  const row = document.createElement("tr") 
  row.innerHTML =`
  <td>${formValues[0]}</td>
  <td>${formValues[1]}</td>
  <td>${formValues[2]}</td>
  <td>${formValues[3]}</td>
  <td>${formValues[4]}</td>
  <td><button class="buttons" id="btn">delete</button></td>
  `
  
console.log(row)

// table element la row append panniruku
  tableEl.appendChild(row)

  // delete button select panniruku
  const buttons = document.querySelectorAll(".buttons");
  console.log(buttons);

  
function deleteItem(button) {
  // Traverse up the DOM to find the parent row and remove it
  const row = button.closest("tr");
  row.remove();
}
console.log(deleteItem);

buttons.forEach((button) => {
  button.addEventListener("click", () => deleteItem(button));
});
}



formEl.addEventListener("formdata",handleFormdata)
formEl.addEventListener("submit", handleSubmit )







  //  const deleteItem = (button) => {
  //   const row =button.closest("tr")
  //   row.remove()
  //   console.log(e);

  //  }
  //  btnEl.addEventListener("click",deleteItem)
    
   
  // console.log(row)