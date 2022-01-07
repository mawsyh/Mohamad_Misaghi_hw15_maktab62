$(document).ready(function () {
    $('form').on('submit', function(e){
        e.preventDefault();
        const userNameEl = $('#username').val()
        const passwordEl = $('#password').val()
        const firstNameEl = $('#firstname').val()
        const lastNameEl = $('#lastname').val()
        const genderEl = $('#gender').val()
        userNameValidator(userNameEl)
        function userNameValidator(username) {
            if(username.length < 2) return userNameError()
             passwordChecker(passwordEl)
        }
        function passwordChecker(password) {
            if(!password.match(/^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d]{8,}$/)) return passWordError()
            firstNameChecker(firstNameEl)
        }
        function firstNameChecker(firstname) {
            if(firstname.length < 2 || firstname.length > 30) return inputError()
            lastNameChecker(lastNameEl)
        }
        function lastNameChecker(lastname) {
            if(lastname.length < 2 || lastname.length > 30) return inputError()
            sendRequest()
        }
        function sendRequest() {
            $.ajax({
                url : "/signup",
                type: "POST", 
                data : {
                    username: userNameEl,
                    password: passwordEl,
                    firstname: firstNameEl,
                    lastname: lastNameEl,
                    gender: genderEl,
                },
                success: function(response, textStatus, jqXHR) {
                    success()
                },
                error: function () {
                    usedError()
                }
            });
        }
    });

    




    // =========== error Functions
    function userNameError() {
        $('#userErr').toggleClass('invisible')
        setTimeout(function () {
             $('#userErr').toggleClass('invisible');
          }, 3000);
    }
    function passWordError() {
        $('#passErr').toggleClass('invisible')
        setTimeout(function () {
             $('#passErr').toggleClass('invisible');
          }, 3000);
    }
    function inputError() {
        $('#inputErr').toggleClass('invisible')
        setTimeout(function () {
             $('#inputErr').toggleClass('invisible');
          }, 3000);
    }
    function usedError() {
        $('#usedErr').toggleClass('invisible')
        setTimeout(function () {
             $('#usedErr').toggleClass('invisible');
          }, 3000);
    }
    // success message
    function success() {
        $('#succMsg').toggleClass('invisible');
        setTimeout(function () {
            $('#succMsg').toggleClass('invisible');
            $(location).attr('href', 'http://localhost:4000/login');
         }, 3000);
    }
});
