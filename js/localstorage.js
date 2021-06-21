/*
A conditional statement is used to check if the
browser supports the relevant storage APi
*/
if (window.localstorage)
{
  // Get form elements
  var txtUsername = document.getElementById("username");
  var txtAnswer = document.getElementById("answer");

  // Elements populated by localstorage data
  txtUsername.value = localstorage.getItem("username");
  txtAnswer = document.getElementById("answer");

  // data saved
  txtUsername.addEventListener("input", function()
  {
    localstorage.setItem("username", txtUsername.value);
  }, false);

  txtAnswer.addEventListener("input", function()
  {
    localstorage.setItem("answer", txtAnswer.value);
  }, false);

}
