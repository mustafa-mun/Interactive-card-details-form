const cardNumber = document.getElementById('card-number'); 
const cardOwner = document.getElementById('card-owner');
const cardDate = document.getElementById('card-date');
const numberInput = document.getElementById('number-input');
const nameInput = document.getElementById('name-input');
const monthInput = document.getElementById('month-input');
const yearInput = document.getElementById('year-input');
const cvcInput = document.getElementById('cvc-input')
const btn = document.querySelector('button');
const complete = document.getElementById('complete');
const inputContainer = document.getElementById('input-container')
const cvcEl = document.getElementById('cvc');

const nameWarn = document.getElementById('name-warn');
const numberWarn = document.getElementById('number-warn');
const dateWarn = document.getElementById('date-warn');
const cvcWarn = document.getElementById('cvc-warn');

complete.style.display = "none";

const nameRegex = /^[a-zA-Z ]{2,30}$/; // Name validator
const cardRegex = /^[\d]{4}\s[\d]{4}\s[\d]{4}\s[\d]{4}$/ // Credit card number validator 
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
    cardDate.textContent = `${month}/${year}`
    btn.textContent = 'Continue'
    inputContainer.style.display = 'none'
    complete.style.display = 'flex'
    cvcEl.textContent = cvc
  }
} 