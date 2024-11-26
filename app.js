let container = document.getElementById('container');
let selectedCells = new Set();
// header row
for (let i = 0; i <= 26; i++) {
    let cell = document.createElement('div');
    cell.className = 'cell header-cell';
    // cell.innerText = i;
    cell.innerText = i == 0 ? "" : String.fromCharCode(64 + i);
    container.append(cell);
}

// rows and columns w/o  header

for (let row = 1; row <= 20; row++) {
    let rowHeader = document.createElement('div');
    rowHeader.className = 'cell header-cell';
    rowHeader.innerText = row;
    container.append(rowHeader);

    for (let col = 1; col <= 26; col++) {
        const cell = document.createElement('div');
        cell.className = 'cell';
        cell.setAttribute("contenteditable", "true");
        // cell.innerHTML = row + " " + col;
        cell.addEventListener('click',handleCellClick);
        container.append(cell);
    }
}

function handleCellClick(event){
    // console.log(event.target);
  // selectedCells.classList.add('selected-cell');
if (!event.ctrKey && !event.metakey){
    selectedCells.forEach((value)=>{
        value.classList.remove('selected-cell');
    })
    selectedCells.clear();
}
if(selectedCells.has(targetCell)){
    selectedCells.delete(targetCell);
    targetCell.classList.remove('selected-cell');
}
else {
  targetCell.classList.add('selected-cell');
    selectedCells.add(targetCell);
    // console.log(selectedCells);
}
}
// formula Bar
let boldbtn = document.querySelector('#boldbtn');
boldbtn.addEventListener('click', ()=>{
    for(let t of selectedCellsCollection){
        t.style.fontWeight = t.style.fontWeight == 'bold' ? 'normal' : 'bold';
    }
})
let textColor = document.querySelector('#text-color');
textColor.addEventListener('change',(event)=>{
    let selectedColor = event.target.value;
    for (let t of selectedCellsCollection){
        t.style.color = selectedColor;
    }
})

