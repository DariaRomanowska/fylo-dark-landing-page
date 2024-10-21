const elementMail = document.querySelector('#email'),
        formBtn = document.querySelector('.submit'),
        formElement = document.querySelector('.form'),
textError = document.querySelector('.text-error');
console.log(123)
formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(elementMail.value)
    let regExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (regExp.test(elementMail.value)) {
        textError.style.display = 'none';
        formElement.setAttribute('action', '###');
        formElement.submit();
    } else {
        textError.style.display = 'flex';
    }
});

