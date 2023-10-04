let input_one = document.getElementById("input_one");
let input_two = document.getElementById("input_two");


input_one.addEventListener("input", function () {
    const unit_one = document.getElementById("unit_one").value;
    const unit_two = document.getElementById("unit_two").value;
    
    if (unit_one === 'Meter') {
        if (unit_two === 'Meter') {
            input_two.value = input_one.value;
        } else if (unit_two === 'Feet') {
            input_two.value = input_one.value * 3.28084;
        } else if (unit_two === 'Yard') {
            input_two.value = input_one.value * 1.09361;
        } else if (unit_two === 'Inch') {
            input_two.value = input_one.value * 39.3701;
        }
    } else if (unit_one === 'Feet') {
        if (unit_two === 'Meter') {
            input_two.value = input_one.value * 0.3048;
        } else if (unit_two === 'Feet') {
            input_two.value = input_one.value;
        } else if (unit_two === 'Yard') {
            input_two.value = input_one.value * 0.333333;
        } else if (unit_two === 'Inch') {
            input_two.value = input_one.value * 12;
        }
    } else if (unit_one === 'Yard') {
        if (unit_two === 'Meter') {
            input_two.value = input_one.value * 0.9144;
        } else if (unit_two === 'Feet') {
            input_two.value = input_one.value * 3;
        } else if (unit_two === 'Yard') {
            input_two.value = input_one.value;
        } else if (unit_two === 'Inch') {
            input_two.value = input_one.value * 36;
        }
    } else if (unit_one === 'Inch') {
        if (unit_two === 'Meter') {
            input_two.value = input_one.value * 0.0254;
        } else if (unit_two === 'Feet') {
            input_two.value = input_one.value * 0.0833333;
        } else if (unit_two === 'Yard') {
            input_two.value = input_one.value * 0.0277778;
        } else if (unit_two === 'Inch') {
            input_two.value = input_one.value;
        }
    }
});

