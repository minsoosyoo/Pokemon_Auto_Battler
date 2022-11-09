// POKEMON GAME //
/* 
Pokemon Selection
> There are 6 Pokemons Choose Your Roster
> 2 Players - Player 1 and Player 2
A. Roll Dice - If Number > 50, Player 1 chooses first, else Player 2 chooses first
1. First Player Choose Your Pokemon (Each Pokemon is an Object)
2. Second Player Choose Their Pokemon
3. Alternate Picking Until All Pokemons are Selected (Each Player has 3 Pokemons)


4. First Player Chooses their First Pokemon (from their own roster) to Summon
5. Second Player Chooses their First Pokemon (from their own roster) to Summon

6. Battle Loop (Both Pokemons attack at the same time)
        First Player or Second Player Pokemon's HP reaches 0, ends loop
        This Player is assigned value: newLoser

7. newLoser Chooses New Pokemon from their roster, starts Battle Loop again
8. If newLoser cannot choose a Pokemon then, end game - Game Ends - Declare Winner and Loser

*/

//Create 6 Pokemons

const START_HP = 300;

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
    hp: START_HP,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonLight = {
    name: "Lit",
    hp: START_HP,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonFire = {
    name: "Fiery",
    hp: START_HP,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonWater = {
    name: "Bubbles",
    hp: START_HP,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonEarth = {
    name: "Grounder",
    hp: START_HP,
    type: "Dark",
    healthy: {
            remainingTurns: 0,
            damagePerTurn: 0
    },
}

var pokemonThunder = {
    name: "Zaps",
    hp: START_HP,
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
    name: "",
    roster: [],
    diceRoll: 0,
    record: {
        win: 0,
        loss: 0
    }
}

// Player 2
var player2 = {
    name: "",
    roster: [],
    diceRoll: 0,
    record: {
        win: 0,
        loss: 0
    }
}

// Battlefield
var battlefield = []; //array of 2 pokemons, 1 from player 1 and 1 from player 2


// Picks a Pokemon from an array of Pokemons and removes that Pokemon from the array
function pickPokemon(pokemonName, pokemons) {
    for (let pokemon of pokemons) {
        if (pokemonName == pokemon.name) {
           pokemons.splice(pokemons.indexOf(pokemon), 1);
           return pokemon; 
        }
    }
}

// Draft for Pokemons using pickPokemon Function
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

//battle between two pokemons
// function battle (pokemon1, pokemon2) {
//     attacked(pokemon1);
//     attacked(pokemon2);
// }

//attacked per turn
function attacked(pokemonAttacker, pokemonAttacked) {             
    let damage = randomNumber(100, 50);
    let attackChoice = randomNumber(5, 1);
    //regular damage
    if (attackChoice == 1) {  
        pokemonAttacked.hp = pokemonAttacked.hp - damage;
        console.log(`${pokemonAttacker.name}'s attack did ${damage} to ${pokemonAttacked.name}! ${pokemonAttacked.name} has ${pokemonAttacked.hp} HP left!`);
        alert(`${pokemonAttacker.name}'s attack did ${damage} to ${pokemonAttacked.name}! ${pokemonAttacked.name} has ${pokemonAttacked.hp} HP left!`);
    //critical hit!
    } else if (attackChoice == 2) {    
        damage = damage * 2;
        pokemonAttacked.hp = pokemonAttacked.hp - damage;
        console.log(`CRITICAL HIT! ${pokemonAttacker.name}'s attack did ${damage} to ${pokemonAttacked.name}! ${pokemonAttacked.name} has ${pokemonAttacked.hp} HP left!`);
        alert(`CRITICAL HIT! ${pokemonAttacker.name}'s attack did ${damage} to ${pokemonAttacked.name}! ${pokemonAttacked.name} has ${pokemonAttacked.hp} HP left!`);
    //damage over time
    } else if (attackChoice == 3) {      
        damage = 0;
        pokemonAttacked.hp = pokemonAttacked.hp - damage;
        console.log(`${pokemonAttacker.name}'s attack missed!`);
        alert(`${pokemonAttacker.name}'s attack missed!`);
        // damage = damage * 3;
        // dot(pokemon, damage);
        // pokemon.hp -= pokemon.health.damagePerTurn;
        // console.log(`PokemonA's attack applied a Damage Over Time attack on ${pokemonAttacked.name}! ${pokemonAttacked.name} will take ${pokemon.health.damagePerTurn} every turn for ${pokemon.healthy.remainingTurns}`)
        // alert(`PokemonA's attack applied a Damage Over Time attack on ${pokemonAttacked.name}! ${pokemonAttacked.name} will take ${pokemon.health.damagePerTurn} every turn for ${pokemon.healthy.remainingTurns}`);    
    //glancing blow
    } else if (attackChoice == 4) {
        damage = Math.floor(damage * 0.6);
        pokemonAttacked.hp = pokemonAttacked.hp - damage;
        console.log(`${pokemonAttacker.name}'s attack was partially blocked! ${pokemonAttacker.name}'s attack did ${damage} to ${pokemonAttacked.name}! ${pokemonAttacked.name} has ${pokemonAttacked.hp} HP left!`);
        alert(`${pokemonAttacker.name}'s attack was partially blocked! ${pokemonAttacker.name}'s attack did ${damage} to ${pokemonAttacked.name}! ${pokemonAttacked.name} has ${pokemonAttacked.hp} HP left!`);
    //attack failed!
    } else {
        damage = 0;
        pokemonAttacked.hp = pokemonAttacked.hp - damage;
        console.log(`${pokemonAttacker.name}'s attack missed!`);
        alert(`${pokemonAttacker.name}'s attack missed!`);
    }
}

function pokemonAutoBattle(player1, player2) {
    let player1summon = {};
    let player2summon = {};
    let winner = {};
    let player1pokemons = "";
    let player2pokemons = "";
    let c = player1.roster.length;
    let d = player2.roster.length;

    // player 1 picks Pokemon from player1.roster
    msg = `Choose a New Pokemon To Enter the Battle!`;
    player1summon = pickPokemon(prompt(msg), player1.roster);
    console.log("player 1 roster: ", player1.roster);
    console.log("player 1 summons: ", player1summon);
    msg = `Player 1 has chosen ${player1summon.name}`;
    
    // player 2 picks Pokemon from player2.roster
    msg = `Choose a New Pokemon To Enter the Battle!`;
    player2summon = pickPokemon(prompt(msg), player2.roster);
    console.log("player 2 roster: ", player2.roster);
    console.log("player 2 summons: ", player2summon);
    msg = `Player 2 has chosen ${player2summon.name}`;
    
    // while player1 or player2 has a pokemon available
    let turnCount = 0;
    // Battle within the Battlefield
    // while pokemon.hp of a pokemon within battlefield (array) is > 0, 
    do {    
        // battle(player1summon, player2summon);
        attacked(player1summon, player2summon);
        // if player2's pokemon died, player 2 chooses a new pokemon    
        if (player2summon.hp <= 0) {
            pickPokemon(player2summon, player2.roster);
            // for (let i=0; i<d; i++) {
            //     player2pokemons += player2.roster[i].name + ", ";
            // }
            msg = `${player2.name}, your pokemon has suffered defeat! Choose a new pokemon! These are your pokemons available: `;
            player2summon = pickPokemon(prompt(msg), player2.roster);
            console.log(`Player 2 has chosen ${player2summon.name}`);
            alert(`Player 2 has chosen ${player2summon.name}`);
        }

        attacked(player2summon, player1summon);
        // if player1's pokemon died, player 1 chooses a new pokemon
        if (player1summon.hp <= 0) {
            pickPokemon(player1summon, player1.roster);
            // for (let i=0; i<c; i++) {
            //     player1pokemons += player1.roster[i].name + ", ";
            // }
            msg = `${player1.name}, your pokemon has suffered defeat! Choose a new pokemon! These are your pokemons available: `;
            player1summon = pickPokemon(prompt(msg), player1.roster);
            console.log(`Player 1 has chosen ${player1summon.name}`);
            alert(`Player 1 has chosen ${player1summon.name}`);
        }

        // If Pokemon has damage over time applied, damage until remainingTurns hits 0
        // if (player1summon.healthy.remainingTurns > 0) {
        //     player1summon.healthy.remainingTurns--;
        // }
        // else if (player1summon.healthy.remainingTurns == 0) {
        //     player1summon.healthy.damagePerTurn = 0;
        // }

        // if (player2summon.healthy.remainingTurns > 0) {
        //     player2summon.healthy.remainingTurns--;
        // }
        // if (player2summon.healthy.remainingTurns == 0) {
        //     player2summon.healthy.damagePerTurn = 0;
        // }

        turnCount++;

    
    } while ((player1.roster.length > 0 || player2.roster.length > 0) && (player1summon.hp > 0 || player2summon.hp > 0));
    
    msg = `The Battle was fierce! It took ${turnCount} turns! At last we have a winner...`;
    console.log(msg);
    
    //whoever has no pokemons left, is the loser
    if (player1.roster.length == 0) {
        player1.record.loss++;
        player2.record.win++;
        winner = player2;
    } else {
        player2.record.loss++;
        player1.record.win++;
        winner = player1;
    }
    return winner;
}

// //Damage over Time function - returns
// function dot(pokemon, damage) {
//     pokemon.health.damagePerTurn = Math.floor(damage / turns); //determines strength of the damage per turn
//     pokemon.healthy.remainingTurns = pokemon.healthy.remainingTurns + randomNumber(10, 3); //the dot damage lasts between 3 and 10 turns
// }
// if remaining turns > 0, then apply damagePerTurn (pokemon.HP - pokemon.health.damagePerTurn)




function playGame() {
    let msg = "Welcome to the Pokemon Arena, Choose Your Pokemons!";
    console.log(msg);

    msg = "Player 1, enter your name!"
    player1.name = prompt(msg);
    console.log(`Welcome to the Arena ${player1.name}!`);

    msg = "Player 2, enter your name!"
    player2.name = prompt(msg);
    console.log(`Welcome to the Arena ${player2.name}!`);

    // msg = "Dice is Rolling...";
    // console.log(msg);
    // msg = "Winner of the Roll will Choose The First Pokemon!"
    // player1.dice = randomNumber(100, 0);
    // player2.dice = randomNumber(100, 0);

    choosingPokemon(player1, player2, pokemons);
    console.log("=======player 1's Roster=======")
    console.log(player1.roster);
    console.log("=======player 2's Roster=======")
    console.log(player2.roster);

    let winner = pokemonAutoBattle(player1, player2);

    msg = `The Winner is ${winner.name}`
    console.log(msg);
    msg = `${winner.name}'s record is ${winner.record.win} wins and ${winner.record.loss}`;
    console.log(msg);
}

// Game Start
do {
    playGame();
    if (confirm("Do You Want to Play Again?!")) {
        continuePlay = true;
    }    
} while (continuePlay);    


// Pokemon Selection
// > There are 6 Pokemons Choose Your Roster
// > 2 Players - Player 1 and Player 2
// A. Roll Dice - If Number > 50, Player 1 chooses first, else Player 2 chooses first
// 1. First Player Choose Your Pokemon (Each Pokemon is an Object)
// 2. Second Player Choose Their Pokemon
// 3. Alternate Picking Until All Pokemons are Selected (Each Player has 3 Pokemons)

// Pokemon Selection

