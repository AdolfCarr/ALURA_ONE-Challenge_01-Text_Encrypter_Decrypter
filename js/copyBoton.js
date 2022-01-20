var copyBoton = document.querySelector("#copyBoton");

copyBoton.addEventListener("click", function (event) {
    event.preventDefault();
    var copyText = document.querySelector("#messageProcessed");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);

    if (copyText.value == "") {
        alert("First enter a message to be processed");
    } else {
        alert("Copied the text: " + copyText.value);
    }
});



