const input="bdwdjjo avricm cjbmj ran lmfsom ivsof\nmxonybc fndyzzi gmdp gdfyoi inrvhr kpuueel wdpga vkq\nbneh ylltsc vhryov lsd hmruxy ebnh pdln vdprrky";

(function() {
  let row_array = input.split("\n");
  let invalid_count = 0;
  console.log("Total rows: " + row_array.length);
  row_array.forEach(function(row) {
    let column_array = row.split(" ");
    let invalid = false;
    for(let i=0; i<column_array.length; i++) {
      let value = column_array[i];
      if(!invalid) {
        for(let x=0; x<column_array.length; x++) {
          if(x!=i && !invalid) {
            let count = 0;
            for(let a=0; a<value.length; a++) {  
              let character = value[a];
              if(column_array[x].indexOf(character) > -1) {
                count++;
              }
            }
            if(count==value.length && count==column_array[x].length) {
              invalid_count++;
              invalid=true;
              console.log("found invalid password! (" + invalid_count + ") " + row + " (" + value + " matches " + column_array[x] + ")");
            }
          }
        }
      }
    }
  });
  console.log(row_array.length-invalid_count);
})();