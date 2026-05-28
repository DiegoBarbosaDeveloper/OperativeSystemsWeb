function abrirChat(){

    document.getElementById("chatBox")
    .style.display = "flex";

}
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

// CHAT

// ==========================
// ELEMENTOS
// ==========================

const openChat =
document.getElementById("openChat");

const openChatBtn =
document.getElementById("openChatBtn");

const chatBox =
document.getElementById("chatBox");

const closeChat =
document.getElementById("closeChat");

const sendBtn =
document.getElementById("sendBtn");

const userInput =
document.getElementById("userInput");

const chatBody =
document.getElementById("chatBody");


// ==========================
// ABRIR CHAT
// ==========================

openChat.addEventListener("click", () => {

    chatBox.style.display = "flex";

});

openChatBtn.addEventListener("click", () => {

    chatBox.style.display = "flex";

});


// ==========================
// CERRAR CHAT
// ==========================

closeChat.addEventListener("click", () => {

    chatBox.style.display = "none";

});


// ==========================
// RESPUESTAS BOT
// ==========================

function responder(texto){

texto = texto.toLowerCase();


// PRIMER CORTE

if(
texto.includes("primer corte")
){

return `
El primer corte incluye:

• Comandos CMD
• PowerShell
• Redes
• Diagnóstico Windows
`;

}


// SEGUNDO CORTE

else if(
texto.includes("segundo corte")
){

return `
El segundo corte incluye:

• Linux Ubuntu
• VirtualBox
• Máquinas virtuales
• Instalación Windows
`;

}


// TERCER CORTE

else if(
texto.includes("tercer corte")
){

return `
El tercer corte incluye:

• Soporte TI
• Hardware
• RAM y discos
• Redes y mantenimiento
`;

}


// CMD

else if(
texto.includes("cmd")
){

return `
CMD es la terminal clásica
de Windows para ejecutar
comandos.
`;

}


// POWERSHELL

else if(
texto.includes("powershell")
){

return `
PowerShell es una terminal
avanzada de automatización
de Windows.
`;

}


// DEFAULT

else{

return `
Pregúntame sobre:

• Primer corte
• Segundo corte
• Tercer corte 👨🏻‍💻
`;

}

}


// ==========================
// ENVIAR MENSAJE
// ==========================

function enviarMensaje(){

const texto =
userInput.value.trim();

if(texto === "") return;


// MENSAJE USUARIO

const userMessage =
document.createElement("div");

userMessage.classList.add(
"user-message"
);

userMessage.innerText = texto;

chatBody.appendChild(userMessage);


// RESPUESTA BOT

setTimeout(() => {

const botMessage =
document.createElement("div");

botMessage.classList.add(
"bot-message"
);

botMessage.innerText =
responder(texto);

chatBody.appendChild(botMessage);

chatBody.scrollTop =
chatBody.scrollHeight;

}, 500);


userInput.value = "";

}


// ==========================
// BOTON ENVIAR
// ==========================

sendBtn.addEventListener(
"click",
enviarMensaje
);


// ==========================
// ENTER
// ==========================

userInput.addEventListener(
"keypress",
(e) => {

if(e.key === "Enter"){

enviarMensaje();

}

});


// ==========================
// DARK MODE
// ==========================

const toggleMode =
document.getElementById("toggleMode");

toggleMode.addEventListener(
"click",
() => {

document.body.classList.toggle(
"dark"
);

}
);
// =======================
// RESPUESTAS DEL AVATAR
// =======================

function mostrarRespuesta(tipo) {

    const respuesta =
    document.getElementById("respuesta");

    if (!respuesta) return;

    if (tipo === "primer") {

        respuesta.innerHTML = `

        <h3>📘 Primer corte</h3>

        <p><strong>Temas incluidos:</strong></p>

        <ul>
            <li>Comandos CMD</li>
            <li>PowerShell</li>
            <li>Administración de archivos</li>
            <li>Configuración de red</li>
            <li>Diagnóstico de Windows</li>
        </ul>

        `;

    }

    else if (tipo === "segundo") {

        respuesta.innerHTML = `

        <h3>💻 Segundo corte</h3>

        <p><strong>Temas incluidos:</strong></p>

        <ul>
            <li>Instalación de Ubuntu</li>
            <li>Instalación de Windows</li>
            <li>VirtualBox</li>
            <li>Máquinas virtuales</li>
            <li>Snapshots y configuración</li>
        </ul>

        `;

    }

    else if (tipo === "tercer") {

        respuesta.innerHTML = `

        <h3>🛠️ Tercer corte</h3>

        <p><strong>Temas incluidos:</strong></p>

        <ul>
            <li>Soporte técnico</li>
            <li>Diagnóstico de RAM</li>
            <li>Diagnóstico de discos</li>
            <li>Mantenimiento preventivo</li>
            <li>Herramientas de soporte TI</li>
        </ul>

        `;

    }

}


// =======================
// MENSAJE INICIAL
// =======================

window.onload = () => {

    const respuesta =
    document.getElementById("respuesta");

    if (respuesta) {

        respuesta.innerHTML = `

        <h3>👨🏻‍💻 WinCmd Assistant</h3>

        <p>
        Selecciona una de las preguntas
        rápidas para obtener una respuesta.
        </p>

        `;

    }

};