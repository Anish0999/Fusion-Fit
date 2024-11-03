// workouts database
const workouts = {
    Push: [
        { name: "Bench Press", description: "A compound exercise targeting the chest, shoulders, and triceps." },
        { name: "Overhead Shoulder Press", description: "Targets the shoulders and triceps." },
        { name: "Incline Dumbbell Press", description: "Emphasizes the upper chest and shoulders." },
        { name: "Tricep Dips", description: "Focuses on the triceps and chest." },
        // { name: "Lateral Raises", description: "Isolates the lateral deltoids for shoulder growth." }
    ],
    Pull: [
        { name: "Pull-Ups", description: "An upper body compound exercise targeting the back and biceps." },
        { name: "Lat Pulldown", description: "Works the lats and upper back." },
        { name: "Barbell Row", description: "Engages the back, biceps, and core." },
        { name: "Bicep Curls", description: "Isolates the biceps for arm strength." },
        // { name: "Face Pulls", description: "Targets the rear deltoids and upper back." }
    ],
    Legs: [
        { name: "Squats", description: "A fundamental lower body exercise working the quads, glutes, and core." },
        { name: "Leg Press", description: "Targets the quadriceps, hamstrings, and glutes." },
        { name: "Lunges", description: "Strengthens the legs and improves balance." },
        { name: "Leg Extensions", description: "Isolates the quadriceps." },
        // { name: "Calf Raises", description: "Focuses on the calf muscles." }
    ]
};

function showWorkouts() {
    const category = document.getElementById("category").value;
    const resultsDiv = document.getElementById("results");

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Display workouts for the selected category
    if (category && workouts[category]) {
        const workoutList = workouts[category]
            .map((workout, index) => `
                <div class="e-item">
                    <strong>${workout.name}</strong><br>
                    <button onclick="toggleDescription(${index})" class="learn-more-btn">Learn More</button>
                    <div id="description-${index}" class="description-box" style="display: none;">
                        ${workout.description}
                    </div>
                </div>
            `)
            .join('');

        resultsDiv.innerHTML = workoutList;
    }
}

// Function to toggle the display of the description
function toggleDescription(index) {
    const descriptionBox = document.getElementById(`description-${index}`);
    descriptionBox.style.display = descriptionBox.style.display === 'none' ? 'block' : 'none';
}

