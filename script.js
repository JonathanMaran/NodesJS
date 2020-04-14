var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({search: 'San Francisco, CA', degreeType: 'F'}, function (err, result) {
    if (err) console.log(err);

    let {
        current:
            {
                skytext,
                temperature
            }
    } = result[0]; // le résultat est dans la variable result, c'est un tableau donc on parcourt avec [ ]

    console.log(skytext);
    console.log(temperature);
});