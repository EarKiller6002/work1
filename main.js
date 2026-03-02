let randomNumbers = [];

function generateInitialArray() {
    randomNumbers = [];
    for (let i = 0; i < 30; i++) {
        randomNumbers.push(Math.floor(Math.random() * 100));
    }
}

function renderTable() {
    let tableHTML = '<table>';
    for (let row = 0; row < 5; row++) {
        tableHTML += '<tr>';
        for (let col = 0; col < 6; col++) {
            const index = row * 6 + col;
            const number = randomNumbers[index];
            const cellClass = number >= 50 ? ' class="highlight"' : '';
            tableHTML += `<td${cellClass}>${number}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    document.getElementById('tableContainer').innerHTML = tableHTML;
}

function foo() {
    const newNumber = Math.floor(Math.random() * 100);
    randomNumbers.shift();
    randomNumbers.push(newNumber);
    renderTable();
}

window.onload = function() {
    generateInitialArray();
    renderTable();
};