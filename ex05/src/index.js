var myPetsArray = [

    {

        animalType: "Dog",
        name: [

            "Pujdo"
        ]
    },
    {
        animalType: "Cat",
        name: [

            "Maca"
        ]
    },
    {
        animalType: "Bird",
        name: [

            "Tweety"
        ]
    }
];

function myPetsFunction(pets){

    return pets[1].name[0];
}

myPetsFunction(pets);

module.exports = myPetsFunction;
module.exports.myPets = myPetsArray;

