// Captura dos botões e inputs de upload
const uploadSarifBtn = document.getElementById('uploadSarifBtn');
const uploadEarBtn = document.getElementById('uploadEarBtn');
const sarifInput = document.getElementById('sarifInput');
const earInput = document.getElementById('earInput');
const submitFilesBtn = document.getElementById('submitFilesBtn');
const nextScreenBtn = document.getElementById('nextScreenBtn');
const messageDisplay = document.getElementById('messageDisplay');
const messageText = document.getElementById('messageText');

// Ação do botão para escolher o arquivo .sarif
uploadSarifBtn.addEventListener('click', () => sarifInput.click());

// Ação do botão para escolher o arquivo .ear
uploadEarBtn.addEventListener('click', () => earInput.click());

// Ação ao submeter os arquivos
submitFilesBtn.addEventListener('click', handleFileSubmission);

function handleFileSubmission() {
    const sarifFile = sarifInput.files[0];
    const earFile = earInput.files[0];

    // Verifica se ambos os arquivos foram submetidos
    if (sarifFile && earFile) {
        messageText.textContent = 'Both files have been submitted successfully.';
        messageDisplay.classList.remove('hidden');
        nextScreenBtn.disabled = false; // Habilita o botão para ir para a próxima página
    } else {
        messageText.textContent = 'Please submit both .sarif and .ear files to proceed.';
        messageDisplay.classList.remove('hidden');
    }
}

// Ação do botão para ir para a próxima tela
nextScreenBtn.addEventListener('click', () => {
    window.location.href = 'pagvulnerabilities.html';
});
