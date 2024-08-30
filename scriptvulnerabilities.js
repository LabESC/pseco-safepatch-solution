document.querySelector('.directory-btn').addEventListener('click', () => {
    alert('Select Directory functionality is under development.');
});

document.querySelector('.process-btn').addEventListener('click', () => {
    alert('Processing the selected directory.');
});

document.getElementById('downloadReportBtn').addEventListener('click', () => {
    const reportData = `
    Vulnerabilities Report:
    Critical: 5
    High: 10
    Medium: 15
    Low: 7
    `;
    const blob = new Blob([reportData], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'vulnerability_report.txt';
    a.click();
    window.URL.revokeObjectURL(url);
});

const vulnerabilities = {
    critical: ['Buffer Overflow in module X', 'Unauthorized access detected', 'Memory leak vulnerability'],
    high: ['SQL Injection found in login module', 'Sensitive data exposure', 'Broken authentication mechanism'],
    medium: ['Cross-Site Scripting (XSS) in comments', 'Open Redirect issue', 'Deprecated API usage'],
    low: ['Information exposure in error messages', 'Cookie without HttpOnly flag', 'Minor performance issue']
};

document.getElementById('criticalCount').textContent = vulnerabilities.critical.length;
document.getElementById('highCount').textContent = vulnerabilities.high.length;
document.getElementById('mediumCount').textContent = vulnerabilities.medium.length;
document.getElementById('lowCount').textContent = vulnerabilities.low.length;


document.querySelectorAll('.vulnerability-level').forEach(level => {
    level.addEventListener('click', () => {
        const levelName = level.dataset.level;
        const details = document.getElementById(`${levelName}Details`);
        const items = vulnerabilities[levelName];
        details.innerHTML = items.map(item => `<li>${item}</li>`).join('');
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
    });
});
