
window.onload = function() {
    document.getElementById("work-button").addEventListener("click", work);
    document.getElementById("education-button").addEventListener("click", education);
    document.getElementById("projects-button").addEventListener("click", projects);
    document.getElementById("hobbies-button").addEventListener("click", hobbies);
}

function work() {
    hideAndDisplay("work");
    formatButton("work-button")
}
function education() {
    hideAndDisplay("education");
    formatButton("education-button")
}
function projects() {
    hideAndDisplay("projects");
    formatButton("projects-button")
}
function hobbies() {
    hideAndDisplay("hobbies");
    formatButton("hobbies-button");
}

function hideAndDisplay(section) {
    document.getElementById('work').classList.add('d-none');
    document.getElementById('education').classList.add('d-none');
    document.getElementById('projects').classList.add('d-none');
    document.getElementById('hobbies').classList.add('d-none');
    document.getElementById('joshua-tree').classList.add('d-none');

    document.getElementById(section).classList.remove('d-none');
}

function formatButton(buttonName) {

    document.getElementById('work-button').classList.remove('btn-dark');
    document.getElementById('education-button').classList.remove('btn-dark');
    document.getElementById('projects-button').classList.remove('btn-dark');
    document.getElementById('hobbies-button').classList.remove('btn-dark');

    document.getElementById('work-button').classList.add('btn-outline-dark');
    document.getElementById('education-button').classList.add('btn-outline-dark');
    document.getElementById('projects-button').classList.add('btn-outline-dark');
    document.getElementById('hobbies-button').classList.add('btn-outline-dark');

    document.getElementById(buttonName).classList.remove('btn-outline-dark');
    document.getElementById(buttonName).classList.add('btn-dark');

}
