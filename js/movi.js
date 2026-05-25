// =========================
// MODO OSCURO
// =========================

const themeBtn = document.getElementById("toggleMode");

if (themeBtn) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        themeBtn.textContent = "☀️";
    }

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        if (document.body.classList.contains("dark")) {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "☀️";
        } else {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌙";
        }

    });
}


// =========================
// VARIABLES
// =========================

const searchInput = document.getElementById("searchInput");

const commands = document.querySelectorAll(".command");

const modeButtons =
    document.querySelectorAll(".mode-option");

const filterButtons =
    document.querySelectorAll(".filter");

let currentMode = "cmd";
let currentFilter = "all";


// =========================
// ACTUALIZAR VISTA
// =========================

function updateCommands() {

    const searchText =
        searchInput.value.toLowerCase();

    commands.forEach(command => {

        const mode =
            command.dataset.mode;

        const category =
            command.dataset.category;

        const content =
            command.textContent.toLowerCase();

        const modeMatch =
            mode === currentMode;

        const filterMatch =
            currentFilter === "all" ||
            category === currentFilter;

        const searchMatch =
            content.includes(searchText);

        if (
            modeMatch &&
            filterMatch &&
            searchMatch
        ) {
            command.style.display = "block";
        } else {
            command.style.display = "none";
        }

    });

}


// =========================
// BUSCADOR
// =========================

if (searchInput) {

    searchInput.addEventListener(
        "input",
        updateCommands
    );

}


// =========================
// CMD / POWERSHELL
// =========================

modeButtons.forEach(button => {

    button.addEventListener("click", () => {

        modeButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentMode =
            button.dataset.mode;

        updateCommands();

    });

});


// =========================
// FILTROS
// =========================

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn =>
            btn.classList.remove("active")
        );

        button.classList.add("active");

        currentFilter =
            button.dataset.filter;

        updateCommands();

    });

});


// =========================
// INICIAR
// =========================

updateCommands();

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){
        topBtn.style.display = "block";
    }else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});