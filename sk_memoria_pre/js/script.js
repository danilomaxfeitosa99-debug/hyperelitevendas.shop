
document.addEventListener('DOMContentLoaded', () => {
    console.log('Site GOOGLE FARM 229 carregado com sucesso.');
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        if (link.getAttribute('href').startsWith('http')) {
            link.addEventListener('click', (e) => {
                console.log('Redirecionando para: ' + link.href);
            });
        }
    });
});
