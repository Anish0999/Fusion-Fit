const friendsList = document.getElementById("friends-list");

function addFriend(name) {

    const friendDiv = document.createElement("div");
    friendDiv.className = "friend-item";

    const friendName = document.createElement("span");
    friendName.className = "friend-name";
    friendName.textContent = name;
    friendDiv.appendChild(friendName);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function() {
        friendDiv.remove();
    };
    friendDiv.appendChild(deleteBtn);

    friendsList.appendChild(friendDiv);
}

function handleAddFriend() {
    const friendInput = document.getElementById("friend-input");
    const friendName = friendInput.value.trim();

    if (friendName === "") {
        alert("Please enter a friend's name");
        return;
    }

    addFriend(friendName);
    friendInput.value = "";
}

// Add Default Friends Here
document.addEventListener("DOMContentLoaded", () => {
    addFriend("Robert Downey Jr.");
    addFriend("Scarlett Johansson");
    addFriend("Chris Hemsworth");
    addFriend("Emma Stone");
    addFriend("Dwayne Johnson");
    addFriend("Jennifer Lawrence");
});
