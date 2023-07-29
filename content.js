// Access the form and register the form submission event
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('#blogForm');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting

      // Retrieve the form values
      var name = document.querySelector('#Name').value;
      var email = document.querySelector('#Email').value;
      var image = document.querySelector('#image').value;
      var video = document.querySelector('#video').value;
      

      // Display the filled details on the webpage
      var detailsContainer = document.querySelector('#detailsContainer');
      detailsContainer.innerHTML = `
        <h1>Blog Details</h1>
        <h2>Name: ${Name}</h2>
        <p>Email: ${Email}</p>
        <img src="${image}" alt="Blog Image">
        <p>Video URL: ${video}</p>
        `;
    });
  });
