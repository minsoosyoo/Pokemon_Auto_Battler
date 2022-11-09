const arr = [1, 3, 5, 7, 9, 10, 12, 13, 18, 21];

const result1 = arr.find(function(el){
    return el > 10;
});

const result2 = arr.find((el) => {
    return el > 10;
});

const result3 = arr.find(el => el > 10);

console.log(result1);
console.log(result2);
console.log(result3);

const pokemons = ["pikachu", "squirtle", "bulbasaur", "charmander", "gengar"];

const gengar = pokemons.find(function(pokemon){
    return pokemon == "gengar";
})

const bulbasaur = pokemons.find((pokemon) => {
    return pokemon == "bulbasaur";
})

const charmander = pokemons.find(pokemon => pokemon == "charmander");

console.log(gengar);
console.log(bulbasaur);
console.log(charmander);

// remove an element from an array
// arr.splice()
// arr.indexOf()

let index = pokemons.indexOf("squirtle");
console.log("index:", index);
const squirtle = pokemons[1];
pokemons.splice(1,1);
console.log(pokemons);