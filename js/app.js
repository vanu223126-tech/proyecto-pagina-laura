// ⚠️ Número de WhatsApp de María Laura
const NUMERO_WHATSAPP = "5491165708428"; 

const form = document.getElementById('form-cotizar');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recargar la página

  // Captura de valores ingresados
  const unidades = document.getElementById('unidades').value;
  const cocheras = document.getElementById('cocheras').value || '0';
  const ascensores = document.getElementById('ascensores').value || '0';
  const categoria = document.getElementById('categoria').value;
  const antiguedad = document.getElementById('antiguedad').value;

  // Armado del mensaje estructurado para WhatsApp
  const mensaje = `Hola María Laura, me contacto desde tu página web para solicitar un presupuesto para la administración de un consorcio:

📌 *Detalles del Edificio:*
- Unidades Funcionales: ${unidades}
- Cocheras: ${cocheras}
- Ascensores: ${ascensores}
- Categoría: ${categoria}
- Antigüedad: ${antiguedad}

¿Podríamos coordinar para conversar?`;

  // Construcción del enlace oficial
  const link = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
  
  // Abrir en una nueva pestaña
  window.open(link, '_blank');
});