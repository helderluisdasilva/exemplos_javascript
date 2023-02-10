const gamesTable = document.getElementById("games_table");
const inputNumber = document.getElementById("table_number");
const inputButton = document.getElementById("generate_table");
const cleanTable = document.getElementById("clean_table");
const tableContainer = document.getElementById("generated_table_container");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

let tableCounter = 0;


//EVENTOS
inputButton.addEventListener("click", function(){
    generateTable(inputNumber.value);
});

cleanTable.addEventListener("click", function(){
    tableContainer.innerHTML = "";
    inputNumber.value = 1;
    tableCounter = 0;
});

celsius.addEventListener("change", function(){
    convertTemperature("celsius");
})

fahrenheit.addEventListener("change", function(){
    convertTemperature("fahrenheit");
})


//FUNÇÔES
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

function convertTemperature(alterado){
    let celsiusAtual = 0;
    let fahrenheitAtual = 0;
    if(alterado == "celsius"){
        celsiusAtual = celsius.value;
        fahrenheitAtual = (celsiusAtual * (9 / 5)) + 32;
        fahrenheit.value = fahrenheitAtual;
    }else if(alterado == "fahrenheit"){
        fahrenheitAtual = fahrenheit.value;
        celsiusAtual = (fahrenheitAtual - 32) * (5 / 9);
        celsius.value = celsiusAtual;
    }
}