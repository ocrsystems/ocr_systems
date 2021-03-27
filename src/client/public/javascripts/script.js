const reader = new FileReader();
const xhr = new XMLHttpRequest();

const previewFile = () => {
  const preview = document.getElementById('image_preview');
  const file = document.querySelector('input[type=file]').files[0];
  reader.onloadend = function () {
    preview.src = reader.result;
  };
  if (file) {
    reader.readAsDataURL(file);
  } else {
    preview.src = './../images/ui/drag_and_drop.png';
  }
};

const ajaxRequest = () => {
  // event.preventDefault();
  const file = document.querySelector('input[type=file]').files[0];
  console.log('file', file);
  const imageBuffer = reader.result;
  reader.readAsDataURL(file);
  xhr.open('POST', '/tesseract/upload', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  file.buffer = imageBuffer;
  const regData = {
    language: $('#langSelect').val(),
    file,
  };
  xhr.send(JSON.stringify(regData));
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('xhr.response:::', xhr.response);
      $('#download').css({ display: 'block' });
      $('#converted_text').text(xhr.response);
    } else {
      console.log('Error in ajax', `${xhr.status}-${xhr.statusText}`);
    }
  };
};
