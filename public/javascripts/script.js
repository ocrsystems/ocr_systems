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
    preview.src = '';
  }
};

const ajaxRequest = () => {
  // event.preventDefault();
  const file = document.querySelector('input[type=file]').files[0];
  console.log('file', file);
  console.log(21321312);
  const imageBuffer = reader.result;
  reader.readAsDataURL(file);
  xhr.open('POST', '/upload', true);
  xhr.setRequestHeader('Content-Type', 'application/json');
  file.buffer = imageBuffer;
  const regData = {
    language: $('#langSelect').val(),
    file
  };
  console.log('regData', regData)
  xhr.send(JSON.stringify(regData));
  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4) return;
    if (xhr.status === 200) {
      console.log('SUCCESSSS');
      // $('#result').html(`Registration Success  <br /> 
      //                           Now you can sign in to your account`);
      // $("#regForm").hide('slow');
    } else {
      console.log(xhr.status + '-' + xhr.statusText);
    }
  };
};

// var regData = {
//   name: $('#userName').val(),
//   surname: $('#userSurname').val(),
//   email: $('#userEmail').val(),
//   gender: $('input[name="gender"]:checked').val(),
//   password: $('#userPassword').val()
// }
// ajaxReg(regData);