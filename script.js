const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      display.value = '';
    } 
    else if (value === '=') {
      try {
        // Validación: No permitir división por cero
        if (display.value.includes('/0')) {
          alert('Error: No se puede dividir por cero');
          display.value = '';
          return;
        }
        display.value = eval(display.value
          .replace('×', '*')
          .replace('÷', '/')
          .replace('−', '-'));
      } catch {
        alert('Entrada no válida');
        display.value = '';
      }
    } 
    else {
      // Validación: solo caracteres válidos
      if (/^[0-9+\-×÷.]*$/.test(value)) {
        display.value += value;
      }
    }
  });
});
