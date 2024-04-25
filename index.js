// Card 
const securityNumber = document.querySelector('.security-num');
const cardNumber = document.querySelector('.card__number');
const cardholder = document.querySelector('.card__holder');
const expiryDate = document.querySelector('.card__expiry-date');

// Inputs
const cardholderInput = document.querySelector('.input__cardholder');
const cardnumberInput = document.querySelector('.input__cardnumber');
const expiryMonthInput = document.querySelector('.input__expiry-date__month');
const expiryYearInput = document.querySelector('.input__expiry-date__year');
const allInputs = document.querySelectorAll('input');
const cvcInput = document.querySelector('.input__cvc');

// form/thank you div
const formDiv = document.querySelector('form')
const gratitudeDiv = document.querySelector('.thank-you__display');
gratitudeDiv.style.display = 'none';

// error checking
const errorText = document.querySelectorAll('.error');

// if theres an error in the input we're mapping over, the p element would have the same index, we can then select that error p tag

let error = false;
const errors = {
    emptyInput: 'Cant be blank',
    wrongInput: 'Wrong format, numbers only',
    insufficientCharLength: 'Please use at least 16 characters'

};

const cardDetails = {

}

// confirm button

const confirmButton = document.querySelector('.confirm-btn');

confirmButton.addEventListener('click', (e) => {
    e.preventDefault()
    error = false

    allInputs.forEach((input, index) => {
        // Check for empty inputs
       if (input.value.length < 1){
        error = true
        errorText[index].textContent = errors.emptyInput
        errorText[index].style.display = 'block'
       }
       // Check for non-numeric inputs (except for cardholder input)
       if (index > 0 & isNaN(input.value)){
        error = true
        errorText[index].textContent = errors.wrongInput
        errorText[index].style.display = 'block'
       }

        //  when to display that the numbers are too short
       if (input === cardnumberInput && cardnumberInput.value.length < 16 && cardnumberInput.value.length >= 1){
        error = true;
        errorText[index].textContent = errors.insufficientCharLength
        errorText[index].style.display = 'block'
    }

    if (!error){
        errorText[index].style.display = 'none'
    }

    })

     //    if no problem:
     if (!error) {
        // Display card details if there are no errors
        cardholder.textContent = cardholderInput.value;
        let formattedValue = '';

        for (let i = 0; i < cardnumberInput.value.length; i += 4) {
          formattedValue += cardnumberInput.value.substr(i, 4) + ' ';
        }

        // Trim any extra spaces at the end
        formattedValue = formattedValue.trim();

        cardNumber.textContent = formattedValue;
        // Concatenate expiry month and year values
        expiryDate.textContent = `${expiryMonthInput.value}/${expiryYearInput.value}`;
        securityNumber.textContent = cvcInput.value;

        // display the thank you screen
        formDiv.style.display = 'none';
        gratitudeDiv.style.display = 'flex';
    }

})


