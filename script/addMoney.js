document.getElementById('addMoney_btn').addEventListener('click', function (event) {
    event.preventDefault();

    const mainBalance = getInnerTextById('balance');
    const addMoney = getInputElementById('amount');
    const pin = getInputElementById('pin');
    const AccountName = document.getElementById('account_name').value;

    if (AccountName.length === 11) {
        if (pin === 12345) {
            if (addMoney > 0) {
                const newBalance = mainBalance + addMoney;
                document.getElementById('balance').innerText = newBalance;
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