const calc = document.getElementById('calc');
calc.addEventListener('submit', (event) => {

    event.preventDefault();

    let num1 = Number(document.getElementById('num1').value);
    let num2 = Number(document.getElementById('num2').value);
    let num3 = Number(document.getElementById('num3').value);
    let op = document.getElementById('op').value;

    let result = 0;

    switch (op) {
        case 'soma':
            result = num1 + num2 + num3;
            break;

        case 'sub':
            result = num1 - num2 - num3;
            break;

        case 'mult':
            result = num1 * num2 * num3;
            break;

        case 'div':
            result = num1 / num2 / num3;
            break;
            
        case 'media':
            result = (num1 + num2 + num3) / 3;
            break;
    
        default:
            result = 'false';
            break;
    }

    let texto = document.createElement('h3');

    if (result) {
        texto.textContent = `O resultado do cálculo é ${result}`;
    } else {
        texto.textContent = `Opção Inválida!!!`;
    }

    document.body.appendChild(texto);
});