encrypter = (message) => {
  let encryptedMessage;

  let messageArr = message.split("");

  let encryptedMessageArr = [];

  for (let i = 0; i < messageArr.length; i++) {
    let letter;
    switch (messageArr[i]) {
      case "a":
        letter = "ai";
        break;
      case "e":
        letter = "enter";
        break;
      case "i":
        letter = "imes";
        break;
      case "o":
        letter = "ober";
        break;
      case "u":
        letter = "ufat";
        break;
      default:
        letter = messageArr[i];
    }
    encryptedMessageArr.push(letter);
    //console.log("Encripted message", encryptedMessageArr);
  }
  encryptedMessage = encryptedMessageArr.join("");
  return encryptedMessage;
};
/*
console.log(
  "Encrypted message: ",
  encrypter(
    "felicidades por enfrentar este desafio y haberlo concluido con exito!"
  )
  
);
*/

