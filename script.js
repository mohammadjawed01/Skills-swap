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
let modelShow = document.querySelector(".model-bg");
let teachSkills = document.querySelector("#ct1");
let learnSkills = document.querySelector("#ct2");
let savedTeachSkills = JSON.parse(localStorage.getItem("teachSkills")) ||[];
let savedLearnSkills = JSON.parse(localStorage.getItem("learnSkills")) ||[]; 


// when the user click the profile icon the modal will show up;
let profile = document.querySelector("#profile");
profile.addEventListener('click', function () {
    modelShow.style.display = "initial";
})

// for close the model when click the close button;
let close = document.querySelector("#close");
close.addEventListener('click', function () {
    modelShow.style.display = "none"
});

// let form = document.querySelectorAll("form").addEventListener('submit', function(e){
//     e.preventDefault();
    
//     form.forEach(function(form){
        
//     })
// })

// save the input value to local Storage
let input = document.querySelector("input[type='text']");
let profileSpan = document.querySelector("#profile span");
let savedName = localStorage.getItem("inputValue");
if(savedName){
    input.value = savedName;
    profileSpan.textContent = savedName.trim().charAt(0).toUpperCase();
}
// localStorage.getItem("inputValue") ? input.value = localStorage.getItem("inputValue") : input.value = "";
input.addEventListener('input', function () {
    let str = input.value.trim();
    if(str.length > 0){
        profileSpan.textContent = str.charAt(0).toUpperCase();
    }
    else{
        profileSpan.textContent = "";
    }
    localStorage.setItem("inputValue", str);
    // document.querySelector("#name").value;
})

// check the selected skills and add or remove the class sel when the user click in the skill'
let check = document.querySelectorAll(".check");
let sel = document.querySelectorAll(".sel");
check.forEach(function (skills) {
    skills.addEventListener('click', function () {
        this.classList.toggle("sel")
    });
})

// restore the selected skills from local storage when the page is reloaded
teachSkills.querySelectorAll(".check").forEach(function(skill){
    if(savedTeachSkills.includes(skill.dataset.ve)){
        skill.classList.add("sel");
    }
});

learnSkills.querySelectorAll(".check").forEach(function(skill){
    if(savedLearnSkills.includes(skill.dataset.ve)){
        skill.classList.add("sel");
    }
});

// save the selected skills to local storage when the user click the save button and close the modal
let save = document.querySelector("#save");
save.addEventListener('click', function () {
    let selectedTeachskills = [];
    teachSkills.querySelectorAll(".check.sel").forEach(function (skill) {
        selectedTeachskills.push(skill.dataset.ve)
    });
    let selectedLearnskills = [];
    learnSkills.querySelectorAll(".check.sel").forEach(function (skill) {
        selectedLearnskills.push(skill.dataset.ve)
    });
    localStorage.setItem("teachSkills", JSON.stringify(selectedTeachskills))
    localStorage.setItem("learnSkills", JSON.stringify(selectedLearnskills))
    console.log("Teach:", selectedTeachskills);
    console.log("Learn:", selectedLearnskills);
    modelShow.style.display = "none";
})