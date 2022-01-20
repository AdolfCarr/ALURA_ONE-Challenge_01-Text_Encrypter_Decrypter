decrypter = (message) => {
  let decryptedMessage;

  let messageArr = message.split("");

  let decryptedMessageArr = [];

  for (let i = 0; i < messageArr.length; i) {
    let letter;
    switch (messageArr[i]) {
      case "a":
        letter = "a";
        i += 2;
        break;
      case "e":
        letter = "e";
        i += 5;
        break;
      case "i":
        letter = "i";
        i += 4;
        break;
      case "o":
        letter = "o";
        i += 4;
        break;
      case "u":
        letter = "u";
        i += 4;
        break;
      default:
        letter = messageArr[i];
        i++;
    }
    decryptedMessageArr.push(letter);
    //console.log("Decripted message", decryptedMessageArr);
  }
  decryptedMessage = decryptedMessageArr.join("");
  return decryptedMessage;
};
/*
console.log(
  "Decrypted message: ",
  decrypter(
    "fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!"
  )
);
*/