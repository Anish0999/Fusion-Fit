const routines = {
    leg: {
        0: [
            { name: "Squat", sets: 3, reps: 10 },
            { name: "Calf Raises", sets: 4, reps: 12 },
            { name: "Hip Thrust", sets: 3, reps: 15 }
        ],
        1: [
            { name: "Lunges", sets: 3, reps: 12 },
            { name: "Leg Press", sets: 4, reps: 10 },
            { name: "Leg Extension", sets: 3, reps: 12 }
        ],
        2: [
            { name: "Bulgarian Split Squat", sets: 3, reps: 10 },
            { name: "Hamstring Curl", sets: 4, reps: 12 },
            { name: "Goblet Squat", sets: 3, reps: 15 }
        ]
    },
    pull: {
        0: [
            { name: "Pull-Up", sets: 3, reps: 8 },
            { name: "Barbell Row", sets: 4, reps: 10 },
            { name: "Face Pull", sets: 3, reps: 12 }
        ],
        1: [
            { name: "Lat Pulldown", sets: 3, reps: 10 },
            { name: "Cable Row", sets: 4, reps: 10 },
            { name: "Bicep Curl", sets: 3, reps: 15 }
        ],
        2: [
            { name: "T-Bar Row", sets: 3, reps: 10 },
            { name: "Dumbbell Row", sets: 4, reps: 12 },
            { name: "Reverse Fly", sets: 3, reps: 15 }
        ]
    },
    push: {
        0: [
            { name: "Incline Dumbbell Press", sets: 3, reps: 10 },
            { name: "Arnold Press", sets: 4, reps: 12 },
            { name: "Close-Grip Bench Press", sets: 3, reps: 12 }
        ],
        1: [
            { name: "Push-Up", sets: 3, reps: 15 },
            { name: "Chest Fly", sets: 4, reps: 10 },
            { name: "Overhead Tricep Extension", sets: 3, reps: 12 }
        ],
        2: [
            { name: "Bench Press", sets: 3, reps: 10 },
            { name: "Shoulder Press", sets: 4, reps: 12 },
            { name: "Tricep Extension", sets: 3, reps: 12 }
        ]
    }
};

let legId = 0;
let pushId = 0;
let pullId = 0;

function showRoutineLeg() {
    
    const routine = routines['leg'][legId];
    const exerciseList = document.getElementById("excersise-list-leg");
    legId++;

    if(legId > 2) {
        legId = 0;
    }

    // Clear the existing list of exercises
    exerciseList.innerHTML = "";

    // Populate the list with exercises and their sets/reps
    routine.forEach(exercise => {
        const li = document.createElement("li");
        li.textContent = `${exercise.name} - ${exercise.sets} x ${exercise.reps}`;
        exerciseList.appendChild(li);
    });

    console.log(routines.size);
}

function showRoutinePush() {
    
    const routine = routines['push'][pushId];
    const exerciseList = document.getElementById("excersise-list-push");
    pushId++;

    if(pushId > 2) {
        pushId = 0;
    }

    // Clear the existing list of exercises
    exerciseList.innerHTML = "";

    // Populate the list with exercises and their sets/reps
    routine.forEach(exercise => {
        const li = document.createElement("li");
        li.textContent = `${exercise.name} - ${exercise.sets} x ${exercise.reps}`;
        exerciseList.appendChild(li);
    });

    console.log(routines.size);
}

function showRoutinePull() {
    
    const routine = routines['pull'][pullId];
    const exerciseList = document.getElementById("excersise-list-pull");
    pullId++;

    if(pullId > 2) {
        pullId = 0;
    }

    // Clear the existing list of exercises
    exerciseList.innerHTML = "";

    // Populate the list with exercises and their sets/reps
    routine.forEach(exercise => {
        const li = document.createElement("li");
        li.textContent = `${exercise.name} - ${exercise.sets} x ${exercise.reps}`;
        exerciseList.appendChild(li);
    });

    console.log(routines.size);
}

