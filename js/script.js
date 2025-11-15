// ======== Script para modo oscuro ========

// Seleccionamos el body y el botón de tema
const body = document.body;

// Crear el botón si no existe (para poder usarlo en cualquier página)
let toggleBtn = document.getElementById('theme-toggle');
if (!toggleBtn) {
  toggleBtn = document.createElement('button');
  toggleBtn.id = 'theme-toggle';
  toggleBtn.setAttribute('aria-label', 'Cambiar tema');
  toggleBtn.textContent = '🌙';
  document.body.appendChild(toggleBtn);

  // Estilos básicos para el botón
  toggleBtn.style.position = 'fixed';
  toggleBtn.style.bottom = '20px';
  toggleBtn.style.right = '20px';
  toggleBtn.style.background = '#ff7b00';
  toggleBtn.style.color = '#fff';
  toggleBtn.style.border = 'none';
  toggleBtn.style.borderRadius = '50%';
  toggleBtn.style.width = '50px';
  toggleBtn.style.height = '50px';
  toggleBtn.style.fontSize = '1.4rem';
  toggleBtn.style.cursor = 'pointer';
  toggleBtn.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
  toggleBtn.style.zIndex = '999';
  toggleBtn.style.transition = 'all 0.3s ease';

  toggleBtn.addEventListener('mouseover', () => {
    toggleBtn.style.transform = 'scale(1.1)';
    toggleBtn.style.background = '#e46a00';
  });
  toggleBtn.addEventListener('mouseout', () => {
    toggleBtn.style.transform = 'scale(1)';
    toggleBtn.style.background = '#ff7b00';
  });
}

// Comprobar si el usuario ya tiene un tema guardado
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

// Función para alternar el tema
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
