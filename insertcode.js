const uploadSarifBtn = document.getElementById('uploadSarifBtn');
const uploadEarBtn = document.getElementById('uploadEarBtn');
const sarifInput = document.getElementById('sarifInput');
const earInput = document.getElementById('earInput');
const submitFilesBtn = document.getElementById('submitFilesBtn');
const nextScreenBtn = document.getElementById('nextScreenBtn');
const messageDisplay = document.getElementById('messageDisplay');
const messageText = document.getElementById('messageText');
const backBtn = document.getElementById('backBtn');

uploadSarifBtn.addEventListener('click', () => sarifInput.click());

uploadEarBtn.addEventListener('click', () => earInput.click());

submitFilesBtn.addEventListener('click', handleFileSubmission);

function handleFileSubmission() {
    const sarifFile = sarifInput.files[0];
    const earFile = earInput.files[0];

    if (sarifFile && earFile) {
        messageText.textContent = 'Both files have been submitted successfully.';
    }

    messageDisplay.classList.remove('hidden');

    setTimeout(() => {
        window.location.href = 'pagvulnerabilities.html'; 
    }, 0);
}

