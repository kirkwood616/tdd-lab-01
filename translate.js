function translate(inputPhrase) {
  const vowels = ["a", "e", "i", "o", "u"];
  let phrase = inputPhrase.toLowerCase(); //TO LOWERCASE
  let vowelIndex = 0; //INDEX OF FIRST VOWEL IN WORD
  let phraseArray = phrase.split(" "); //PHRASE TO ARRAY
  let pigPhrase = []; //PIG LATIN PHRASE ARRAY

  for (let i = 0; i < phraseArray.length; i++) {
    let firstLetter = phraseArray[i].charAt(0); //FIRST LETTER OF WORD
    if (vowels.includes(firstLetter)) {
      let vowelPig = phraseArray[i].concat("way"); //ADD "WAY" TO END
      pigPhrase.push(vowelPig); //PUSH TO PIG LATIN PHRASE
    } else {
      for (const char of phraseArray[i]) {
        if (vowels.includes(char)) {
          vowelIndex = phraseArray[i].indexOf(char);
          break;
        }
      }
      let consPig =
        phraseArray[i].slice(vowelIndex) +
        phraseArray[i].slice(0, vowelIndex) +
        "ay";
      pigPhrase.push(consPig);
    }
  }
  return pigPhrase.join(" ");
}

module.exports = translate;
