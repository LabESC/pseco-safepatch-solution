document.getElementById('submitBtn').addEventListener('click', handleSubmitCode);

function handleSubmitCode() {
    const confirmed = confirm('Do you want to submit the code?');
    
    if (confirmed) {
        const messageDisplay = document.getElementById('messageDisplay');
        const messageText = document.getElementById('messageText');
        
        messageText.textContent = 'Your code has been submitted. Please proceed to the next page.';
        messageDisplay.classList.remove('hidden');

        setTimeout(() => {
            window.location.href = 'pagvulnerabilities.html';
        }, 2000);
    }
}
