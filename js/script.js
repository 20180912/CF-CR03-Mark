function calculateInsurance() {

    /*Setting the target as well as all input fields as variables*/
    var target = document.getElementById("result")
    var name = document.getElementById('name').value;
    var age = Number(document.getElementById('age').value);    
    var country = document.getElementById('country').value;
    var power = Number(document.getElementById('power').value);
    
    /*Reset target*/
    target.innerHTML = ""

    /*Calculate the insurance premium*/
    switch (country) {
        case "Austria":
            var insurance = Math.round(power * 100 / age + 50);
            break;
        case "Hungary":
            var insurance = Math.round(power * 120 / age + 100);
            break;
        case "Greece":
            var insurance = Math.round(power * 150 / (age+3) + 50);
            break;
    }

    /*Check for invalid entries and return the result*/
    if (name == "") {
        alert("Please enter a name")
    } else if (isNaN(insurance)) {
        alert ("Age and horsepower have to be numbers")
    } else if (age<17) {
        alert ("I think you are too young to drive")
    }
    else {
        target.innerHTML = `${name}, your insurance costs ${insurance}€`;
    }
}
/*Add listener*/
document.getElementById('submit').addEventListener('click', calculateInsurance, false)