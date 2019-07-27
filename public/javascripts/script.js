function ajaxReg(data) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/regist', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

    xhr.onreadystatechange = function () {
        if (xhr.readyState !== 4) return;
        if (xhr.status === 200) {
            $('#result').html(`Registration Success  <br /> 
                                Now you can sign in to your account`);
            $("#regForm").hide('slow');
        } else {
            console.log(xhr.status + '-' + xhr.statusText);
        }
    }
}