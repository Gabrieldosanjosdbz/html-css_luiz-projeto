setTimeout(() => {
    // Remove a classe de carregamento para mostrar o conteúdo principal
    document.body.classList.remove('loading');
    // Oculta a página de carregamento
    document.querySelector('.loading-overlay').style.display = 'none';
}, 3000)


const lazyLoading = () => {
    const listaElementos = document.querySelectorAll("img[data]");

    listaElementos.forEach((elemento) => {
        if (elemento.getBoundingClientRect().top < window.innerHeight) {
            const src = elemento.getAttribute("data");
            elemento.setAttribute("src", src);
            elemento.removeAttribute("data");

            elemento.onload = () => {
                elemento.style.opacity = 1; // Mostra a imagem carregada
                const placeholder = elemento.previousElementSibling;
                if (placeholder && placeholder.classList.contains("placeholder")) {
                    placeholder.remove(); // Remove o placeholder
                }
            };

            console.log("carregou");
        }
    });
};

window.addEventListener('load', lazyLoading);
window.addEventListener('scroll', lazyLoading);
