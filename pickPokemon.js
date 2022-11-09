// Computer chooses a random number, between 1 and max;
function randomNumber(max,min){
    var nb = min +(max-min+1) * Math.random();
    return Math.floor(nb);
}

//checkName(name) returns false if name is not a valid name
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

//Pokemon Choices
var pokemonDark = {
    name: "Dusty",
    hp: 1000,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonLight = {
    name: "Lit",
    hp: 1000,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonFire = {
    name: "Fiery",
    hp: 1000,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonWater = {
    name: "Bubbles",
    hp: 1000,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonEarth = {
    name: "Grounder",
    hp: 1000,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonThunder = {
    name: "Zaps",
    hp: 1000,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}
// List of Pokemons to Choose From
var pokemons = [pokemonDark, pokemonLight, pokemonFire, pokemonWater, pokemonEarth, pokemonThunder];

// Player 1
var player1 = {
    name: "Minsoo",
    roster: [],
    diceRoll: 100,
    record: {
        win: 0,
        loss: 0
    }
}

// Player 2
var player2 = {
    name: "Scott",
    roster: [],
    diceRoll: 0,
    record: {
        win: 0,
        loss: 0
    }
}

// var pokemons = [pokemonDark, pokemonLight, pokemonFire, pokemonWater, pokemonEarth, pokemonThunder];
function pickPokemon(pokemonName, pokemons) {
    for (let pokemon of pokemons) {
        if (pokemonName == pokemon.name) {
           pokemons.splice(pokemons.indexOf(pokemon), 1);
           return pokemon; 
        }
    }
}

function choosingPokemon(player1, player2, pokemons) {
    
    let playerChoice = "";
    let list = "";
    let msg = "";

    do {
        console.log("hi"); //making sure this loop is looping
        
        list ="";
        for (let i=0; i<pokemons.length; i++) {
            list+=pokemons[i].name + ", ";
        }
        msg = `Choose Your Pokemon!
        These Are the List of Pokemons Remaining: ${list}`;

        playerChoice = prompt(msg);
        player1.roster.push(pickPokemon(playerChoice, pokemons));
        console.log("player roster1: ", player1.roster);
        console.log("Remaining Pokemons: ", pokemons);

        list ="";
        for (let i=0; i<pokemons.length; i++) {
            list+=pokemons[i].name + ", ";
        }
        msg = `Choose Your Pokemon!
        These Are the List of Pokemons Remaining: ${list}`;

        playerChoice = prompt(msg);
        player2.roster.push(pickPokemon(playerChoice, pokemons));
        console.log("player roster2: ", player2.roster);
        console.log("Remaining Pokemons: ", pokemons);
    }    
    while (pokemons.length > 0)
}

choosingPokemon(player1, player2, pokemons);