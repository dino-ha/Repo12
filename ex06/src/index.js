function myNes(){

    var myStorage = {

        "car": {

            "inside": {

                "glove box": "maps",
                "passenger seat": "crumbs" //TODO: kill the passengers
            },
            "outside": {

                "trunk": "jack"
            }
        }
    };

    var gloveBoxContents = myStorage.car.inside["glove box"];
    console.log(gloveBoxContents);
    return gloveBoxContents;
}