'use strict';

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reader = new FileReader();
var xhr = new XMLHttpRequest();

var previewFile = function previewFile() {
  var preview = document.getElementById('image_preview');
  var file = document.querySelector('input[type=file]').files[0];
  reader.onloadend = function () {
    preview.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = '';
  }
};

var ajaxRequest = function ajaxRequest() {
  // event.preventDefault();
  var file = document.querySelector('input[type=file]').files[0];
  console.log('file', file);
  console.log(21321312);
  var imageBuffer = reader.result;
  reader.readAsDataURL(file);
  xhr.open('POST', '/upload', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  file.buffer = imageBuffer;
  var regData = {
    language: $('#langSelect').val(),
    file: file
  };
  xhr.send((0, _stringify2.default)(regData));
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('SUCCESSSS,', xhr.response);
      $('#download').css({ display: 'block' });
      $('#converted_text').html(xhr.response);
    } else {
      console.log('Error in ajax', xhr.status + '-' + xhr.statusText);
    }
  };
};