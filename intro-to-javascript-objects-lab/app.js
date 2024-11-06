// Existing game object definition
const game = {
    party: [],  // This will hold your party Pokémon
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
    difficulty: "Medium"  // Added in Exercise 3
};

// Log the entire game object to see its structure Exercise 2
console.log(game);


  // Load the pokemon array from data.js
const pokemon = require('./data.js');

// Inspect the structure and properties of the pokemon array
console.dir(pokemon, { maxArrayLength: null });  // Allows us to see the full array without truncation


// Exercise 4
// Select a starter Pokémon from the array
const starterPokemon = pokemon.find(p => p.starter === true);  // Finds the first starter Pokémon

// Add the selected starter to the game.party array
game.party.push(starterPokemon);

// Log the game object to check if the Pokémon was added
console.log("Exercise 4 - Updated Game:", game);


//Exercise 5
// Select three Pokémon based on specific attributes (example: high HP or specific type)
const additionalPokemon = [
    pokemon.find(p => p.number === 6),  // Charizard (Fire-type, high HP)
    pokemon.find(p => p.number === 9),  // Blastoise (Water-type, high HP)
    pokemon.find(p => p.number === 25)  // Pikachu (Electric-type, starter)
];

// Add these Pokémon to the game.party array
game.party.push(...additionalPokemon);  // Spread operator adds each Pokémon individually

// Log the updated party to verify
console.log("Exercise 5 - Party after adding more Pokémon:", game.party);


// Exercise 6
// Mark gyms with difficulty below 3 as completed
game.gyms.forEach(gym => {
    if (gym.difficulty < 3) {
        gym.completed = true;
    }
});

// Log the gyms to verify the updates
console.log("Exercise 6 - Gyms after updating completion status:", game.gyms);


// Exercise 7
// Evolve the starter Pokémon in the party (assumes the first Pokémon in the party is the starter)
const starterIndex = game.party.findIndex(p => p.starter === true);

// Replace the starter with its evolved form
if (starterIndex !== -1) {
    const evolvedForm = pokemon.find(p => p.number === game.party[starterIndex].number + 1);  // Find evolved version
    if (evolvedForm) {
        game.party.splice(starterIndex, 1, evolvedForm);  // Replace the current starter with the evolved form
    }
}

// Log the party to confirm the evolution
console.log("Exercise 7 - Party after evolving starter:", game.party);


// Exercise 8
// Print the name of each Pokémon in the party
console.log("Exercise 8 - Pokémon names in the party:");
game.party.forEach(p => console.log(p.name));


// Exercise 9
// Find all starter Pokémon in the array
const starterPokemonList = pokemon.filter(p => p.starter === true);

// Print the names of all starter Pokémon
console.log("Exercise 9 - All starter Pokémon:");
starterPokemonList.forEach(p => console.log(p.name));


// Exercise 10
// Add a method to the game object to catch a Pokémon
game.catchPokemon = function(pokemonObj) {
    // Add the given Pokémon object to the party
    this.party.push(pokemonObj);
};

// Call the method and pass a Pokémon object to test it
game.catchPokemon(pokemon.find(p => p.number === 52));  // Example: Catch Meowth

// Log the party to check if the Pokémon was added
console.log("Exercise 10 - Party after catching a Pokémon:", game.party);


// Exercise 11
// Modify the catchPokemon method to decrease pokeballs
game.catchPokemon = function(pokemonObj) {
    // Find the pokeball item
    const pokeball = this.items.find(item => item.name === "pokeball");
    if (pokeball) {
        pokeball.quantity--;  // Decrease the number of pokeballs
    }

    // Add the given Pokémon object to the party
    this.party.push(pokemonObj);
};

// Call the method and pass a Pokémon object to test it
game.catchPokemon(pokemon.find(p => p.number === 66));  // Example: Catch Machop

// Log the game items to verify pokeballs are decremented
console.log("Exercise 11 - Items after catching a Pokémon:", game.items);


// Exercise 12
// Mark gyms with difficulty below 6 as completed
game.gyms.forEach(gym => {
    if (gym.difficulty < 6) {
        gym.completed = true;
    }
});

// Log the gyms to verify the updates
console.log("Exercise 12 - Gyms after updating completion status:", game.gyms);


// Exercise 13
// Add a method to the game object to tally completed and incomplete gyms
game.gymStatus = function() {
    // Create a tally object to store counts
    const gymTally = {
        completed: 0,
        incomplete: 0
    };

    // Iterate through the gyms and update the tally
    this.gyms.forEach(gym => {
        if (gym.completed) {
            gymTally.completed++;
        } else {
            gymTally.incomplete++;
        }
    });

    // Log the tally object
    console.log("Exercise 13 - Gym Status:", gymTally);
};

// Call the gymStatus method to test it
game.gymStatus();


// Exercise 14
// Add a method to count the number of Pokémon in the party
game.partyCount = function() {
    // Return the length of the party array
    return this.party.length;
};

// Call the partyCount method and log the result
console.log("Exercise 14 - Number of Pokémon in the party:", game.partyCount());


// Exercise 15
// Mark gyms with difficulty below 8 as completed
game.gyms.forEach(gym => {
    if (gym.difficulty < 8) {
        gym.completed = true;
    }
});

// Log the gyms to verify the updates
console.log("Exercise 15 - Gyms after updating completion status for difficulty < 8:", game.gyms);


// Exercise 16
// Log the entire game object to review changes
console.log("Exercise 16 - Final game object state:", game);


// Exercise 17
// Sort the party by HP in descending order
game.party.sort((a, b) => b.hp - a.hp);

// Log the sorted party to verify the order
console.log("Exercise 17 - Party sorted by HP:", game.party);


// Exercise 18
// Add a collection property to the game object
game.collection = [];

// Update the catchPokemon method to manage party size
game.catchPokemon = function(pokemonObj) {
    const pokeball = this.items.find(item => item.name === "pokeball");
    if (pokeball && pokeball.quantity > 0) {
        pokeball.quantity--;  // Decrease the number of pokeballs

        if (this.party.length < 6) {
            // Add the Pokémon to the party if there's room
            this.party.push(pokemonObj);
        } else {
            // Add the Pokémon to the collection if the party is full
            this.collection.push(pokemonObj);
        }
    }
};

// Test the method by catching a Pokémon
game.catchPokemon(pokemon.find(p => p.number === 77));  // Example: Catch Ponyta

// Log the party and collection to verify
console.log("Exercise 18 - Party after catching a Pokémon:", game.party);
console.log("Exercise 18 - Collection after catching a Pokémon:", game.collection);
console.log("Exercise 18 - Items after catching a Pokémon:", game.items);


// Exercise 19
// Update the catchPokemon method to prevent catching without pokeballs
game.catchPokemon = function(pokemonObj) {
    const pokeball = this.items.find(item => item.name === "pokeball");
    if (pokeball && pokeball.quantity > 0) {
        pokeball.quantity--;  // Decrease the number of pokeballs

        if (this.party.length < 6) {
            this.party.push(pokemonObj);  // Add to party if room exists
        } else {
            this.collection.push(pokemonObj);  // Add to collection otherwise
        }
    } else {
        console.log("Not enough pokeballs to catch the Pokémon.");  // Display message
    }
};

// Test catching with no pokeballs
game.catchPokemon(pokemon.find(p => p.number === 142));  // Example: Catch Aerodactyl


// Exercise 20
// Update the catchPokemon method to accept a name as a parameter
game.catchPokemon = function(pokemonName) {
    const pokeball = this.items.find(item => item.name === "pokeball");
    if (pokeball && pokeball.quantity > 0) {
        const pokemonObj = pokemon.find(p => p.name.toLowerCase() === pokemonName.toLowerCase());

        if (pokemonObj) {
            pokeball.quantity--;  // Decrease the number of pokeballs

            if (this.party.length < 6) {
                this.party.push(pokemonObj);  // Add to party if room exists
            } else {
                this.collection.push(pokemonObj);  // Add to collection otherwise
            }
        } else {
            console.log("The selected Pokémon does not exist.");  // Handle invalid name
        }
    } else {
        console.log("Not enough pokeballs to catch the Pokémon.");  // Display message
    }
};

// Test the method by catching a Pokémon by name
game.catchPokemon("Pikachu");
game.catchPokemon("pikachu");  // Test with different casing

// Log the party to verify
console.log("Exercise 20 - Party after catching a Pokémon by name:", game.party);


// Exercise 21
// Create an object categorizing Pokémon by their type
const pokemonByType = pokemon.reduce((acc, p) => {
    if (!acc[p.type]) {
        acc[p.type] = [];  // Initialize an array for new types
    }
    acc[p.type].push(p);  // Add the Pokémon to the correct type array
    return acc;
}, {});

// Log the categorized object to verify
console.log("Exercise 21 - Pokémon categorized by type:", pokemonByType);
