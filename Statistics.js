const goalList = document.getElementById("goals-list");

const defaultGoals = [
    { text: "Walk 10,000 steps", progress: 50 }, 
    { text: "Drink 1 gallon of water everyday for a week", progress: 80 } 
];

function addGoal(text, initialProgress) {

    // Create a list item for the goal
    const li = document.createElement("li");
    li.className = "goal-item";

    console.log(text);

    // Goal text
    const span = document.createElement("span");
    span.className = "goal-text";
    span.textContent = text;
    li.appendChild(span);

    // Progress slider
    const slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0";
    slider.max = "100";
    slider.value = initialProgress;
    slider.className = "goal-slider";
    li.appendChild(slider);

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "X";
    deleteBtn.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteBtn);

    // Add the goal to the list
    goalList.appendChild(li);

}

function initializeDefaultGoals() {
    defaultGoals.forEach(goal => addGoal(goal.text, goal.progress));
}

function handleAddGoal() {

    const goalInput = document.getElementById("goal-input");
    const goalText = goalInput.value.trim();

    console.log(goalText);

    if (goalText === "") {
        alert("Please enter a goal");
        return;
    }

    addGoal(goalText, 0);

    goalInput.value = "";
}

document.addEventListener("DOMContentLoaded", initializeDefaultGoals);