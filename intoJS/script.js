const form = document.getElementById('form'); 

form.addEventListener('submit', function(event){
    event.preventDefault(); 
    let number1 = parseFloat(document.getElementById('numero1').value); 
    let number2 = parseFloat(document.getElementById('numero2').value); 
    let operation = document.querySelector('select').value; 
    let result; 

    switch(operation){
        case 'sum': 
            result = number1 + number2; 
            break; 
        case 'subtraction': 
            result = number1 - number2; 
            break; 
        case 'multiply': 
            result = number1 * number2; 
            break; 
        case 'division': 
            result = number1 / number2; 
            break; 
    }

    let resultPart = document.getElementById('result'); 
    resultPart.innerText = `The result is: ${result}`;

});
