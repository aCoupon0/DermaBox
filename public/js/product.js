function toggleContent(id) {
    const content = document.getElementById(id);
    const arrow = content.previousElementSibling.querySelector('i');
    

    // Si el contenido está visible, ciérralo; si está oculto, ábrelo
    if (content.style.display === "block") {
        content.style.display = "none";
        arrow.style.transform = "rotate(0deg)"; // Flecha hacia abajo
    } else {
        content.style.display = "block";
        arrow.style.transform = "rotate(180deg)"; // Flecha hacia arriba
    }
}


function scrollToInfo(id, contenido) {
    const section = document.getElementById(id);
    const content = document.getElementById(contenido);
    const arrow = content.previousElementSibling.querySelector('i');

    // Realiza el scroll de forma suave
    section.scrollIntoView({ behavior: 'smooth' });

    // Espera 2 segundos antes de ejecutar el bloque if
    setTimeout(() => {
        // Si el contenido está visible, ciérralo; si está oculto, ábrelo
        if (content.style.display === "block") {
            return
        } else {
            content.style.display = "block";
            arrow.style.transform = "rotate(180deg)"; // Flecha hacia arriba
        }
    }, 350); // 2000 ms = 2 segundos
}