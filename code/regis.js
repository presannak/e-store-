function myFunction() {
    console.log("Login");
    const container = document.querySelector(".container"),
        pwShowHide = document.querySelectorAll(".showHidePw"),
        pwFields = document.querySelectorAll(".password");
    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            pwFields.forEach(pwField => {
                if (pwField.type === "password") {
                    pwField.type = "text";

                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye-slash", "uil-eye");
                    })

                } else {
                    pwField.type = "password";
                    pwShowHide.forEach(icon => {
                        icon.classList.replace("uil-eye", "uil-eye-slash");
                    })
                }

            })

        })

    })

    signup.addEventListener("click", () => {
        container.classList.add("active");

    });

    login.addEventListener("click", () => {
        container.classList.remove("active");

    });
}
function Login_validation() {
    var password = document.Login.login_password.value;
    if (password == "") {
        alert("Enter the password");
        password.focus();
        return false;
    }
    if (password.length <= 5) {
        alert("Enter a valid password");
        password.focus();
        return false;
    }
}