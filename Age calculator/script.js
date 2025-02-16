function toggleInfo() {
    var infoPopup = document.getElementById("info");
    infoPopup.style.display = infoPopup.style.display === "block" ? "none" : "block";
  }

  function calculateAge() {
    var dob = new Date(document.getElementById('dob').value);
    var today = new Date();

    // Adjust time for IST (UTC +5:30)
    today.setHours(today.getHours() + 5);
    today.setMinutes(today.getMinutes() + 30);

    // Check if the user has entered a date of birth
    if (!dob.getTime()) {
      alert("Please enter your date of birth.");
      return;
    }

    // Check if the entered date is a future date
    if (dob > today) {
      alert("Date of birth cannot be in the future.");
      return;
    }

    // Calculate the age
    var age = today.getFullYear() - dob.getFullYear();
    var month = today.getMonth() - dob.getMonth();
    var day = today.getDate() - dob.getDate();
    var hour = today.getHours() - dob.getHours();
    var minute = today.getMinutes() - dob.getMinutes();

    if (month < 0 || (month === 0 && day < 0)) {
      age--;
      month += 12;
    }

    if (day < 0) {
      month--;
      day += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }

    if (hour < 0) {
      day--;
      hour += 24;
    }

    if (minute < 0) {
      hour--;
      minute += 60;
    }

    // Display the result
    document.getElementById('result').innerHTML = `Your age is: ${age} years, ${month} months, ${day} days, ${hour} hours, and ${minute} minutes (IST).`;
  }