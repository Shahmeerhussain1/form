function enter_res() {
  var inp_email = document.getElementById("inp_email");
  var inp_pass = document.getElementById("inp_pass");
  if (inp_email.value == "sham@gmail.com" && inp_pass.value == 123) {
    location = "/forms/show_es.html";
  }
  else{
    alert("incorrect inputs")
  }
}
