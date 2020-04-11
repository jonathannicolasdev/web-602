console.log("hello");

const espn = document.querySelector(".espn");

espn.addEventListener("click", function (event) {
  const shouldChangePage = confirm(
    "This website might be malicious!, do you wish to proceed?"
  );
  if (!shouldChangePage) {
    event.preventDefault();
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", function (event) {
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    alert("Sorry bro");
    event.preventDefault();
  }
});
