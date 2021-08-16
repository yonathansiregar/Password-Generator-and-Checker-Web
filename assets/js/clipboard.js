const clipboard = document.getElementById('clipboard');


clipboard.addEventListener(
    'click', () => {
        const textarea = document.createElement('textarea');
        const password = resultEl.innerText;

        if (!password) {
            return;
        }

        textarea.value = password;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        textarea.remove();
        alert('Password copied to clipboard');
    }
);