export function getTimeAndLoadProfile(csv) {
  let csvRows = csv.split('\n');
  csvRows.shift();
  let hourAndLoadProfile = []
  csvRows.forEach(textRow => {
    let hour = textRow.split(/[\s+,]/)[3].substring(0, 2);
    let loadProfile = textRow.split(/[\s+,]/)[4];
    hourAndLoadProfile.push([parseInt(hour), parseFloat(loadProfile)])
  })
  return hourAndLoadProfile

}

export function readFile(csvPath) {
  return fetch(csvPath).then(response => response.text())
}


