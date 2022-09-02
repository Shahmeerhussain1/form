var names = document.getElementById("name");
var father_name = document.getElementById("father_name")
var dob = document.getElementById("dob")
var mob_number = document.getElementById("mob_number")
var cnic_number = document.getElementById("cnic_number")
var address = document.getElementById("address")
var gender = document.getElementById("gender")
var qualification = document.getElementById("qualification")
var mail = document.getElementById("mail")
var count = 0






function Check(name,fathername,mob_number,cnic_number,mail){
    this.name = name
    this.fathername = fathername
    this.mob_number = mob_number
    this.cnic_number = cnic_number
    this.mail = mail

}
function get_data(){
    event.preventDefault()
var name_another = document.getElementById("name");
var name_chk = /^[a-zA-Z ]+$/.test( name_another.value)
if( name_chk == false){
    swal("Enter Proper Name!!")
}
var father_name_another = document.getElementById("father_name")
var father_name_chk_ = /^[a-zA-Z ]+$/.test( father_name_another.value)
if( father_name_chk_ == false){
    swal("Enter Proper FatherName!!")
}

var mob_number_another = document.getElementById("mob_number")
var mob_no_chk_ = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/.test( mob_number_another.value)
if( mob_no_chk_ == false){
    swal("Enter Proper Mobile number!!")
}


var cnic_number_another = document.getElementById("cnic_number").value
var cnic_check = /^[0-9]{5}-[0-9]{7}-[0-9]$/.test(cnic_number_another)
if( cnic_check == false){
    swal("Enter Proper CNIC number!!")
}

var mail_another = document.getElementById("mail")
var check_mal = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail_another.value)
if( check_mal == false){
    swal("Enter Proper e-mail!!")
}

if( name_chk == true && father_name_chk_ == true && mob_no_chk_ == true && cnic_check == true && check_mal == true){
    on_ex_page()
   obj[`ID # ${count + 1}`] = new Check(names.value,father_name.value,mob_number.value,cnic_number.value,mail.value)
   localStorage.setItem("data",JSON.stringify(obj))
   count = count+1 ;  
}

}


var getting = JSON.parse(localStorage.getItem("data"))
if(getting){
    var obj = getting
    console.log(obj)
}
else{
    var obj = {}
    
}
count = Object.keys(getting).length ;

function on_ex_page(){
    location = "../index.html"

}



var show_res = document.getElementById("show_res");
for(var keys in getting){
    console.log(getting[keys])
for(var key2 in getting[keys]){
    
show_res.innerHTML += `
    
  
    <tr>
    <td>${keys}</td>
    <td>
    ${getting[keys].name } 
    </td>
    <td>${getting[keys].fathername}</td>
    <td>${getting[keys].mail}</td>
    <td>${getting[keys].cnic_number}</td>
    <td>${getting[keys].mob_number}</td>
    
    </tr>`
    break
}
}

// <tr>
// <th>Sno</th>
// <th>Name</th>
// <th>Father name</th>
// <th>Cnic</th>
// <th>Mobile</th>
// </tr>
// <tr>
// <td>${count}</td>
// <td>
// ${getting[keys].name } 
// </td>
// <td>${getting[keys].fathername}</td>
// <td>${getting[keys].cnic_number}</td>
// <td>${getting[keys].mob_number}</td>

// </tr>


