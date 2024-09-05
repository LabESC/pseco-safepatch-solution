// Defina a URL da página de correção aqui
const fixPageURL = 'pagerror.html'; // Substitua por sua URL desejada

document.querySelectorAll('.vulnerability-level').forEach(level => {
    level.addEventListener('click', () => {
        const levelName = level.dataset.level;
        const details = document.getElementById(`${levelName}Details`);
        
        if (details) {
            const items = vulnerabilities[levelName];
            console.log(`Displaying details for ${levelName}:`, items);

            details.innerHTML = items.map((item, index) => `
                <li>
                    <span class="error-description">${item}</span>
                    <button class="fix-btn" onclick="goToFixPage('${levelName}', ${index})">Fix</button>
                </li>
            `).join('');
            
            // Alternar a exibição dos detalhes
            details.style.display = details.style.display === 'block' ? 'none' : 'block';
        } else {
            console.error(`No element found with ID: ${levelName}Details`);
        }
    });
});

function goToFixPage(levelName, index) {
    // Construir o URL da página de correção com parâmetros para identificar o erro
    const url = `${fixPageURL}?level=${levelName}&index=${index}`;
    window.location.href = url;
}

const vulnerabilities = {
    critical: [
        'Buffer Overflow in module X',
        'Unauthorized access detected',
        'Memory leak vulnerability'
    ],
    high: [
        'SQL Injection found in login module',
        'Sensitive data exposure',
        'Broken authentication mechanism',
        'Improper error handling',
        'Hardcoded credentials',
        'Race condition vulnerability',
        'Information disclosure',
        'Insufficient logging',
        'Cross-Site Request Forgery (CSRF)',
        'Insecure direct object reference'
    ],
    medium: [
        'Cross-Site Scripting (XSS) in comments',
        'Open Redirect issue',
        'Deprecated API usage',
        'Session fixation',
        'URL manipulation',
        'Insecure session management',
        'Insecure deserialization'
    ],
    low: [
        'Information exposure in error messages',
        'Cookie without HttpOnly flag',
        'Minor performance issue',
        'Missing security headers',
        'Insecure random number generator',
        'Minor data validation issues',
        'Use of weak cryptographic algorithms',
        'Unnecessary HTTP methods enabled',
        'Improper error message formatting',
        'Unrestricted file upload',
        'Insufficient input validation',
        'Unprotected administrative interfaces'
    ]
};

document.getElementById('criticalCount').textContent = vulnerabilities.critical.length;
document.getElementById('highCount').textContent = vulnerabilities.high.length;
document.getElementById('mediumCount').textContent = vulnerabilities.medium.length;
document.getElementById('lowCount').textContent = vulnerabilities.low.length;
document.getElementById('totalErrors').textContent = vulnerabilities.critical.length + vulnerabilities.high.length + vulnerabilities.medium.length + vulnerabilities.low.length;
