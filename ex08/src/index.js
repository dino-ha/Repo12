var contacts = [

    {

        "firstName": "John",
        "lastName": "Doe",
        "number": "12365495208",
        "likes": [

            "C",
            "C++",
            "C#"
        ]
    },
    {
        "firstName": "Jane",
        "lastName": "Doe",
        "number": "4568295761",
        "likes": [

            "Python",
            "Swift",
            "R"
        ]

    },
    {

        "firstName": "Richard",
        "lastName": "Roe",
        "number": "6938257149",
        "likes": [

            "React",
            "Angular",
            "Vue"
        ]
    },
    {

        "firstName": "Jane",
        "lastName": "Roe",
        "number": "unknown",
        "likes": [

            "Javascript",
            "Node",
            "HTML & CSS"
        ]
    }
];

function lookUpProfile(name, prop){

if (contacts.filter(name) && contacts.filter(prop)){

    return contacts.name.prop;
    
}
else {

    return "No such contact";
}


}

console.log(lookUpProfile("John", likes));

module.exports = lookUpProfile;