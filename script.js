
const themeSwitch = document.getElementById("themeSwitch");
const themeLabel = document.getElementById("themeLabel");

// Перемикання теми
function setTheme(theme) {
    document.body.setAttribute("data-bs-theme", theme);

    if (theme === "dark") {
        themeSwitch.checked = true;
        themeLabel.textContent = "🌙";
    } else {
        themeSwitch.checked = false;
        themeLabel.textContent = "☀️";
    }

    localStorage.setItem("cybernews-theme", theme);
}

// Завантаження теми
const savedTheme = localStorage.getItem("cybernews-theme");
setTheme(savedTheme || "dark");

// Обробник перемикача
themeSwitch.addEventListener("change", function () {
    setTheme(this.checked ? "dark" : "light");
});


// Проста JS-функція
function showMessage() {
    alert("🎮 Ласкаво просимо на CyberNews!");
}

// Кнопка "Приєднатися"
const joinButton = document.querySelector(".btn-primary.btn-lg.w-100");

joinButton.addEventListener("click", showMessage);

