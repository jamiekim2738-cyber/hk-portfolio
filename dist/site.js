const modal = document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  if (!modal) return;
  modal.querySelector('img').src = button.dataset.image;
  modal.querySelector('img').alt = button.dataset.title;
  modal.querySelector('p').textContent = button.dataset.title;
  modal.showModal();
}));
modal?.querySelector('.close').addEventListener('click', () => modal.close());
modal?.addEventListener('click', event => { if(event.target === modal) { const r=modal.getBoundingClientRect(); if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom) modal.close(); } });
