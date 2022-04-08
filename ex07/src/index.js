var collection = {

    2548: {

        album: "Slippery when wet",
        artist: "Bon Jovi",
        tracks: [

            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {

        album: "1999",
        artist: "Prince",
        tracks: [

            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {

        artist: "Robert Palmer",
        tracks: [ ]
    }
};

var oldCollection = JSON.parse(JSON.stringify(collection));

function updateRecords(object, id, prop, value){

    collection[object][id][prop] = collection.push(value);
    return collection;
}

console.log(updateRecords(collection, id, prop, value));

module.exports = updateRecords;