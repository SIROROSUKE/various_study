// external_3.js
var valuesArray = [];

// ページ読み込み時にlocalStorageからデータを取得
const storedData = JSON.parse(localStorage.getItem('come'));
if (storedData) {
    valuesArray = storedData;
    updateSortedValues();
}

function addValue() {
    var inputValue = document.getElementById('inputValues').value;
    if (inputValue !== '') {
        valuesArray.push(inputValue);
        updateSortedValues();
        document.getElementById('inputValues').value = ''; // 入力欄をクリア

        // 新しい値をlocalStorageに保存
        localStorage.setItem('come', JSON.stringify(valuesArray));
    }
}

function updateSortedValues() {
    document.getElementById('sortedValues').innerHTML = valuesArray.join("<br>");
}
