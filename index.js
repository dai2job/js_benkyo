let checkButton = document.getElementById('checkButton');
checkButton.addEventListener('click', function() {
    let rgbRadio = document.getElementsByName('col');
    let len = rgbRadio.length;
    let checkValue = '';
    for (let i = 0; i < len; i++){
        if (rgbRadio.item(i).checked){
            checkValue = rgbRadio.item(i).value;
        }
    }
    window.location.href = './result.html?col='+checkValue;
}, false);
