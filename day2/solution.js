const input = "5806	6444	1281\n38	267	1835";

(function() {
  let checksum = 0;
  let row_array = input.split("\n");
  row_array.forEach(function(row) {
    let column_array = row.split("\t");
    let smallest = column_array[0];
    let largest = column_array[0];
    column_array.forEach(function(column) {
      if(parseInt(column) < smallest) {
        smallest = parseInt(column);
      }
      if(parseInt(column) > largest) {
        largest = parseInt(column);
      }
    });
    checksum+=(largest-smallest)
  });
  console.log(checksum);
})();