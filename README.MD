# 🏢 Landing Page & Cotizador Web — Administración de Consorcios

Prototipo y sitio web institucional desarrollado para **María Laura Chocobar** (Administración de Consorcios - RPA Matrícula 20529). El proyecto combina un diseño corporativo moderno con un cotizador interactivo en tiempo real que convierte visitas en clientes potenciales vía WhatsApp.

🔗 **Demo en vivo:** [https://vanu223126-tech.github.io/proyecto-pagina-laura/](https://vanu223126-tech.github.io/proyecto-pagina-laura/)

---

## 🎯 Objetivo del Proyecto

Brindar una solución digital completa y liviana para un servicio profesional independiente, enfocada en:
1. **Generar confianza:** Presentando credenciales, matrícula oficial y propuesta de valor de forma clara.
2. **Interactividad:** Permitir al cliente calcular una estimación de presupuesto según la escala de su edificio.
3. **Conversión directa:** Facilitar el contacto enviando los datos precompletados de la cotización directamente al WhatsApp de la profesional.

---

## 🛠️ Tecnologías y Herramientas

* **HTML5 Semántico:** Estructuración limpia, accesible y optimizada para motores de búsqueda (SEO).
* **CSS3 (Custom Properties & Flexbox/Grid):** Maquetación responsive nativa sin librerías pesadas, garantizando una carga ultra rápida.
* **JavaScript (Vanilla ES6):** Manipulación del DOM, eventos dinámicos, cálculos interactivos e integración con la API de WhatsApp.
* **Google Fonts:** Integración de la tipografía *Roboto* para reforzar la estética corporativa.
* **Git & GitHub Pages:** Control de versiones y despliegue continuo (CI/CD).

---

## 💡 Funcionalidades Clave

* 📱 **Diseño 100% Responsive:** Adaptado para smartphones, tablets y monitores de escritorio.
* 🧮 **Cotizador de Presupuesto en Tiempo Real:** Algoritmo dinámico que calcula honorarios según la cantidad de unidades/departamentos y la tipología del consorcio (servicios estándar, encargado, amenities).
* 💬 **Integración con WhatsApp API:** Generación dinámica de mensajes URI-encoded para derivar las cotizaciones directamente al chat privado.
* ⚡ **Performance & Carga Rápida:** Construcción Vanilla (sin frameworks pesados), reduciendo las peticiones HTTP y optimizando el tiempo de renderizado.

---

## 📂 Estructura del Código

```text
proyecto-pagina-laura/
├── index.html          # Estructura semántica principal
├── css/
│   └── estilos.css     # Estilos globales, variables y Media Queries
├── js/
│   └── app.js          # Lógica del cotizador e integración con WhatsApp
└── img/
    └── logo.jpg        # Recursos gráficos e identidad visual