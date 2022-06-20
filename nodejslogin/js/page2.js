

function passvalue() {

    // calculate bmi
    var height = parseInt(document.getElementById("height").value);
    var weight = parseInt(document.getElementById("weight").value);

    var result;
    result = (weight / ((height * height)/10000)).toFixed(2);
    alert(result);
    localStorage.setItem("result", result);


    var name = document.getElementById("name").value;
    localStorage.setItem("name", name);

    var age = document.getElementById("age").value;
    localStorage.setItem("age", age);

    var weight = document.getElementById("weight").value;
    localStorage.setItem("weight", weight);
    var height = document.getElementById("height").value;
    localStorage.setItem("height", height);

    var option = document.getElementById('language').value;

    localStorage.setItem("option", option);

    var BMI = document.getElementById("mybmi").innerHTML;
    localStorage.setItem("BMI", BMI);



    return false;
}
