function mostrarComentariosPublicados() {
  const lista = document.getElementById("lista-publicados");
  if (!lista) return;

  const comentarios = JSON.parse(localStorage.getItem("comentariosPendientes")) || [];
  const publicados = comentarios.filter(c => c.publicado);
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
}
mostrarComentariosPublicados();
