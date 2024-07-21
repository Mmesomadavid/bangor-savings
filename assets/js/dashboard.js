// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const eyeIcon = document.getElementById('toggleBalance');
    const balanceValue = document.querySelector('.balance-value');
  
    // Initial state: balance hidden
    let balanceVisible = false;
  
    eyeIcon.addEventListener('click', function() {
      balanceVisible = !balanceVisible;
  
      if (balanceVisible) {
        balanceValue.textContent = '$32,798,327.65'; // Replace with actual balance
        balanceValue.classList.remove('hidden');
        eyeIcon.classList.remove('ph-eye');
        eyeIcon.classList.add('ph-eye-slash');
      } else {
        balanceValue.textContent = '*******';
        balanceValue.classList.add('hidden');
        eyeIcon.classList.remove('ph-eye-slash');
        eyeIcon.classList.add('ph-eye');
      }
    });
  });
  

  // scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Function to show the server issue message
    function showServerIssueMessage() {
      const message = document.createElement('div');
      message.classList.add('server-issue-message');
      message.textContent = 'Server issue, we are working on it';
  
      document.body.appendChild(message);
  
      // Remove the message after 3 seconds (3000 milliseconds)
      setTimeout(function() {
        message.remove();
      }, 3000);
    }
  
    // Add event listeners to all clickable elements
    document.body.addEventListener('click', function(event) {
      // Check if the clicked element is an anchor tag with href or button
      if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON') {
        showServerIssueMessage();
      }
    });
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const logoutLink = document.getElementById('logout');
    const loadingOverlay = document.getElementById('loading');
  
    // Add click event listener to logout link if it exists
    if (logoutLink) {
      logoutLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default behavior of anchor tag
  
        // Show loading overlay
        loadingOverlay.style.display = 'flex'; // Show loading overlay
  
        // Perform logout actions (simulated delay for demonstration)
        setTimeout(() => {
          // Clear any session data or perform necessary logout actions here
          // For simplicity, just redirect to login.html after a delay
  
          // Redirect to login.html
          window.location.href = 'login.html';
        }, 2000); // Simulate a 2-second delay for demonstration
      });
    }
  });
  

  document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.app-header-mobile .icon-button');
    const navigation = document.querySelector('.app-body-navigation');
  
    // Add event listener to the menu button
    menuButton.addEventListener('click', function() {
      navigation.classList.toggle('show');
    });
  });
  

  const menuIcon = document.querySelector('.app-header-mobile button');
  const navbar = document.querySelector('.app-body-navigation');
  
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });