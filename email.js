// var emailElement = document.querySelector("email");
function getEmail() {
    var parts = ['ilbolza', 'gmail', 'com'];
    return parts[0] + '@' + parts[1] + '.' + parts[2];
}

function mailTo() {
    location.href='mailto:' + getEmail();
}

function copyEmail() {
    var textArea = document.createElement("textarea");
    document.body.appendChild(textArea);
    textArea.value = getEmail();
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
}
