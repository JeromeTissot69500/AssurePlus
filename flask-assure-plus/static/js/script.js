const formRegistration = document.querySelector('.form-sizing-registration');
const formLogin = document.querySelector('.form-sizing-login');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const errorLog = document.createElement('div');

function setErrorLog(form, textError){
    errorLog.innerText = textError; 
    const lastElementForm = form.lastElementChild;
    lastElementForm.remove();
    form.append(errorLog);
    form.append(lastElementForm);
}

if (formRegistration){
    formRegistration.addEventListener('submit',(e)=>{
        for (let element=0; element<(formRegistration.elements.lengt)-1; element++){
            if (formRegistration[element].value === '' || formRegistration[element].value === null){
                e.preventDefault();
                setErrorLog(formRegistration);
            }  
        }
        if (!(emailRegex.test(formRegistration['Email'].value))){
            e.preventDefault();
            setErrorLog(formRegistration, 'Informations invalide ou incomplète');
        }
        if (formRegistration['Password'].value !== formRegistration['PasswordConfirm'].value){
            e.preventDefault();
            setErrorLog(formRegistration, 'Informations invalide ou incomplète');
        }
    })
}
