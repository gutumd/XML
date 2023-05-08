const fs = require("fs");
const xml2js = require("xml2js");

fs.readFile("./xml/data.xml", function (err, data) {
  if (err) throw err;

  xml2js.parseString(data, function (err, result) {
    if (err) throw err;

    //New Car
    const newCar = {
      $: { id: "4" },
      mark: ["Tesla"],
      model: ["MODEL-S"],
      color: ["Blue"],
    };
    result.cars.car.push(newCar);

    const builder = new xml2js.Builder();
    const xml = builder.buildObject(result);

    fs.writeFile("./xml/data.xml", xml, function (err) {
      if (err) throw err;

      console.log("XML file has been updated!");
    });
  });
});
