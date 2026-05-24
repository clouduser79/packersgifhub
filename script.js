// ===== PAGE NAVIGATION =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-page="${id}"]`).classList.add('active');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

// ===== MODAL =====
function openModal(src) {
  document.getElementById('modalImg').src = src;
  document.getElementById('modal').classList.add('open');
}

function closeModal(e) {
  if (e.target === document.getElementById('modal')) closeModalDirect();
}

function closeModalDirect() {
  document.getElementById('modal').classList.remove('open');
  document.getElementById('modalImg').src = '';
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModalDirect();
});

fetch('files.json')
  .then(res => res.json())
  .then(data => {
    const files = data.files;
    const grid = document.getElementById('libraryGrid');
    files.forEach(filename => {
      const name = filename.replace(/\.[^/.]+$/, '').replace(/[-_]/g, ' ');
      const ext = filename.split('.').pop().toUpperCase();
      const card = document.createElement('div');
      card.className = 'gif-card';
      card.innerHTML = `
        <img src="Packers Pain GIFs/${filename}" alt="${name}" onclick="openModal(this.src)" loading="eager" />
        <div class="gif-card-meta">
          <span class="gif-card-title">${name}</span>
          <span class="gif-card-tag">${ext}</span>
        </div>
      `;
      grid.appendChild(card);
    });
  })
  .catch(() => console.log('No files.json found'));