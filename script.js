/* onload = () => {
    const c = setTimeout(() => {
        document.body.classList.remove("not-loaded");
        clearTimeout(c);
    }, 500);
}; */
const sweetAlertScript = document.createElement('script');
sweetAlertScript.src = "https://cdn.jsdelivr.net/npm/sweetalert2@11.0.16/dist/sweetalert2.min.js";
document.body.appendChild(sweetAlertScript);

sweetAlertScript.onload = () => {
    // Función para mostrar los mensajes de amor secuencialmente
    function showLoveMessages() {
        Swal.fire({
            title: '❤️',
            text: 'Eres la persona más especial para mí.',
            icon: 'info',
            showConfirmButton: true,
            confirmButtonText: 'Siguiente'
        }).then(() => {
            Swal.fire({
                title: '❤️',
                text: 'Gracias por cada momento compartido.',
                icon: 'info',
                showConfirmButton: true,
                confirmButtonText: 'Siguiente'
            }).then(() => {
                Swal.fire({
                    title: '❤️',
                    text: 'Te amo con todo mi corazón ❤️.',
                    icon: 'info',
                    showConfirmButton: true,
                    confirmButtonText: 'Empezar'
                }).then(() => {
                    // Después de mostrar los mensajes, iniciamos la animación de las flores
                    startAnimation();
                });
            });
        });
    }

    // Función para iniciar la animación de las flores
    function startAnimation() {
        const c = setTimeout(() => {
            document.body.classList.remove("not-loaded");
            clearTimeout(c);
        }, 500);
    }

    // Mostrar los mensajes de amor antes de iniciar la animación
    showLoveMessages();
};