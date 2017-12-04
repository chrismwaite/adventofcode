const input="hgy zudelp ickc drfjgn iyws xhc\nzzv wik iorhat qkb kjb lykdz vrce yjsjwj\ngyw xzgbi efus uuy\nhwcy ujdun bjjuvd jbdvju onnk xeyy mmp onkn qyzl\njwfm ptjwrbl hhuv uolz adyweh qpj wxyogp igvnojq jmfw pqs fsnirby\naaa aaa bb cc dd";

(function() {
  let row_array = input.split("\n");
  let invalid = 0;
  row_array.forEach(function(row) {
    let column_array = row.split(" ");
    for(let i=0; i<column_array.length; i++) {
      let value = column_array[i];
      if(column_array.indexOf(value) > -1 && column_array.indexOf(value) != i) {
        invalid++;
        break;
      }
    }
  });
  console.log(row_array.length-invalid);
})();