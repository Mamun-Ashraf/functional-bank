document.getElementById('btn-deposit').addEventListener('click', function () {
    const newDeposit = getInputFieldValueById('deposit-field');
    if (newDeposit > 0) {
        const previousDeposit = getTextElementValueById('deposit-amount');
        const updatedDeposit = previousDeposit + newDeposit;
        setTextElementValueById('deposit-amount', updatedDeposit);
        const previousBalance = getTextElementValueById('balance-amount');
        const updatedBalance = previousBalance + newDeposit;
        setTextElementValueById('balance-amount', updatedBalance);
    }
    else {
        alert('Please deposite a valid amount')
    }
})