const cardNumber = document.getElementById('card-number'); 
const cardOwner = document.getElementById('card-owner');
const cardMonth = document.getElementById('card-month');
const cardYear = document.getElementById('card-year')
const numberInput = document.getElementById('number-input');
const nameInput = document.getElementById('name-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const cvcInput = document.getElementById('cvc-input')
const confirmBtn = document.getElementById('confirm-btn');
const complete = document.getElementById('complete');
const inputContainer = document.getElementById('input-container')
const cvcEl = document.getElementById('cvc');

const nameWarn = document.getElementById('name-warn');
const numberWarn = document.getElementById('number-warn');
const dateWarn = document.getElementById('date-warn');
const cvcWarn = document.getElementById('cvc-warn');

complete.style.display = "none";


const nameRegex = /^[a-zA-Z ]{2,30}$/; // Name validator
const cardRegex = /^[\d]{4}\s?[\d]{4}\s?[\d]{4}\s?[\d]{4}$/ // Credit card number validator 
const dateRegex = /^[\d]{2}$/ // Date regex
const cvcRegex = /^[\d]{3}$/ // Cvc regex


const cardChange = () => { // Confirm button function
  const name = nameInput.value;
  const number = numberInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  const cvc = cvcInput.value;

  if(!name || !number || !month || !year || !cvc){ // If input is empty
    if(!name){
      nameInput.style.borderColor = "red"
      nameWarn.textContent = "Can't be blank!"
    }
    if(!number){
      numberInput.style.borderColor = "red"
      numberWarn.textContent = "Can't be blank!"
    }
    if(!month){
      monthInput.style.borderColor = "red"
      dateWarn.textContent = "Can't be blank!"
    }
    if(!year){
      yearInput.style.borderColor = "red"
      dateWarn.textContent = "Can't be blank!"
    }
    if(!cvc){
      cvcInput.style.borderColor = "red"
      cvcWarn.textContent = "Can't be blank!"
    }
  }

  if(!nameRegex.test(name) || !cardRegex.test(number) || !dateRegex.test(month) || !dateRegex.test(year) ||!cvcRegex.test(cvc)) {
    if(name){
      if(!nameRegex.test(name)) {
        nameInput.style.borderColor = "red"
        nameWarn.textContent = "Enter a valid name!"
      }
    }
    if(number){
      if(!cardRegex.test(number)){
        numberInput.style.borderColor = "red"
        numberWarn.textContent = "Enter a valid card number!"
      }
    }
    if(month){
      if(!dateRegex.test(month)){
        monthInput.style.borderColor = "red"
        dateWarn.textContent = "Enter a valid date!"
      }
    }
    if(year){
      if(!dateRegex.test(year)){
        yearInput.style.borderColor = "red"
        dateWarn.textContent = "Enter a valid date!"
      }
    }
    if(cvc){
      if(!cvcRegex.test(cvc)){
        cvcInput.style.borderColor = "red"
        cvcWarn.textContent = "Enter a valid cvc!"
      }
    }
  }

  if(nameRegex.test(name) || cardRegex.test(number) || dateRegex.test(month) || dateRegex.test(year) ||cvcRegex.test(cvc)) {
    if(nameRegex.test(name)){
      nameInput.style.borderColor = "rgb(170, 168, 168)"
      nameWarn.textContent = ''
    }
    if(cardRegex.test(number)){
      numberInput.style.borderColor = "rgb(170, 168, 168)"
      numberWarn.textContent = ''
    }
    if(dateRegex.test(month)){
      monthInput.style.borderColor = "rgb(170, 168, 168)"
    }
    if(dateRegex.test(year)){
      yearInput.style.borderColor = "rgb(170, 168, 168)"
    }
    if(dateRegex.test(month) && dateRegex.test(year)){
      dateWarn.textContent = ''
    }
    if(cvcRegex.test(cvc)){
      cvcInput.style.borderColor = "rgb(170, 168, 168)"
      cvcWarn.textContent = ''
    }
  }

  if(nameRegex.test(name) && cardRegex.test(number) && dateRegex.test(month) && dateRegex.test(year) &&cvcRegex.test(cvc)) {
    cardOwner.textContent = name;
    cardNumber.textContent = number;
    cardMonth.textContent = `${month}/`
    cardYear.textContent = `${year}`
    confirmBtn.style.display = 'none';
    inputContainer.style.display = 'none'
    complete.style.display = 'flex'
    cvcEl.textContent = cvc
  }
} 


nameInput.addEventListener('keyup',function(){
  const name = nameInput.value;
  if(nameRegex.test(name)){
    nameInput.style.borderColor = "rgb(170, 168, 168)"
    cardOwner.innerText = name;
    nameWarn.textContent = ''
  } else{
    nameInput.style.borderColor = "red"
    nameWarn.textContent = "Enter a valid name!"
  }
})
numberInput.addEventListener('keyup', function(){
  const number = numberInput.value;
  if(cardRegex.test(number)){
    numberInput.style.borderColor = "rgb(170, 168, 168)"
    cardNumber.innerText = number;
    numberWarn.textContent = ''
  } else{
    numberInput.style.borderColor = "red"
    numberWarn.textContent = "Enter a valid card number!"
  }
})
monthInput.addEventListener('keyup', function(){
  const month = monthInput.value;
  if(dateRegex.test(month)){
    monthInput.style.borderColor = "rgb(170, 168, 168)"
    cardMonth.innerText = month + "/";
    dateWarn.textContent = ''
  } else{
    monthInput.style.borderColor = "red"
    dateWarn.textContent = "Enter a valid date!"
  }
})

yearInput.addEventListener('keyup', function(){
  const year = yearInput.value;
  if(dateRegex.test(year)){
    yearInput.style.borderColor = "rgb(170, 168, 168)"
    cardYear.innerText = year
    dateWarn.textContent = ''
  } else{
    yearInput.style.borderColor = "red"
    dateWarn.textContent = "Enter a valid date!"
  }
})
cvcInput.addEventListener('keyup', function(){
  const cvc = cvcInput.value;
  if(cvcRegex.test(cvc)){
    cvcInput.style.borderColor = "rgb(170, 168, 168)"
    cvcEl.innerText = cvc
    cvcWarn.textContent = ''
  } else{
    cvcInput.style.borderColor = "red"
    cvcWarn.textContent = "Enter a valid cvc!"
  }
})
