// theme button change the dark and light mode
let theme = document.querySelector("#theme");
theme.addEventListener('click', function(){
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
        theme.textContent = "☀";
    }
    else{
        theme.textContent = "🌙";
    }
})

// for the model/profile section
