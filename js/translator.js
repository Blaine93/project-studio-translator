'use strict';
var translateInput = document.getElementById('translate-input');
var translationInput = document.getElementById('translation');

var fromLang = document.getElementById('from-lang');
var toLang = document.getElementById('to-lang');

var switchIcon = document.getElementById('switch');

function translate(text) {
  var processedText = text.trim();
  if (processedText) {
    var fromLangValue = fromLang.getAttribute('attr-value');
    var toLangValue = toLang.getAttribute('attr-value');
    var dictionaryRow = dictionary.find(function (item) {
      return processedText === item[fromLangValue];
    });
    if (dictionaryRow) {
      translationInput.value = dictionaryRow[toLangValue];
    } else {
      translationInput.value = '';
    }
  } else {
    translationInput.value = '';
  }
}

translateInput.addEventListener('keyup', function (e) {
  translate(e.target.value);
});

document.addEventListener('click', function(e) {
  if(e.target && e.target.classList.contains('option')){
    if (e.target.classList.contains('from')) {
      fromLang.setAttribute('attr-value', e.target.value);
      fromLang.innerText = e.target.innerText;
    }
    if (e.target.classList.contains('to')) {
      toLang.setAttribute('attr-value', e.target.value);
      toLang.innerText = e.target.innerText;
    }
    translate(translateInput.value);
  }
});

switchIcon.addEventListener('click', function () {
  var fromLangValue = fromLang.getAttribute('attr-value');
  var toLangValue = toLang.getAttribute('attr-value');
  var fromLangText = fromLang.innerText;
  var toLangText = toLang.innerText;

  fromLang.setAttribute('attr-value', toLangValue);
  fromLang.innerText = toLangText;
  toLang.setAttribute('attr-value', fromLangValue);
  toLang.innerText = fromLangText;

  translateInput.value = translationInput.value;

  translate(translateInput.value);
});