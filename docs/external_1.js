var valuesArray = [];

function addValue() {
    var inputValue = document.getElementById('inputValues').value;
    if (inputValue !== '') {
        valuesArray.push(parseFloat(inputValue, 10));
        valuesArray.sort(function(a, b) {
            return b - a;
        });
        document.getElementById('sortedValues').textContent = valuesArray.join(', ');
    }
    document.getElementById('inputValues').value = ''; // 入力欄をクリア
}
