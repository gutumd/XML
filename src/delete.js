const fs = require("fs");
const xml2js = require("xml2js");

fs.readFile("./xml/data.xml", function (err, data) {
  if (err) throw err;

  xml2js.parseString(data, function (err, result) {
    if (err) throw err;

    //Delete
    delete result.cars.car[3];
    //

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    fs.writeFile("./xml/data.xml", xml, function (err) {
      if (err) throw err;

      console.log("XML file has been updated!");
    });
  });
});
