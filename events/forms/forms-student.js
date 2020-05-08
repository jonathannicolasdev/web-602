console.log("this is the student");

const espn = document.querySelector(".espn-link");

espn.addEventListener("click", function (event) {
  console.log(event);

  const shouldChangePage = confirm(
    "this website might be malicious, do you wish to proceed?"
  );
  console.log(shouldChangePage);
  // !True = false

  // !False = true
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

console.log(signupForm);

signupForm.addEventListener("submit", function (event) {
  console.log(event);
  //   event.preventDefault();
  console.log(event.currentTarget);
  console.log(event.currentTarget.name.value);
  console.log(event.currentTarget.email.value);
  if (name == "maya") {
    alert("your name is valid");
  }
});
