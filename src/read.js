const fs = require('fs');
const xml2js = require('xml2js');

fs.readFile('./xml/data.xml', function(err, data) {
  if (err) throw err;

  xml2js.parseString(data, function(err, result) {
    if (err) throw err;

    const cars = result.cars.car;

    cars.forEach(function(car) {
      console.log('------------------------');
      console.log('ID: ' + car.$.id);
      console.log('Mark: ' + car.mark);
      console.log('Model: ' + car.model);
      console.log('Color: ' + car.color);
      console.log('------------------------');
    });
  });
});