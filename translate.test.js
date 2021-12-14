const translate = require("./translate.js");

describe("translate", function () {
  test("One word", function () {
    expect(translate("fRaNk")).toEqual("ankfray");
  });

  test("Two words", function () {
    expect(translate("iMpOsTeR sYnDrOmE")).toEqual("imposterway omesyndray");
  });

  test("Three words", function () {
    expect(translate("CREATURE feature NIGHT")).toEqual(
      "eaturecray eaturefay ightnay"
    );
  });

  test("Several words", function () {
    expect(translate("My MilkShake Brings All The Boys To THE yARD")).toEqual(
      "myay ilkshakemay ingsbray allway ethay oysbay otay ethay ardyay"
    );
  });
});
