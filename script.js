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
    const finalSurprise = document.getElementById("finalSurprise");

    // Oculta la caja anterior
    boxContainer.innerHTML = "";

    // Asegúrate de que el finalSurprise esté oculto inicialmente
    finalSurprise.classList.add("hidden");

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

        // Agregamos el evento para abrir la siguiente caja
        nextBox.addEventListener("click", function() {
            showMessage(index + 1);
        });

        nextBox.addEventListener("touchstart", function() {
            showMessage(index + 1);
        });

        boxContainer.appendChild(nextBox);
    } else {
        // Cuando llegamos al final, muestra la sorpresa final
        finalSurprise.classList.remove("hidden");
    }
}
