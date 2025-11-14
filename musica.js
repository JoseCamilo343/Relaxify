const audio = document.getElementById("relaxify-music");
const btn = document.getElementById("musicToggleBtn");
const msg = document.getElementById("musicMessage");

audio.volume = 0.15;

document.addEventListener("click", function () {
    audio.play().catch(() => {});
}, { once: true });

let active = false;

btn.addEventListener("click", () => {
    active = !active;

    if (active) {
        audio.play();
        btn.textContent = "🔊";
        showMessage("Música activada");
    } else {
        audio.pause();
        btn.textContent = "🔇";
        showMessage("Música desactivada");
    }
});

function showMessage(text) {
    msg.textContent = text;
    msg.classList.remove("hidden");
    msg.classList.add("show");

    setTimeout(() => {
        msg.classList.remove("show");
        setTimeout(() => msg.classList.add("hidden"), 300);
    }, 1500);
}
