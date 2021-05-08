const Recipes_Location = './Data/Recipes';
const Recipes_Drink_Location = `${Recipes_Location}/Drinks`;
const Recipes_Food_Location = `${Recipes_Location}/Foods`;



function Food(Info) {}



function AdultDrinks(Info) {
  
  let Drink_Name = Info;

  
  if(Drink_Name == 'undefined') {
    console.log(`Random Recipe`);
    return;
  }
  
  if(Drink_Name == 'Violet Dreams') {
    const DrinkData = require(`${Recipes_Drink_Location}/VioletDreams.json`);
    return DrinkData;
  }
  
}

module.exports = {
  Food,
  AdultDrinks
}