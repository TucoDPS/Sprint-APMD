document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('emailForm');
    const emailInput = document.getElementById('emailInput');
    const successMessage = document.getElementById('successMessage');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Previne o envio padrão do formulário
  
      setTimeout(function() {
        successMessage.style.display = 'block';
        emailInput.value = '';
      }, 2000);
    });
  });
  