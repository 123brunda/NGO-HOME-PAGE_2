AOS.init();

function handleSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('name').value;
  alert("Thank you for volunteering, " + name + "!");
  document.querySelector("form").reset();
}

document.getElementById("year").textContent = new Date().getFullYear();
