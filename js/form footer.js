var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbxovYLTMaAL-4D7ujlRmiP9Ph_GQqHNc1c01RO83MsvRpV_t0v6hd7RwP5KuQaGqqapDA/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
