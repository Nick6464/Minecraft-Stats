/*
Author: Nick Walton
Date Created: 24/04/2021

The purpose of this program is to decrease load times for my website by preloading 
Google sheet data by saving it as a JSON file periodically
*/

/**
 * Where the Sheet is created and
 */
function main() {
  const PublicGoogleSheetsParser = require("public-google-sheets-parser");

  //Link from sheet URL
  const spreadsheetId = "17zo5TRXxyMkAJ4WQBMmXey6jMMsHcnwA-ULVeM5YXsc";

  //Create Parser linked to the Public Sheet
  const parser = new PublicGoogleSheetsParser(spreadsheetId);
  //Testing for output
  parser.parse().then((items) => {
    processSheet(items);
  });
}

/**
 * Takes the Sheet data and processses to exported as a JSON
 * @param {List of Dictionaries} sheetData
 */
function processSheet(sheetData) {
  let dataByColunms = columnSpliter(sheetData);
}

/**
 * Converts the Sheet from being sorted by Rows to Colunms
 * Adds each cell to the list of other cells from the same column
 * @param {List of Dictionaries} sheet
 * @returns Dictionary of Lists
 */
function columnSpliter(sheet) {
  let columns = {};
  sheet.forEach((element) => {
    Object.keys(element).forEach((item) => {
      //columns.item.push(element[item]);
      if (!(item in columns)) {
        columns[item] = [element[item]];
      } else {
          columns[item].push(element[item]);
      }
    });
  });
  return columns;
}

main();
