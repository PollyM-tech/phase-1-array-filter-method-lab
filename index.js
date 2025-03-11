// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby'];

function findMatching(drivers, stringSearch) {
    return drivers.filter(driver => driver.toUpperCase() === stringSearch.toUpperCase() );
}
console.log(findMatching(drivers, 'Sammy'));
console.log(findMatching(drivers, 'Polly'));  



function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver =>
        driver.toUpperCase().startsWith(letters.toUpperCase())
    );
}
console.log(fuzzyMatch(drivers, 'A'));
console.log(fuzzyMatch(drivers, 'Sa'));
console.log(fuzzyMatch(drivers, 'Po'));



const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];
function matchName(driver, Name){
  return driver.filter(driver => driver.name === Name)
}
console.log(matchName(driver, 'Annette'));

