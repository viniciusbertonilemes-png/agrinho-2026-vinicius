// Função que gerencia a troca de imagens da galeria
function changeImage(element) {
    // 1. Seleciona a imagem principal em destaque
    const featuredImg = document.getElementById('featured');
    
    // 2. Aplica um efeito suave de "piscar" (fade out)
    featuredImg.style.opacity = 0; 
    
    // 3. Aguarda 200 milissegundos para trocar a imagem enquanto ela está invisível
    setTimeout(() => {
        featuredImg.src = element.src;
        featuredImg.alt = element.alt;
        featuredImg.style.opacity = 1; // Mostra a nova imagem (fade in)
    }, 200);

    // 4. Remove a borda de destaque ('active') de todas as miniaturas
    const thumbs = document.querySelectorAll('.thumb');
    thumbs.forEach(thumb => thumb.classList.remove('active'));

    // 5. Adiciona a borda de destaque apenas na miniatura que foi clicada
    element.classList.add('active');
}
