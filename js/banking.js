//handle deposite button event 
document.getElementById('deposite-button').addEventListener('click', function () {
    //get the amount deposited
    const depositeInput = document.getElementById('deposite-input');
    const newDepositeText = depositeInput.value;
    const newDepositeAmount = parseFloat(newDepositeText);

    //update deposite account
    const depositeTotal = document.getElementById('deposite-total');
    const previousDepositeText = depositeTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeText);
    const newDepositeTotal = previousDepositeAmount + newDepositeAmount;

    depositeTotal.innerText = newDepositeTotal;

    //update balance account
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount + newDepositeTotal;

    balanceTotal.innerText = newBalanceTotal;

    //clear the deposite input field
    depositeInput.value = '';
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    //get the amount withdrawed
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(newWithdrawText);

    //update withdraw amount
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

    withdrawTotal.innerText = newWithdrawTotal;

    //update balance account
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    //clear the withdraw input field
    withdrawInput.value = '';
})