const input = "1234444";

(function() {
  let sum_of_matches = 0;
  for(let i=0; i < input.length; i++) {
    let next_digit = (i==(input.length-1) ? input[0] : input[i+1]);  
    if(input[i] === next_digit) {
      sum_of_matches += parseInt(input[i]);
    }
  }
  console.log(sum_of_matches);
})();