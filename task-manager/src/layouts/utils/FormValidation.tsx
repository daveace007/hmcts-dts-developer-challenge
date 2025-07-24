

export const validateForm = () =>{
    'use strict'
    //obtain all forms requiring validation
    const forms : NodeListOf<HTMLFormElement> = document.querySelectorAll(".needs-validation");

    //iterate through the forms
    Array.from(forms).forEach((form) =>{
        form.addEventListener('submit', (e:Event) =>{
            if (!form.checkValidity()){
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
    });


};