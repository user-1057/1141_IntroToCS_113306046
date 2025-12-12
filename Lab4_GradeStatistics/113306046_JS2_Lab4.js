const mathInput = document.getElementById("mathInput");
const engInput = document.getElementById("engInput");
const submitBtn = document.getElementById("submitBtn");
const tableBody = document.getElementById("tableBody");

let rowCount = 0;

submitBtn.addEventListener("click", function () {
    const math = Number(mathInput.value);
    const eng = Number(engInput.value);

    if (mathInput.value === "" || engInput.value === "" ||
        isNaN(math) || isNaN(eng)) {
        alert("請輸入數字");
        return;
    }

    rowCount++;
    const avg = ((math + eng) / 2).toFixed(2);

    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${rowCount}</td>
        <td>${math}</td>
        <td>${eng}</td>
        <td>${avg}</td>
    `;
    tableBody.appendChild(row);

    updateAverages();

    mathInput.value = "";
    engInput.value = "";
});

function updateAverages() {
    const rows = tableBody.querySelectorAll("tr");

    let mathSum = 0, engSum = 0, avgSum = 0;

    rows.forEach(row => {
        const cells = row.querySelectorAll("td");
        mathSum += Number(cells[1].innerText);
        engSum += Number(cells[2].innerText);
        avgSum += Number(cells[3].innerText);
    });

    const count = rows.length;

    document.getElementById("mathAvg").innerText = (mathSum / count).toFixed(2);
    document.getElementById("engAvg").innerText = (engSum / count).toFixed(2);
    document.getElementById("overallAvg").innerText = (avgSum / count).toFixed(2);
}
