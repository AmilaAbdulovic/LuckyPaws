document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Show the overlay and pop-up
    document.getElementById('overlay').style.display = 'block';
  });
  
  document.getElementById('closeBtn').addEventListener('click', function() {
    // Hide the overlay and pop-up
    document.getElementById('overlay').style.display = 'none';
  });

  