// Challenge 1: dokümandaki tüm resimlerin üzerine mouse ile gelince(mouseenter) 
//üzerine gelinen resme class olarak grayscale eklensin. mouse çıkınca(mouseleave) grayscale classı çıkarılsın.

function handleImageHover(event) {
  const image = event.target;

  if (event.type === 'mouseenter') {
    image.classList.add('grayscale');
  }
  else if (event.type === 'mouseleave') {
    image.classList.remove('grayscale');
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('img');

  images.forEach(function (image) {
    image.addEventListener('mouseenter', handleImageHover);
    image.addEventListener('mouseleave', handleImageHover);
  });
});
/*
Challenge 2: sayfa aktif iken(herhangi bir yerine mouse ile tıklayınca):
- klavyedeki 1 tuşuna basınca body'e theme1, 2'ye basınca theme2, 3'e basınca theme3 classlarını eklesin.
- "Esc" tuşuna basınca classı sıfırlasın
*/

document.addEventListener('DOMContentLoaded', function () {
  document.body.classList.add('theme1');

  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case '1':
        document.body.className = 'theme1';
        break;
      case '2':
        document.body.className = 'theme2';
        break;
      case '3':
        document.body.className = 'theme3';
        break;
      case 'Escape':
        document.body.className = '';
        break;
      default:
        break;
    }
  });

  document.addEventListener('mousedown', function () {
    document.body.classList.add('active');
  });

  document.addEventListener('mouseup', function () {
    document.body.classList.remove('active');
  });
});
/*
Challenge 3: Input alanına bir şeyler yazınca(input event):
- Büyük harfe dönüştürsün
- 5 karakter'den büyük olduğunda buttonı enabled etsin. küçük ise disabled etsin.
*/

document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('input');
  const submitButton = document.querySelector('button');

  inputField.addEventListener('input', function (event) {
    inputField.value = inputField.value.toUpperCase();

    if (inputField.value.length > 5) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  });
});

/*
Challenge 4: Form submit edildiğinde;
- input alanındaki metni alıp, id'si submitResult olan paragrafa metin olarak "{value} başarı ile kaydedildi..." yazsın.
- input alanını sıfırlasın.
- kaydet butonunu disabled yapsın.
*/
document.addEventListener('DOMContentLoaded', function () {
  const inputField = document.querySelector('input');
  const submitButton = document.querySelector('button');
  const submitResult = document.getElementById('submitResult');
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const inputValue = inputField.value;

    submitResult.textContent = `${inputValue} başarı ile kaydedildi...`;
    inputField.value = '';
    submitButton.disabled = true;
  });
});
