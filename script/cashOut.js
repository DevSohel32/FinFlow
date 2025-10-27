document.getElementById('cashOut_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseInt(balanceElement.innerText);
    const CashOut = parseInt(document.getElementById('CashOutAmount').value);
    console.log(CashOut);
    const AccountName = document.getElementById('account_name').value;
    const pin = document.getElementById('cashOutPin').value;
    if (AccountName.length === 11) {
        if (parseInt(pin) === 12345) {
            if (CashOut > 0) {
                const newBalance = currentBalance - CashOut;
                balanceElement.innerText = newBalance;
                document.getElementById('CashOutForm').reset()
            } else {
                alert('Please enter a valid amount greater than 0.');
            }

        } else {
            alert('Incorrect PIN, please try again.');
        }
    } else {
        alert('Account number must be 11 digits long.');
    }
})