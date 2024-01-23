var shopee = document.getElementById('shopee');
var lazada = document.getElementById('lazada');
    shopee.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location.href = 'https://shopee.ph';
    });
    lazada.addEventListener('click', function() {
        // Redirect to the desired URL
        window.location.href = 'https://lazada.com.ph';
    });

document.addEventListener("DOMContentLoaded", function () {
        const radioButtons = document.querySelectorAll('input[type="radio"]');
        let currentIndex = 0;
    
        function autoSwitch() {
          radioButtons[currentIndex].checked = true;
          currentIndex = (currentIndex + 1) % radioButtons.length;
        }
    
        setInterval(autoSwitch, 5000); // Change slide every 5 seconds (adjust as needed)
      });

      