//function to generate random number between 0 and 4 - working
let randomNum = () => {
    var number = Math.floor(Math.random() * 5);
    return number;
};



//object of arrays of name, creature, power
let avator_inputs = {
    name: ["Theodora", "Andromeda", "Delphine", "Elora", "Trixabelle"],
    creature: ["Unicorn", "Fairy", "Elf", "Mermaid", "Nymph"],
    power: ["Telekinesis", "Pyrokinesis", "Teleportation", "Invisibility", "Super Strength"]
};



//function to randomly select name, creature and power and input it into a message and return
let avator_generator = () => {
    let random_Name = avator_inputs.name[randomNum()];
    let random_Creature = avator_inputs.creature[randomNum()];
    let random_Power = avator_inputs.power[randomNum()];

    console.log(`You are a mythical being from another realm and your name is ${random_Name}. You are a magical ${random_Creature} and your unique power is ${random_Power}. Now go and enjoy the magical realm!!`);



}

avator_generator();
