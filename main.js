const dayInput = document.querySelector('.day input');
const monthInput = document.querySelector('.month input');
const yearInput = document.querySelector('.year input');

const dayError = document.querySelector('.day .error');
const monthError = document.querySelector('.month .error');
const yearError = document.querySelector('.year .error');

const dayLabel = document.querySelector('.day .input-label');
const monthLabel = document.querySelector('.month .input-label');
const yearLabel = document.querySelector('.year .input-label');

const yearsOutput = document.querySelector('.output .years .highlight');
const monthsOutput = document.querySelector('.output .months .highlight');
const daysOutput = document.querySelector('.output .days .highlight');

const calculateButton = document.querySelector('.submit-button');

calculateButton.addEventListener('click', calculate);

function calculate(e) {
  e.preventDefault();

  const day = dayInput.value || 0;
  const month = monthInput.value || 0;
  const year = yearInput.value || 0;

  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentDay = currentDate.getDate();

  const isValid = validateInputs(day, month, year, currentYear);

  if (!isValid) {
    yearsOutput.textContent = '--';
    monthsOutput.textContent = '--';
    daysOutput.textContent = '--';
    return;
  }

  let years = currentYear - year;
  let months = currentMonth - month;
  let days = currentDay - day;

  if (months < 0) {
    years--;
    months = 12 + months;
  }

  if (days < 0) {
    months--;
    days = 30 + days;
  }

  yearsOutput.textContent = years;
  monthsOutput.textContent = months;
  daysOutput.textContent = days;
}

function validateInputs(day, month, year, maxYear) {
  let valid = true;

  if (day < 1 || day > 31) {
    dayError.classList.add('error-label');
    dayInput.classList.add('error-input');
    dayLabel.classList.add('error-label');
    valid = false;
  } else {
    dayError.classList.remove('error-label');
    dayInput.classList.remove('error-input');
    dayLabel.classList.remove('error-label');
  }

  if (month < 1 || month > 12) {
    monthError.classList.add('error-label');
    monthInput.classList.add('error-input');
    monthLabel.classList.add('error-label');
    valid = false;
  } else {
    monthError.classList.remove('error-label');
    monthInput.classList.remove('error-input');
    monthLabel.classList.remove('error-label');
  }

  if (year < 1900 || year > maxYear) {
    yearError.classList.add('error-label');
    yearInput.classList.add('error-input');
    yearLabel.classList.add('error-label');
    valid = false;
  } else {
    yearError.classList.remove('error-label');
    yearInput.classList.remove('error-input');
    yearLabel.classList.remove('error-label');
  }

  return valid;
}
