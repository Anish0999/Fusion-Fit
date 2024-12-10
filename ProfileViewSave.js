window.onload = main; 
function main() {
    if (document.getElementById("SaveButton")) {
        document.getElementById("SaveButton").addEventListener("click", saveInfo);
    }

    if (document.getElementById("userheightdisplay")) {
        displayInfo();
    }
}

function saveInfo() {
    let usrheight = document.getElementById("userheight").value;
    let usrweight = document.getElementById("userweight").value;
    let usrexperienceLevel = document.getElementById("experienceLevel").value;
    let usrnotes = document.getElementById("userNotes").value;

    sessionStorage.setItem("userHeight", usrheight);
    sessionStorage.setItem("userWeight", usrweight);
    sessionStorage.setItem("experienceLevel", usrexperienceLevel);
    sessionStorage.setItem("userNotes", usrnotes);
    alert("Profile Info Saved");
}

function displayInfo() {
    let usrheight = sessionStorage.getItem("userHeight");
    let usrweight = sessionStorage.getItem("userWeight");
    let usrexperienceLevel = sessionStorage.getItem("experienceLevel");
    let usrnotes = sessionStorage.getItem("userNotes");

    // let feet = Math.floor(usrheight / 12);
    // let inches = usrheight % 12;
    let feet = Number((usrheight / 12).toFixed(1));
    let inches = Number((usrheight % 12).toFixed(1));


    let displayFeetInches = feet + " feet " + inches + " inches";

    let bmi = sessionStorage.getItem("bmiResult");
    document.getElementById("userheightdisplay").textContent = displayFeetInches;
    document.getElementById("userweightdisplay").textContent = usrweight;
    document.getElementById("userexperienceleveldisplay").textContent = usrexperienceLevel;
    document.getElementById("usernotesdisplay").textContent = usrnotes;
    
    document.getElementById("bmidisplay").textContent = bmi;
}
