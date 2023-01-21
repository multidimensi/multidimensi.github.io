var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 5000);

// contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbzhzYFr03b87tT6xTDwLkCAng5tWnHJNujmDLX3jNB-2iqumSzPuZ2dB0q3tqjP_hEDtQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => console.log('Success!', response))
    .catch((error) => console.error('Error!', error.message));
});
