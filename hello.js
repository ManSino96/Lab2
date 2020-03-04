const temp_converter = function(temp){
 return (temp-32)*(5/9)
}
const result = temp_converter(100)
console.log(`Temperature conversion ${result} is degrees`)