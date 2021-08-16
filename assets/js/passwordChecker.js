let timeout;
let badgeDisplay = document.getElementById('badge-display');
let password = document.getElementById('password-entry');

let strong = new RegExp(
    '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})'
)
let medium = new RegExp(
    '((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))'
)

function checkPassword(parameter) {
    if (strong.test(parameter)) {
        badgeDisplay.style.backgroundColor = "green";
        badgeDisplay.textContent = "Your password is strong and hack resistant";
    } else if (medium.test(parameter)) {
        badgeDisplay.style.backgroundColor = "blue";
        badgeDisplay.textContent = "Your password is medium. Try another strong password";
    } else {
        badgeDisplay.style.backgroundColor = "red";
        badgeDisplay.textContent = "Warning! Your password is very weak and vulnerable to being hacked.";
    }
}

password.addEventListener("input", () => {
    badgeDisplay.style.display = "block";
    clearTimeout(timeout);
    timeout = setTimeout(
        () => checkPassword(password.value), 500
    );
    if (password.value.length !== 0) {
        badgeDisplay.style.display != 'block';
    } else {
        badgeDisplay.style.display = 'none';
    }
});