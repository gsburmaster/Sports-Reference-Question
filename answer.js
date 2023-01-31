//file input
//https://nodejs.dev/en/learn/reading-files-with-nodejs/
const fs = require('fs');
const { title } = require('process');
let data;
try {
  data = fs.readFileSync('./input.txt', 'utf8');
} catch (err) {
  console.error(err);
  return;
}
//javascript requires double quotes for JSON rather than single quotes
const dataObject = JSON.parse(data.replaceAll("'",'"'));

//actual solution begins here
const teamNumber = Object.keys(dataObject).length;

let outputString = "====";
let titleString = "Tm |";
for (const key in dataObject) {
    titleString = titleString + key + "|";
}
outputString = outputString.repeat(1 + teamNumber) + '\n';
outputString = outputString + titleString + '\n';


let sameTeamCheck = 0;
let innerInc = 0;
for (const key in dataObject)
{
    outputString = outputString + key + '|';
    for (const innerkey in dataObject[key] ) {
        (innerInc == sameTeamCheck ) ? (outputString += '---|') : (true)

        let tmpString = dataObject[key][innerkey]['W'].toString().padEnd(3,' ');
        outputString += tmpString + '|'
    
        innerInc+=1;
    }
    innerInc = 0;
    sameTeamCheck+=1;
    (sameTeamCheck == teamNumber ) ? (outputString += '---|') : (true)
    outputString += '\n';
}
outputString += "====".repeat(1 + teamNumber);
console.log(outputString);