let firstTable = document.querySelector('#table1')

const table92 = [
  { pos: 1, team: "Man U", goalD: 36, points: 84},
  { pos: 2, team: "Villa", goalD: 17, points: 74},
  { pos: 3, team: "Norwich", goalD: -4, points: 72},
  { pos: 4, team: "Blackburn", goalD: 22, points: 71},
  { pos: 5, team: "QPR", goalD: 8, points: 63},
  { pos: 6, team: "Liverpool", goalD: 7, points: 59},
  { pos: 7, team: "Sheff W", goalD: 4, points: 59},
  { pos: 8, team: "Spurs", goalD: -6, points: 59},
  { pos: 9, team: "Man City", goalD: 5, points: 57},
  { pos: 10, team: "Arsenal", goalD: 2, points: 56},
  { pos: 11, team: "Chelsea", goalD: -3, points: 56},
  { pos: 12, team: "Wimbledon", goalD: 1, points: 54},
  { pos: 13, team: "Everton", goalD: -2, points: 53},
  { pos: 14, team: "Sheff U", goalD: 1, points: 52},
  { pos: 15, team: "Coventry", goalD: -5, points: 52},
  { pos: 16, team: "Ipswich", goalD: -5, points: 52},
  { pos: 17, team: "Leeds", goalD: -5, points: 51},
  { pos: 18, team: "Saints", goalD: -7, points: 50},
  { pos: 19, team: "Oldham", goalD: -11, points: 49},
  { pos: 20, team: "Palace", goalD: -13, points: 49},
  { pos: 21, team: "Boro", goalD: -21, points: 44},
  { pos: 22, team: "Forest", goalD: -21, points: 40},
];

let headers = ["Position", "Club", "GD", "Points"];

function loadTable() {
  let table = document.createElement('table');
  let rowHeaders = document.createElement('tr');

  headers.forEach(textHeader => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(textHeader);
    header.appendChild(textNode);
    rowHeaders.appendChild(header);
  });

  table.appendChild(rowHeaders);

  table92.forEach(tbl92 => {
    let row = document.createElement('tr');

    Object.values(tbl92).forEach(text => {
      let cell = document.createElement('td');
      let textNode = document.createTextNode(text);
      cell.appendChild(textNode);
      row.appendChild(cell);

    });
    table.appendChild(row);
  });

  firstTable.appendChild(table);
}

loadTable();

// source: https://www.fwait.com/how-to-create-table-from-an-array-of-objects-in-javascript/
