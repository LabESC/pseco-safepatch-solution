document.getElementById('downloadBtn').addEventListener('click', () => {
    const correctedCode = document.getElementById('correctedCode').value;
    const blob = new Blob([correctedCode], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'correctedCode.txt';
    a.click();
    window.URL.revokeObjectURL(url);
});

document.getElementById('backBtn').addEventListener('click', () => {
    window.history.back();
});

document.getElementById('copyBtn').addEventListener('click', () => {
    const correctedCode = document.getElementById('correctedCode').value;
    navigator.clipboard.writeText(correctedCode).then(() => {
        alert('Corrected code copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy text: ', err);
    });
});