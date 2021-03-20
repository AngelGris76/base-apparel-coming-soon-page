const email = document.getElementById('email');
const errorIcon = document.getElementById('error-icon');
const errorMessage = document.getElementById('error-message');
const submitButton = document.getElementById('form__submit');
const form = document.getElementById('form');

let isError = false;

const hideError = () =>
{
    errorIcon.classList.add('form__error--hide');
    errorMessage.classList.add('form__error--hide');
    email.classList.remove('form__mail--error');
    email.removeAttribute('aria-invalid');
    isError = false;
}

email.addEventListener('change', (e) =>
{
    if (email.value.length > 0)
    {
        if (validateEmail(email.value) === false)
        {
            errorIcon.classList.remove('form__error--hide');
            errorMessage.classList.remove('form__error--hide');
            email.classList.add('form__mail--error');
            email.setAttribute('aria-invalid', 'true');
            isError = true;
        }
        else
            hideError();
    }
    else
        hideError();
});

email.addEventListener('keyup', (e) =>
{
    if (email.value.length === 0) hideError();
});

form.addEventListener('submit', (e) =>
{
    e.preventDefault();
    if (!isError && (email.value.length > 0)) form.submit();
})