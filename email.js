// var emailElement = document.querySelector("email");
function mailTo() {
    var email = this.attributes['data-user'].value + '@' + this.attributes['data-domain'].value;
    location.href='mailto:' + email;
}

function copyEmail() {
    var textArea = document.createElement("textarea");
    var text = 'ilbolza';
    document.body.appendChild(textArea);
    textArea.value = text;
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
