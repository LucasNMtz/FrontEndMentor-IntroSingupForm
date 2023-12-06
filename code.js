document.addEventListener("DOMContentLoaded", function() {
    // Form Input Validation
    const inputContainers = document.querySelectorAll(".input-container");
    
    document.getElementById("main__form").addEventListener("submit", function (event) {
    
        inputContainers.forEach(function (container) 
        {
            const input = container.querySelector("input");
            const validationMessage = container.querySelector(".validation-message");
            const errorIcon = container.querySelector(".error-icon");
            const inputValue = input.value;
            const inputName = input.name;
    
            validationMessage.textContent = `${inputName} cannot be empty`;
    
            if (inputName === "Email" && inputValue.trim() !== '') {
    
                if (!isValidEmail(inputValue)) {

                    event.preventDefault();
                    input.style.border = "1px solid var(--Red)";
                    input.style.color = "var(--Red)";
                    validationMessage.textContent = "Looks like this is not an email";
                    validationMessage.style.display = "block";
                    errorIcon.style.display = "block";
                }
                else{
                    input.style.border = "1px solid var(--Grayish-Blue)";
                    input.style.color = "var(--Grayish-Blue)";
                    validationMessage.style.display = "none";
                    errorIcon.style.display = "none";
                }
            }
            else if (inputValue.trim() === '') {
                
                event.preventDefault();
                input.style.border = "1px solid var(--Red)";
                validationMessage.style.display = "block";
                errorIcon.style.display = "block";
            }
            else {
                input.style.border = "1px solid var(--Grayish-Blue)";
                validationMessage.style.display = "none";
                errorIcon.style.display = "none";
            }
        });
    })
    
    function isValidEmail(email) 
    {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }
    // Form Input Validation
});
