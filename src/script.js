document.addEventListener('DOMContentLoaded', function() {
    console.log('Document is ready');
    const display = document.getElementById('calc-display');
    const buttons = document.getElementsByClassName('btn');
    console.log(display);
    console.log(buttons);

    buttonArray = Array.from(buttons);   
    
    let currentValue = "";

    function evaluateResult() {
        console.log('currentValue: ', currentValue)
        const convertedValue = currentValue.replace("x", "*").replace("÷", "/").replace("%", "*0.01");
        console.log('convertedValue: ', convertedValue);
        const result = eval(convertedValue);
        currentValue = result.toString();
        display.value = currentValue;
    }

    buttonArray.forEach(function (button) {
        console.log('button clicked', button.innerText);
        button.addEventListener('click', function() {
        console.log('first button clicked');
        const value = button.innerText;

        if (value == "AC") {
            currentValue = "";
            display.value = currentValue;
        } else if(value === "=") {
            evaluateResult();
        }
        
        else {
            currentValue += value;
            console.log('currenvalue:', currentValue);
            display.value = currentValue;
        }
    });
    });

    
})