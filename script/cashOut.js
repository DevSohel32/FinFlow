document.getElementById('cashOut_btn').addEventListener('click', function (event) {
    event.preventDefault();
    const mainBalance = getInnerTextById('balance');
    const CashOut = getInputElementById('CashOutAmount');
    const pin =  getInputElementById('cashOutPin');
    const AccountName = document.getElementById('account_name').value;
    
    if (AccountName.length === 11) {
        if (pin === 12345) {
            if (CashOut > 0) {
                const newBalance = mainBalance - CashOut;
                getInnerTextByIdAndValue('balance',newBalance)
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