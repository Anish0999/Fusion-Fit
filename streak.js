function openPopup() {
    document.getElementById("popup-form").style.display = "block";
}

function closePopup() {
    document.getElementById("popup-form").style.display = "none";
}

function sendMessage() {
    const email = document.getElementById("friend-email").value;
    const message = document.getElementById("friend-message").value;

    if (email === "" || message === "") {
        alert("Please enter both an email and a message.");
        return;
    }

    alert(`Message sent to ${email}:\n"${message}"`);

    document.getElementById("friend-email").value = "";
    document.getElementById("friend-message").value = "";

    closePopup();
}
