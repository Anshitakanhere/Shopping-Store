function changeMainImage(src) {
  document.getElementById('mainProductImage').src = src;
}

function selectOption(button) {
  if (button.classList.contains('disabled')) return;
  const siblings = button.parentNode.querySelectorAll('button');
  siblings.forEach(b => b.classList.remove('active'));
  button.classList.add('active');
}
