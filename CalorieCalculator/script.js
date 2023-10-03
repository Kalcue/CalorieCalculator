document
  .getElementById("calorieForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const age = parseInt(document.getElementById("age").value);
    const weightInPounds = parseFloat(
      document.getElementById("weightInPounds").value
    );
    const feet = parseInt(document.getElementById("feet").value);
    const inches = parseInt(document.getElementById("inches").value);
    const gender = document.getElementById("gender").value;
    const activityLevel = document.getElementById("activityLevel").value;

    // conversion for the weight and height to reflect the imperial system
    const weightInKilograms = weightInPounds * 0.45359237;
    const heightInCentimeters = feet * 30.48 + inches * 2.54;

    // this is a calculation using the Harris-Benedict equation
    let calorieResult;

    if (gender === "male") {
      calorieResult =
        88.362 +
        13.397 * weightInKilograms +
        4.799 * heightInCentimeters -
        5.677 * age;
    } else {
      calorieResult =
        447.593 +
        9.247 * weightInKilograms +
        3.098 * heightInCentimeters -
        4.33 * age;
    }

    switch (activityLevel) {
      case "sedentary":
        calorieResult *= 1.2;
        break;
      case "lightlyActive":
        calorieResult *= 1.375;
        break;
      case "moderatelyActive":
        calorieResult *= 1.55;
        break;
      case "veryActive":
        calorieResult *= 1.725;
        break;
      case "superActive":
        calorieResult *= 1.9;
        break;
      default:
        break;
    }

    const caloriesForGain = calorieResult + 500;
    const caloriesForLoss = calorieResult - 500;

    const resultElement = document.getElementById("results");
    resultElement.innerHTML = `To maintain your weight, consume approximately ${calorieResult.toFixed(
      2
    )} calories per day.<br>
    To gain weight, consume approximately ${caloriesForGain.toFixed(
      2
    )} calories per day.<br>
    To lose weight, consume approximately ${caloriesForLoss.toFixed(
      2
    )} calories per day.`;
  });
