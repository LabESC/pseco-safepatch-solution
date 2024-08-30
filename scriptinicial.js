function runApp() {
    const message = document.getElementById('message');
    message.classList.remove('hidden'); // Exibe a mensagem
    setTimeout(() => {
        message.classList.add('hidden'); // Esconde a mensagem após 1 segundo
    }, 1000);
}
