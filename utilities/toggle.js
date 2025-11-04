handleToggle('cashOut','none')
handleToggle('transaction','none')
document.getElementById('addMoney_box').addEventListener('click',function(){
    handleToggle('cashOut','none');
      handleToggle('transaction','none');
    handleToggle('addMoney','block');
  
})
document.getElementById('cashOut_box').addEventListener('click',function(){
    handleToggle('cashOut','block');
    handleToggle('transaction','none');
    handleToggle('addMoney','none');
}) 

document.getElementById('transaction_box').addEventListener('click',function(){
    handleToggle('cashOut','none');
    handleToggle('addMoney','none');
    handleToggle('transaction','block');
})