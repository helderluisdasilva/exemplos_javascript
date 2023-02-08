const gamesTable = document.getElementById("games_table");
const inputNumber = document.getElementById("table_number");
const inputButton = document.getElementById("generate_table");
const cleanTable = document.getElementById("clean_table");
const tableContainer = document.getElementById("generated_table_container");
let tableCounter = 0;

inputButton.addEventListener("click", function(){
    generateTable(inputNumber.value);
});

cleanTable.addEventListener("click", function(){
    tableContainer.innerHTML = "";
    inputNumber.value = 1;
    tableCounter = 0;
});

function generateTable(setNumberParam){
    if(tableCounter < 6){
        let setNumber = setNumberParam;
        let newTable = document.createElement("table");

        for(i = 0; i <= 10; i++){
            let newRow = document.createElement("tr");
            let newData = document.createElement("td");
            newData.appendChild(document.createTextNode(`${setNumber} X ${i} = ${setNumber * i}`));
            newRow.appendChild(newData);
            newTable.appendChild(newRow);
        }

        tableContainer.appendChild(newTable);
        tableCounter++;
        inputNumber.value++;
    }
}