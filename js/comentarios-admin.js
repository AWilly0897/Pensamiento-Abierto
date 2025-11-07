function mostrarComentariosPublicados() {
  const lista = document.getElementById("lista-publicados");
  if (!lista) return;

  fetch("/datos/comentarios-publicados.json")
    .then(res => res.json())
    .then(comentarios => {
      const publicados = comentarios.filter(c => c.articulo === document.title);
      publicados.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));

      lista.innerHTML = "";
      publicados.forEach(c => {
        const item = document.createElement("li");
        item.innerHTML = `
          <strong>${c.nombre}</strong> (${new Date(c.fecha).toLocaleString()})<br>
          <em>${c.articulo}</em><br>
          <p>${c.comentario}</p>
          <hr>
        `;
        lista.appendChild(item);
      });
    })
    .catch(err => {
      lista.innerHTML = "<p>No se pudieron cargar los comentarios.</p>";
      console.error("Error al cargar comentarios:", err);
    });
}
