var decryptBoton = document.querySelector("#decryptBoton");

decryptBoton.addEventListener("click", function (event) {
 
    event.preventDefault();

    let text = document.querySelector("#messageToProcess");

    let messageToProcess = text.value;

    let message = decrypter(messageToProcess);

    if (messageToProcess == "") {
        alert("Type a message to decript");
    } else {
        console.log("Decripted Message: ", message);

        let messageProcessed = document.querySelector("#messageProcessed");

        //messageProcessed.value = "Decrypted Message: " + message;

        messageProcessed.value = message;
    }
    text.value = "";
})