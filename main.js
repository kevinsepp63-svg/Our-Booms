function showPage(name) {
  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });
  document.getElementById(name).classList.add('active');
  window.scrollTo(0, 0);
}

document.querySelectorAll('.nav-links a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    var text = this.textContent.trim().toLowerCase();
    if (text === 'gallery') {
      showPage('gallery');
    } else {
      showPage('home');
    }
  });
});
