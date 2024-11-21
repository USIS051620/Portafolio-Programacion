const $form = document.querySelector('#form');
const $loading = document.querySelector('#loading');

$form.addEventListener('submit', handleSubmit);

async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);

    // Mostrar estado de carga
    $loading.style.display = 'block';

    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    });

    // Ocultar estado de carga
    $loading.style.display = 'none';

    if (response.ok) {
        this.reset();

        // Mostrar notificación usando SweetAlert2
        Swal.fire({
            title: '¡Gracias!',
            text: 'Gracias por contactarme, te escribiré pronto',
            icon: 'success',
            confirmButtonText: 'Cerrar'
        });
    } else {
        Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al enviar el mensaje, por favor intenta nuevamente',
        icon: 'error',
        confirmButtonText: 'Cerrar'
        });
    }
}
