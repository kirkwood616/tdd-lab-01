const translate = require("./translate.js");

describe("translate", function () {
  test("One word consonant", function () {
    expect(translate("fRaNk")).toEqual("ankfray");
  });

  test("One word vowel", function () {
    expect(translate("apPle")).toEqual("appleway");
  });

    test("One word vowel", function () {
    expect(translate("else")).toEqual("elseway");
  });

    test("One word vowel", function () {
    expect(translate("giraffe")).toEqual("iraffegay");
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

  test("Several words vowels", function () {
    expect(translate("Eat An Orange Out Of An Urn In Atlanta")).toEqual(
      "eatway anway orangeway outway ofway anway urnway inway atlantaway"
    );
  });
});
