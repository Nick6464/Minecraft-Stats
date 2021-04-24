const PublicGoogleSheetsParser = require("public-google-sheets-parser");

const spreadsheetId = "17zo5TRXxyMkAJ4WQBMmXey6jMMsHcnwA-ULVeM5YXsc";

//Create Parser linked to the Public Sheet
const parser = new PublicGoogleSheetsParser(spreadsheetId);

//Testing for output
parser.parse().then((items) => {
  proccessSheet(items);
});

function proccessSheet(sheetData){
    let dataByColunms = columnSpliter(items);
}

//Takes the spread sheet and spilts it into lists based on the column
function columnSpliter(sheet) {
  let columns = {
    world: [],
    time: [],
    village: [],
    biome: [],
    diamonds: [],
    causeOfDeath: [],
    deathLocation: [],
    deadPlayer: [],
    numberOfPlayers: [],
    playerNames: [],
    gearTier: [],
    timeToNether: [],
    netherite: [],
    timeToEnd: [],
    pinkSheep: [],
    babyJockey: [],
    nightsSpentAwake: [],
    nightsSlept: [],
    petsTamed: [],
    notes: [],
  };
  sheet.forEach((element) => {
    columns.world.push(element['World']);
    columns.time.push(element['Time']);
    columns.village.push(element['Village']);
    columns.biome.push(element['Biome']);
    columns.diamonds.push(element['Diamonds']);
    columns.causeOfDeath.push(element['Cause of Death']);
    columns.deathLocation.push(element['Location of Death']);
    columns.deadPlayer.push(element['Player Who Died']);
    columns.numberOfPlayers.push(element['# Of Player']);
    columns.playerNames.push(element['List of Players']);
    columns.gearTier.push(element['Final Gear']);
    columns.timeToNether.push(element['Time to Nether']);
    columns.netherite.push(element['Netherite']);
    columns.timeToEnd.push(element['Time to End']);
    columns.pinkSheep.push(element['Pink Sheep']);
    columns.babyJockey.push(element['Baby Jockey']);
    columns.nightsSpentAwake.push(element['Nights Spent Awake']);
    columns.nightsSlept.push(element['Times Slept']);
    columns.petsTamed.push(element['Pets Tamed']);
    columns.notes.push(element['World Notes']);
  });
  return columns;
}
