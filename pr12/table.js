const requestURL = 'https://jsonplaceholder.typicode.com/users';
const tableHead = document.getElementById("tableHead");
const tableBody = document.getElementById("tableBody");

function sendRequest(method, url, body = null) {
   return fetch(url).then( response => {
       return response.json()
   })
}

sendRequest('GET', requestURL).then( data => {
    
    //Set head to table
    addHeaderToTable(Object.keys(data[0]));

    //Set body content to table
    for(let i=0 ; i<Object.keys(data).length ; i++){
        addRowToTableBody(data[i], i);
    }
}).catch( error => console.error(error));

function addHeaderToTable(dataToHeader){
    const newRow = tableHead.insertRow(0);

    let newCell;
    let newText;
    for(let i=0 ; i<4 ; i++){
        newCell = newRow.insertCell(i);
        newText = document.createTextNode(dataToHeader[i]);
        newCell.appendChild(newText);
    }
}

function addRowToTableBody(dataToRow, index){

    const newRow = tableBody.insertRow(index);

    let newCell;
    let newText;
    for(let i=0 ; i<4 ; i++){
        newCell = newRow.insertCell(i);
        newText = document.createTextNode(dataToRow[Object.keys(dataToRow)[i]]);
        newCell.appendChild(newText);
    }
}
