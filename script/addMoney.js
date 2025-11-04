document.getElementById('addAmount').addEventListener('click', function (event) {
    event.preventDefault();
    function generateRandomID() {
        return "TXN-" + Math.floor(100000 + Math.random() * 900000);
    }
    const mainBalance = getInnerTextById('balance');
    const addAmount = getInputElementById('amount');
    const pin = getInputElementById('pin');
    const AccountName = document.getElementById('account_name').value;
    const randomID = generateRandomID();

    if (AccountName.length === 11) {
        if (pin === 12345) {
            if (addAmount > 0) {
                const newBalance = mainBalance + addAmount;
                getInnerTextByIdAndValue('balance', newBalance);
                document.getElementById('addMoneyForm').reset();




                const tbody = document.getElementById("transaction_data");
                const tr = document.createElement('tr');
                tr.classList.add("border-b", "hover:bg-gray-50", "transition");
                tr.innerHTML = `
                              <td class="py-3 px-4">${AccountName}</td>
                              <td class="py-3 px-4"> ${randomID} </td>
                             <td class="py-3 px-4">Deposit</td>
                             <td class="py-3 px-4"> ${addAmount} </td>
                            <td class="py-3 px-4 text-green-600 font-medium">Completed</td>`;

                tbody.appendChild(tr);
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