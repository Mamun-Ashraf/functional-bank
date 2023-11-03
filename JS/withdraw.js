document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdraw = getInputFieldValueById('withdraw-field');
    const previousBalance = getTextElementValueById('balance-amount');
    if (newWithdraw > 0 && newWithdraw <= (previousBalance - 100)) {
        const previousWithdraw = getTextElementValueById('withdraw-amount');
        const updatedWithdraw = previousWithdraw + newWithdraw;
        setTextElementValueById('withdraw-amount', updatedWithdraw);
        const updatedBalance = previousBalance - newWithdraw;
        setTextElementValueById('balance-amount', updatedBalance);
    }
    else if (newWithdraw > (previousBalance - 100)) {
        alert('You do not have sufficient balance')
    }
    else {
        alert('Please withdraw a valid amount')
    }
})