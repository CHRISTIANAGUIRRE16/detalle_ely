document.getElementById("revealButton").addEventListener("click", function() {
    const surprise = document.getElementById("surprise");
    surprise.classList.remove("hidden");
    this.style.display = "none";
});
