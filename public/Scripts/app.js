/* 
    apps.js 
    Luz Adriana Ariza Bustos: 301161864
    27-09-2021
*/

(function () {

  function Start() {
    console.log("Starting .....");
  }

  window.addEventListener("load", Start)

  // Function for the submit form button

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })

  // confirmation popuo when click on delete buttons   
  let deleteButtons = document.querySelectorAll('.btn-delete');

  for (button of deleteButtons) {
    button.addEventListener('click', (event) => {
      if (!confirm("Are you sure?")) {
        event.preventDefault();
        window.location.assign('/contacts');
      }
    });
  }
})()

// captturing user information and saving in local storage
function get_data() {
  console.log('getting data from user')
  var firstName = document.getElementById('validationTooltip01').value
  var lastName = document.getElementById('validationTooltip02').value
  var email = document.getElementById('validationTooltip03').value
  var number = document.getElementById('validationTooltip04').value
  var subject = document.getElementById('validationTooltip05').value
  var message = document.getElementById('validationTooltip06').value
  localStorage.setItem("name", firstName)
  localStorage.setItem("lastname", lastName)
  localStorage.setItem("email", email)
  localStorage.setItem("number", number)
  localStorage.setItem("subject", subject)
  localStorage.setItem("message", message)
}