const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');

searchForm.addEventListener('submit', (e) => {
  e.preventDefault(); // mencegah form dikirim ke server

  // mengambil nilai dari input field
  const searchTerm = searchInput.value;

  // mengarahkan ke halaman pencarian Google
  window.location.href = `https://www.google.com/search?q=${searchTerm}`;
});
