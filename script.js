function openModal(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = src;
  lightbox.style.display = "flex";
}

function closeModal() {
  document.getElementById("lightbox").style.display = "none";
}
