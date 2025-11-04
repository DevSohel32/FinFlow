document.getElementById('cashOutAmount').addEventListener('click', function (event) {
    event.preventDefault();
    function generateRandomID() {
        return "TXN-" + Math.floor(100000 + Math.random() * 900000);
    }
    const mainBalance = getInnerTextById('balance');
    const CashOutAmount = getInputElementById('CashOutMoney');
    const pin = getInputElementById('cashOutPin');
    const AccountName = document.getElementById('cashOut_Number').value;
    const randomID = generateRandomID();
    console.log(AccountName);
    if (AccountName.length === 11) {
        if (pin === 12345) {
            if (mainBalance > CashOutAmount || mainBalance === CashOutAmount) {
                const newBalance = mainBalance - CashOutAmount;
                getInnerTextByIdAndValue('balance', newBalance);
                document.getElementById('CashOutForm').reset();

                const tbody = document.getElementById('transaction_data');
                const tr = document.createElement('tr');
                tr.classList.add("border-b", "hover:bg-slate-900/70", "transition");
                tr.innerHTML = ` <tr class="border-b hover:bg-gray-50 transition">
            <td class="py-3 px-4">${AccountName}</td>
            <td class="py-3 px-4"> ${randomID} </td>
            <td class="py-3 px-4">Withdrawal</td>
             <td class="py-3 px-4 text-red-500"> -${CashOutAmount} </td>
            <td class="py-3 px-4"></td>
            <td class="py-3 px-4 text-green-600 font-medium">Completed</td>
          </tr>`
                tbody.appendChild(tr);

            } else {
                alert('Please enter a valid amount less than your available balance.');
            }

        } else {
            alert('Incorrect PIN, please try again.');
        }
    } else {
        alert('Account number must be 11 digits long.');
    }
})