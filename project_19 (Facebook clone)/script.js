
var settingMenu = document.querySelector(".settings-menu");
var darkMoodEl = document.getElementById("darkMood");
let mood = true;

darkMoodEl.addEventListener("click", () => {
    if (mood) {
        darkMoodEl.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
        localStorage.setItem("theme", "dark"); // Set theme to dark
        mood = false;
    } else {
        darkMoodEl.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
        localStorage.setItem("theme", "light"); // Set theme to light
        mood = true;
    }
});

navProfileTougle = () => {
    settingMenu.classList.toggle("settings-menu-height");
};

// Initialize theme based on local storage
if (localStorage.getItem("theme") === "dark") {
    darkMoodEl.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
    mood = false;
} else {
    darkMoodEl.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
    mood = true;
}
