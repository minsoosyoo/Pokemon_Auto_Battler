// Computer chooses a random number, between 1 and max;
function randomNumber(max,min){
    var nb = min +(max-min+1) * Math.random();
    return Math.floor(nb);
}

// Check Name
function checkName(name) {
    if (name.length == 0) {
        return false;
    } else if (parseInt(name)) {
        return false;
    } else if (name == null || name == 0) {
        return false;
    } else {
        return true;
    }
}

// Two Pokemon Objects For Testing Purposes
var pokemonABC = {
    name: "ABC",
    hp: 1000,
    type: "fire",
    healthy: {
        remainingTurns: 0,
        damagePerTurn: 0
    },
}

var pokemonDEF = {
    name: "DEF",
    hp: 1000,
    type: "water",
    healthy: {
        remainingTurns: 0,
        damagePerTurn: 0
    },
}

//Damage over Time function - returns 
function dot(pokemon, damage) {
    let turns = pokemon.healthy.remainingTurns = randomNumber(10, 3); //the dot damage lasts between 3 and 10 turns
    pokemon.health.damagePerTurn = Math.floor(damage / turns); //determines strength of the damage per turn
}
// if remaining turns > 0, then apply damagePerTurn (pokemon.HP - pokemon.health.damagePerTurn)

//attack ability of all Pokemons
function attacked(pokemon) {             
    let damage = randomNumber(100, 50);
    let attackChoice = randomNumber(5, 1);
    //regular damage
    if (attackChoice == 1) {  
        pokemon.hp = pokemon.hp - damage;
        console.log(`PokemonA's attack did ${damage} to PokemonB! PokemonB has ${pokemon.hp} HP left!`);
    //critical hit!
    } else if (attackChoice == 2) {    
        damage = damage * 2;
        pokemon.hp = pokemon.hp - damage;
        console.log(`CRITICAL HIT! PokemonA's attack did ${damage} to PokemonB! PokemonB has ${pokemon.hp} HP left!` );
    //damage over time
    } else if (attackChoice == 3) {      
        pokemon.dot(pokemon, damage);
        console.log(`PokemonA's attack applied a Damage Over Time attack on PokemonB! PokemonB will take ${pokemon.health.damagePerTurn} every turn for ${pokemon.healthy.remainingTurns}`)
    //glancing blow
    } else if (attackChoice == 4) {
        damage = Math.floor(damage * 0.6);
        pokemon.hp = pokemon.hp - damage;
        console.log(`PokemonA's attack was partially blocked! PokemonA's attack did ${damage} to PokemonB! PokemonB has ${PokemonB.Health} HP left!`);
    //attack failed!
    } else {
        damage = 0;
        pokemon.hp = pokemon.hp - damage;
        console,log(`PokemonA's attack missed!`);
    }
}


   
