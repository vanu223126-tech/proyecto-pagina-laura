// Configuración básica del cálculo de honorarios
const COSTO_BASE_UNIDAD = 20000; 

const FACTORES = {
  'simple': 1.0,
  'con-encargado': 1.2,
  'completo': 1.35
};

// 🗺️ Diccionario para traducir los valores del select a texto legible
const NOMBRES_TIPOS = {
  'simple': 'Estándar (sin amenities ni personal fijo)',
  'con-encargado': 'Con Encargado / Portería',
  'completo': 'Con Amenities (Pileta, SUM, Seguridad)'
};


// ⚠️ IMPORTANTE: Ingresa el número de WhatsApp de María Laura aquí.
// Formato Argentina: 549 + código de área sin 0 + número sin 15.
// Ejemplo para CABA/AMBA (11 1234-5678) -> "5491112345678"
const NUMERO_WHATSAPP = "5491165708428"; 

const form = document.getElementById('form-cotizar');
const resultadoBox = document.getElementById('resultado-cotizacion');
const montoEl = document.getElementById('monto-final');
const btnWs = document.getElementById('btn-envio-ws');

let datosCotizacion = { unidades: 0, tipo: '', total: 0 };

// Manejar el cálculo al enviar el formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que la página se recargue

  const cantUnidades = parseInt(document.getElementById('unidades').value);
  const tipoEdificio = document.getElementById('caracteristicas').value;
  const factor = FACTORES[tipoEdificio] || 1.0;

  const totalEstimado = Math.round(cantUnidades * COSTO_BASE_UNIDAD * factor);

  datosCotizacion = {
    unidades: cantUnidades,
    tipo: tipoEdificio,
    total: totalEstimado
  };

  montoEl.textContent = `$${totalEstimado.toLocaleString('es-AR')}`;
  resultadoBox.style.display = 'block';
});

// Manejar el clic en el botón de WhatsApp
btnWs.addEventListener('click', (e) => {
  e.preventDefault(); // Evita cualquier comportamiento no deseado

  if (!datosCotizacion.unidades) {
    alert("Por favor, calcula primero un presupuesto antes de enviar la consulta.");
    return;
  }

  // Texto del mensaje con formato para WhatsApp
  const mensaje = `Hola María Laura, me contacto desde tu página web para solicitar una propuesta de administración para un consorcio:

• Unidades: ${datosCotizacion.unidades}
• Tipo de consorcio: ${datosCotizacion.tipo}
• Presupuesto estimado: $${datosCotizacion.total.toLocaleString('es-AR')}

¿Podríamos coordinar para conversar?`;

  // Construcción del enlace oficial de WhatsApp API
  const link = `https://api.whatsapp.com/send?phone=${NUMERO_WHATSAPP}&text=${encodeURIComponent(mensaje)}`;
  
  // Abrir en una nueva pestaña
  window.open(link, '_blank');
});