document.getElementById('sign_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const AccountName = document.getElementById('account_name').value;
    const pin = document.getElementById('pin').value;
    console.log(typeof AccountName.length);
    if (AccountName.length === 11) {
        if (parseInt(pin) === 12345) {
            window.location.href = './main.html'
        } else {
            alert('Incorrect PIN, please try again.');
        }
    } else {
        alert('Account number must be 11 digits long.');
    }

});