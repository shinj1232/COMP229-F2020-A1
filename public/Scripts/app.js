// IIFE -- Immediately Invoked Function Expression

(function(){

    function Start()
    {
        console.log("app started...");
        if(document.title == "Contact"){
            let sendButton = document.getElementById("submitbutton");
            let cancelButton = document.getElementById("cancel");
            let form = document.forms[0];

            sendButton.addEventListener("click", (event) =>{
                event.preventDefault();

                let firstName = document.getElementById("f_name");
                let lastName = document.getElementById("l_name");
                let contactNumber = document.getElementById("phone");
                let emailAddress = document.getElementById("email");
                let message = document.getElementById("message");

                console.info(`First NAME: ${f_name} 
                Last Name: ${l_name}
                Contact Number: ${contactNumber}
                Email Address: ${emailAddress}
                Message : ${message}`);
                form.reset();

            });

            cancelButton.addEventListener("click", (event) => {
                event.preventDefault();
                if(confirm("are you sure?"))
                {
                    location.href = "/home";
                }
            });
        }
    }
    window.addEventListener("load", Start);
})();