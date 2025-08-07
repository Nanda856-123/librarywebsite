window.onload = function () {
  var passwordInput = document.getElementById("loginPassword");
  var form = document.getElementById("loginForm");
  var strengthText = document.getElementById("strengthText");
  
  passwordInput.oninput = function () {
    var password = passwordInput.value;

    if (password.length < 8) {
      strengthText.textContent = "Poor Password";
      strengthText.style.color = "red";
    } else if (
      hasUppercase(password) &&
      hasLowercase(password) &&
      hasNumber(password)
    ) {
      strengthText.textContent = "Strong Password";
      strengthText.style.color = "green";
    } else if (
      (hasUppercase(password) && hasLowercase(password)) ||
      (hasUppercase(password) && hasNumber(password)) ||
      (hasLowercase(password) && hasNumber(password))
    ) {
      strengthText.textContent = "Medium Strength Password";
      strengthText.style.color = "orange";
    } else {
      strengthText.textContent = "Poor Password";
      strengthText.style.color = "red";
    }
  };

  
  form.onsubmit = function (e) {
    var password = passwordInput.value;

    if (
      password.length < 8 ||
      !hasUppercase(password) ||
      !hasLowercase(password) ||
      !hasNumber(password)
    ) {
      alert("Password must be at least 8 characters long and include uppercase, lowercase, and a number.");
      e.preventDefault(); 
    }
  };

  function hasUppercase(str) {
    return /[A-Z]/.test(str);
  }

  function hasLowercase(str) {
    return /[a-z]/.test(str);
  }

  function hasNumber(str) {
    return /[0-9]/.test(str);
  }
};
