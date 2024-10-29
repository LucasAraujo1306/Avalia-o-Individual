// Seleciona o botão de alternância de tema e o corpo da página
const themeToggleButton = document.getElementById('themeToggle');
const body = document.body;

// Função para alternar o tema
function toggleTheme() {
  // Alterna a classe 'dark-theme' no corpo da página
  body.classList.toggle('dark-theme');

  // Verifica qual tema está ativo e altera o texto do botão
  if (body.classList.contains('dark-theme')) {
    themeToggleButton.textContent = 'Tema Claro';
  } else {
    themeToggleButton.textContent = 'Tema Escuro';
  }
}

// Adiciona um ouvinte de eventos para o botão, que chama a função toggleTheme ao ser clicado
themeToggleButton.addEventListener('click', toggleTheme);