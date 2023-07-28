// Access the form and register the form submission event
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#blogForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Retrieve the form values
      var name = document.querySelector('#Name').value;
      var email = document.querySelector('#Email').value;
      var password = document.querySelector('#password').value;
      

      // Display the filled details on the webpage
      var detailsContainer = document.querySelector('#detailsContainer');
      detailsContainer.innerHTML = `
        <h1>Blog Details</h1>
        <h2>Name: ${Name}</h2>
        <p>Email: ${Email}</p>
        <p>password:${password}</p>
        
      `;
    });
  });