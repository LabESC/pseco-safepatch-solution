function runApp() {
    const message = document.getElementById('message');
    message.classList.remove('hidden'); // Exibe a mensagem
    setTimeout(() => {
        message.classList.add('hidden'); // Esconde a mensagem após 1 segundo
    }, 1000);
}

document.getElementById('toggle-description').addEventListener('click', () => {
    const descriptionSection = document.getElementById('description-section');
    const button = document.getElementById('toggle-description');
    
    if (descriptionSection.classList.contains('hidden')) {
        descriptionSection.classList.remove('hidden');
        button.textContent = 'Hide Description';
    } else {
        descriptionSection.classList.add('hidden');
        button.textContent = 'Show Description';
    }
});