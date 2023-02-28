function AddEmpolyees(){
    let name= document.getElementById("name")
    let email= document.getElementById("email")
    let phone= document.getElementById("phone")
    let address= document.getElementById("address")


    if(name.value.length ==0 || email.value.length == 0 || phone.value.length == 0 || address.value.length ==0){
        alert("Please enter full detail.")
        return
    }


 let tr = document.createElement("tr")
 let nameTd = document.createElement("td")
 let emailTd = document.createElement("td")
 let phoneTd = document.createElement("td")
 let addressTd = document.createElement("td")

 nameTd.innerText = name.value 
 emailTd.innerText = email.value 
 phoneTd.innerText = phone.value 
 addressTd.innerText = address.value 

 tr.appendChild(nameTd)
 tr.appendChild(emailTd)
 tr.appendChild(phoneTd)
 tr.appendChild(addressTd)


 let table = document.getElementById('table')
  table.appendChild(tr)
 

  name.value = ''
  email.value = ''
  phone.value = ''
  address.value = ''




}