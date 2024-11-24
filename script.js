const form = document.querySelector('form');
const buttons = document.querySelectorAll('.button');
const BillInp = document.querySelector('.Bill');
const NOPInp =  document.querySelector('.nop');
const errorMessage = document.querySelector('.error-message');
const tipAmount = document.querySelector('.tipAmount');
const totalAmount = document.querySelector('.totalAmount');
const reset = document.querySelector('.reset');
const input = document.querySelector('.input');

buttons.forEach((B) =>{
  B.addEventListener('click', function(e){
    e.preventDefault();    
    const parcent = Number(B.textContent.match(/\d+/)[0]); 
    const Bill = BillInp.value;
    const NOP = NOPInp.value;
 
    RESULT1 =((Number(Bill)*(parcent/100))/NOP).toFixed(2);
    tipAmount.innerHTML = `<span>${RESULT1}</span>`; 

    RESULT2 = ((Number(Bill)/NOP)+ ((Number(Bill)*(parcent/100))/NOP)).toFixed(2);
    totalAmount.innerHTML = `<span>${RESULT2}</span>`;  

    if(NOPInp.value === ''){
        errorMessage.classList.remove('hidden');
        NOPInp.classList.add('active')
    }  
    })
})

input.addEventListener('input',function(e){
    e.preventDefault();
    const Bill = BillInp.value;
    const NOP = NOPInp.value;
    const inputValue = input.value
 
    RESULT1 =((Number(Bill)*(inputValue/100))/NOP).toFixed(2);
    tipAmount.innerHTML = `<span>${RESULT1}</span>`; 

    RESULT2 = ((Number(Bill)/NOP)+ ((Number(Bill)*(inputValue/100))/NOP)).toFixed(2);
    totalAmount.innerHTML = `<span>${RESULT2}</span>`; 

    if(NOPInp.value === ''){
        errorMessage.classList.remove('hidden');
        NOPInp.classList.add("active")
    } 
})

reset.addEventListener('click',function(e){
    window.location.reload();
})

//   if(NOP === '' || NOP < 0 || isNaN(NOP)){
//         errorMessage.classList.remove('hidden');
//         NOP.classList.add('active')
//     } else {
//         const RESULT1 =((Bill * value ) /(NOP)).toFixed(2);
//         tipAmount.innerHTML = `<span>${RESULT1}</span>`;
//     }
//      console.log(result1.innerHTML);