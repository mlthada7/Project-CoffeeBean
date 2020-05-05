function validate() {
    if (document.userForm.firstname.value == "") {
        alert("Please provide your firstname!");
        document.userForm.firstname.focus();
        return false;
    }
    if (document.userForm.lastname.value == "") {
        alert("Please provide your lastname!");
        document.userForm.lastname.focus();
        return false;
    }
    if (document.userForm.username.value == "") {
        alert("Please provide your username!");
        document.userForm.username.focus();
        return false;
    }
    if (document.userForm.email.value == "") {
        alert("Please provide your Email!");
        document.myForm.email.focus();
        return false;
    }
    if (document.userForm.address.value == "") {
        alert("Please provide your address!");
        document.userForm.address.focus();
        return false;
    }
    if (document.userForm.zip.value == "" || isNaN(document.userForm.zip.value) ||
        document.userForm.zip.value.length != 5) {
        alert("Please provide a zip in the format #####.");
        document.userForm.zip.focus();
        return false;
    }
    if (document.getElementById("coffeeItem").value == 0 || document.getElementById("qtyItem").value == 0) {
        alert("Select coffee and quantity");
    }
    return (true);
}