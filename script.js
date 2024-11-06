const messages = [
    "Eres lo mejor que me ha pasado 💕",
    "No hay día que no piense en ti 😘",
    "Mi vida es mejor contigo 💖",
    "Cada momento contigo es especial ✨",
    "Gracias por estar siempre a mi lado ❤️",
    "¿Estás lista para la sorpresa final? 😍"
];

let currentMessage = 0;

function showMessage(index) {
    const boxContainer = document.getElementById("boxContainer");

    // Oculta la caja anterior
    boxContainer.innerHTML = "";

    if (index < messages.length) {
        // Muestra el mensaje actual
        const message = document.createElement("p");
        message.textContent = messages[index];
        message.classList.add("box-message");
        boxContainer.appendChild(message);

        // Crea la siguiente caja
        const nextBox = document.createElement("button");
        nextBox.textContent = "Abrir Caja 🎁";
        nextBox.classList.add("box");
        nextBox.onclick = function() {
            showMessage(index + 1);
        };
        boxContainer.appendChild(nextBox);
    } else {
        // Al último mensaje, muestra la sorpresa final
        const finalSurprise = document.getElementById("finalSurprise");
        finalSurprise.classList.remove("hidden");
    }
}
