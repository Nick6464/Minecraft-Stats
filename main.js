const PublicGoogleSheetsParser = require('public-google-sheets-parser')

const spreadsheetId = '17zo5TRXxyMkAJ4WQBMmXey6jMMsHcnwA-ULVeM5YXsc'

//Create Parser linked to the Public Sheet
const parser = new PublicGoogleSheetsParser(spreadsheetId)


//Testing for output
parser.parse().then((items) => {
    console.log(items);
  })