const riordina = (str) => {
    let arr = str.split(" ");
    let newArr = arr.map(word => {
      let regex = /[1-9]/;
      let index = word.search(regex);
      let letter = word[index];
      word = word.replace(letter, "");
      return {
        word: word,
        index: parseInt(letter)
      };
    });
    newArr.sort((a, b) => (a.index > b.index ? 1 : -1));
    return newArr.map(a => a.word).join(" ");
  };
  
  console.log(riordina("Pogl4iani Meno1 b7ravo ma2le 5è c3he così6")); // Meno male che Pogliani è così bravo