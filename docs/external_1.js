var valuesArray = [];

// ページ読み込み時にlocalStorageからデータを取得
const storedData = JSON.parse(localStorage.getItem('sort'));
if (storedData) {
    valuesArray = storedData;
    updateSortedValues();
}

function addValue() {
    var inputValue = document.getElementById('inputValues').value;
    if (inputValue !== '') {
        valuesArray.push(parseFloat(inputValue, 10));
        valuesArray.sort(function(a, b) {
            return b - a;
        });
        updateSortedValues();
        document.getElementById('inputValues').value = ''; // 入力欄をクリア

        // 新しい値をlocalStorageに保存
        localStorage.setItem('sort', JSON.stringify(valuesArray));
    }
}

function updateSortedValues() {
    document.getElementById('sortedValues').textContent = valuesArray.join(', ');
}
