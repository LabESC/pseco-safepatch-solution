const fixPageURL = 'pagerror.html';

document.querySelectorAll('.vulnerability-level').forEach(level => {
    const arrow = document.createElement('span');
    arrow.classList.add('arrow');
    arrow.textContent = '▼';
    level.appendChild(arrow);

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

            const isExpanded = details.style.display === 'block';
            details.style.display = isExpanded ? 'none' : 'block';
            arrow.textContent = isExpanded ? '▼' : '▲'; 
            arrow.classList.toggle('up', !isExpanded); 
        } else {
            console.error(`No element found with ID: ${levelName}Details`);
        }
    });
});

function goToFixPage(levelName, index) {
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
        'Build Misconfiguration: External Maven Dependency Repository',
        'Hidden Field',
        'Overly Broad Catch',
        'System Information Leak: Internal',
        'Byte Array to String Conversion',
        'Comparison of Boxed Primitive Types',
        'Constructor Invokes Overridable Function',
        'Non-Synchronized Method Overrides Synchronized Method',
        'String Comparison of Float',
        'Cross-Site Request Forgery',
        'Denial of Service',
        'Denial of Service: StringBuilder',
        'Hardcoded Domain in HTML',
        'J2EE Misconfiguration: Incomplete Error Handling',
        'Missing XML Validation',
        'Poor Error Handling: Overly Broad Catch', 
        'Poor Style: Non-final Public Static Field', 
        'Race Condition: Format Flaw',
        'SQL Injection',
        'Struts: Form Does Not Extend Validation Class',
        'Struts: Plugin Framework Not In Use',
        'Struts: Unused Action Form',
        'Struts: Validator Turned Off',
        'System Information Leak: HTML Comment in JSP',
        'Unchecked Return Value'
    ]
};

document.getElementById('criticalCount').textContent = vulnerabilities.critical.length;
document.getElementById('highCount').textContent = vulnerabilities.high.length;
document.getElementById('mediumCount').textContent = vulnerabilities.medium.length;
document.getElementById('lowCount').textContent = vulnerabilities.low.length;
document.getElementById('totalErrors').textContent = vulnerabilities.critical.length + vulnerabilities.high.length + vulnerabilities.medium.length + vulnerabilities.low.length;
