function validateForm() {
    let a = document.getElementById("email").value;
    let b = document.getElementById("pass").value;
    let f = document.getElementById("age").value;
    let g = document.getElementById("number").value;

    if(isNaN(f) || isNaN(g)) {
        alert("You need to enter a number into the age and phone number box!");
    }
    if((a == "") || (b == "")) {
        alert("You need to enter all the information required!");
    }
}