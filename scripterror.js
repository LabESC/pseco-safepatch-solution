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
