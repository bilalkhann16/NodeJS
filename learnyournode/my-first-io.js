const fs = require('fs');

buffer = fs.readFileSync(process.argv[2]).toString();
const new_lines = buffer.split('\n')

console.log(new_lines.length-1)


//All results passed!  Submission results match expected :)

// ACTUAL                                 EXPECTED                
// ────────────────────────────────────────────────────────────────────────────────

//    "28"                                ==    "28"                               
//    ""                                  ==    ""                                 

// ────────────────────────────────────────────────────────────────────────────────