$(document).ready(function () {
            $("#button").click(function () {
                var firstname = $("#firstname").val();
                var lastname = $("#lastname").val();
                var username = $("#username").val();
                var email = $("#lastname").val();
                var address = $("#address").val();
                var lastname = $("#lastname").val();
                var lastname = $("#lastname").val();
                var lastname = $("#lastname").val();

                //Checikng for blank fields
                if (firstname == '' || lastname == '' || username == '' || email == '' || address == '') {

                    alert("Please fill the empty fields.");
                } else {
                    if (password.length < 8) {
                        $('input[type="password"]').css("border", "2px solid red");
                        $('input[type="password"]').css("boxshadow", "0 0 3px solid red");
                        alert("Password must be of minimum 8 characters");
                        $('#password').val('');
                    } else {
                        alert('Welcome ' + uid + '! :)');
                    }
                }
            });