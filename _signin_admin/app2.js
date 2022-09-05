function enter_res() {
  var inp_email = document.getElementById("inp_email");
  var inp_pass = document.getElementById("inp_pass");
  if (inp_email.value == "admin" && inp_pass.value == "admin") {
    location = "/forms/show_es.html";
  }
  else{
    alert("incorrect inputs")
  }
}
