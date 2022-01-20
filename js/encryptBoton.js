var encryptBoton = document.querySelector("#encryptBoton");

encryptBoton.addEventListener("click", function (event) {

    event.preventDefault();

    let text = document.querySelector("#messageToProcess");

    let messageToProcess = text.value;

    let message = encrypter(messageToProcess);

    if (messageToProcess == "") {
        alert("Type a message to encript");
    } else {
        console.log("Encripted Message: ", message);

        let messageProcessed = document.querySelector("#messageProcessed");

        messageProcessed.value = "Encrypted Message: " + message;

        //messageProcessed.value = message;
    }
    text.value = "";
});