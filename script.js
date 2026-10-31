document.addEventListener("DOMContentLoaded", () => {
    // Configura aquí tu número de WhatsApp (Código de país + área + número, sin signos ni espacios)
    // Ejemplo para Argentina: "5491112345678"
    const phoneNumber = "5491112345678"; 
    
    // Mensaje preconfigurado que enviarán los invitados
    const message = encodeURIComponent("¡Hola! Confirmo mi asistencia a la celebración. ¡Allí estaré!");
    
    // Asignar el enlace al botón de WhatsApp
    const whatsappBtn = document.getElementById("whatsapp-btn");
    if (whatsappBtn) {
        whatsappBtn.href = `https://wa.me/${phoneNumber}?text=${message}`;
    }
});
