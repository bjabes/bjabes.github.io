(function() {
  // Lightbox overlay — created once, reused
  var overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  var lbImg = document.createElement('img');
  overlay.appendChild(lbImg);
  document.body.appendChild(overlay);

  function closeLightbox() { overlay.classList.remove('active'); }
  overlay.addEventListener('click', closeLightbox);
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });

  // Click thumbnail to open lightbox
  document.addEventListener('click', function(e) {
    var thumb = e.target.closest('.margin-thumb');
    if (!thumb) return;
    lbImg.src = thumb.dataset.full || thumb.src;
    overlay.classList.add('active');
  });

  // Scroll-to-top button
  var btn = document.createElement('button');
  btn.className = 'scroll-top';
  btn.innerHTML = '&#8593;';
  btn.title = 'Scroll to top';
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  document.body.appendChild(btn);

  window.addEventListener('scroll', function() {
    if (window.scrollY > window.innerHeight * 3) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  });
})();
