function login() {
  const correctUser = "1";
  const correctPass = "1";

  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (user === correctUser && pass === correctPass) {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("galleryBox").classList.remove("hidden");
  } else {
    document.getElementById("message").innerHTML = "❌ WRONG 🙄";
  }
}

function logout() {
  document.getElementById("galleryBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("message").innerHTML = "";
}