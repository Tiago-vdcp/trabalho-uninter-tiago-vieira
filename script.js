const contactForm = document.querySelector('.form-contato');

if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome.trim() === '' || email.trim() === '' || mensagem.trim() === '') {
            alert('Por favor, preencha todos os campos.');
        } else {
            alert('Mensagem enviada com sucesso!');
            contactForm.reset();
        }
    });
}
