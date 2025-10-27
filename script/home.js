document.getElementById('addMoney_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const balanceElement = document.getElementById('balance');
    const currentBalance = parseInt(balanceElement.innerText);
    const addMoney = parseInt(document.getElementById('amount').value);
    const AccountName = document.getElementById('account_name').value;
    const pin = document.getElementById('pin').value;
    if (AccountName.length === 11) {
        if (parseInt(pin) === 12345) {
            if (addMoney > 0) {
                const newBalance = currentBalance + addMoney;
                balanceElement.innerText = newBalance;
                document.getElementById('addMoneyForm').reset()
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