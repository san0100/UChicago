document.addEventListener("DOMContentLoaded", function() {
  function fadeInOut(element, delay, duration) {
    setTimeout(function() {
      element.style.opacity = 1;
      setTimeout(function() {
        element.style.opacity = 0;
        setTimeout(function() {
          element.style.display = "none";
        }, 500); 
      }, duration - 500); 
    }, delay); 
  }

  
  var loveForUChicago = document.getElementById("loveForUChicago");
  fadeInOut(loveForUChicago, 1000, 7000);

 
  var invitationText = document.getElementById("invitationText");
  setTimeout(function() {
    invitationText.style.display = "block";
    fadeInOut(invitationText, 1000, 5000);
  }, 8000); 

 
  var uchicagoText = document.getElementById("uchicagoText");
  setTimeout(function() {
    uchicagoText.style.display = "block";
    fadeInOut(uchicagoText, 1000, 5000);
  }, 16000); 

  // Final text
  var codedByText = document.getElementById("codedBy");
  setTimeout(function() {
    codedByText.style.display = "block";
    fadeInOut(codedByText, 1000, 9000);
  }, 24000); 
});
