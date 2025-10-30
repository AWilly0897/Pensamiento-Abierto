document.querySelectorAll('.acordeon-btn').forEach(button => {
  button.addEventListener('click', () => {
    const panelId = button.getAttribute('aria-controls');
    const panel = document.getElementById(panelId);
    const expanded = button.getAttribute('aria-expanded') === 'true';

    button.setAttribute('aria-expanded', !expanded);
    panel.hidden = expanded;
  });
});

// Activar acordeón desde navegación
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const button = document.getElementById(targetId);
    if (button && button.classList.contains('acordeon-btn')) {
      e.preventDefault();
      button.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (button.getAttribute('aria-expanded') === 'false') {
        button.click();
      }
    }
  });
});
// Lista de artículos con fecha y hora de publicación
  const articulos = [
    { nombre: "articulo1.html", titulo: "Artículo 1", fecha: "2025-10-29T21:00:00" },
    { nombre: "articulo2.html", titulo: "Artículo 2", fecha: "2025-11-01T21:00:00" },
    { nombre: "articulo3.html", titulo: "Artículo 3", fecha: "2025-11-05T21:00:00" },
    { nombre: "articulo4.html", titulo: "Artículo 4", fecha: "2025-11-08T21:00:00" },
    // Agregá más artículos según tu cronograma editorial
  ];

  const ahora = new Date();
  const contenedor = document.getElementById("lista-articulos");
  const mensaje = document.getElementById("mensaje-proximo");

  let siguiente = null;

  // Mostrar artículos cuya fecha ya pasó
  articulos.forEach(articulo => {
    const fechaPublicacion = new Date(articulo.fecha);
    if (ahora >= fechaPublicacion) {
      const li = document.createElement("li");
      li.innerHTML = `<a href="articulos/${articulo.nombre}">${articulo.titulo}</a>`;
      contenedor.appendChild(li);
    } else if (!siguiente || fechaPublicacion < new Date(siguiente.fecha)) {
      siguiente = articulo;
    }
  });

  // Mostrar el próximo artículo programado
  if (mensaje && siguiente) {
    const fecha = new Date(siguiente.fecha);
    mensaje.textContent = `${siguiente.titulo} estará disponible el ${fecha.toLocaleDateString('es-AR')} a las ${fecha.toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' })}`;
  }
