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
       
    ],
    high: [
        
    ],
    medium: [
        
    ],
    low: [
        'Build Misconfiguration: External Maven Dependency Repository',
        'Cross-Site Request Forgery',
        'Hidden Field',
        'J2EE Misconfiguration: Excessive Session Timeout',
        'J2EE Misconfiguration: Missing Error Handling',
        'Password Management: Password in Comment',
        'Poor Error Handling: Overly Broad Catch', 
        'System Information Leak: Internal',
        'SQL Injection',
        'Struts: Form Does Not Extend Validation Class',
        'Struts: Plugin Framework Not In Use',
        'Struts: Unused Action Form',
        'Struts: Validator Turned Off',
        'System Information Leak: HTML Comment in JSP'   
    ]
};

document.getElementById('criticalCount').textContent = vulnerabilities.critical.length;
document.getElementById('highCount').textContent = vulnerabilities.high.length;
document.getElementById('mediumCount').textContent = vulnerabilities.medium.length;
document.getElementById('lowCount').textContent = vulnerabilities.low.length;
document.getElementById('totalErrors').textContent = vulnerabilities.critical.length + vulnerabilities.high.length + vulnerabilities.medium.length + vulnerabilities.low.length;
