// theme button change the dark and light mode
let theme = document.querySelector("#theme");
let savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    theme.textContent = "☀";
} else {
    theme.textContent = "🌙";
}

theme.addEventListener('click', function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        theme.textContent = "☀";
        localStorage.setItem("theme", "dark");
    }
    else{
        theme.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }
})

// for the model/profile section
