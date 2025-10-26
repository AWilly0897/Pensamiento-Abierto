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
