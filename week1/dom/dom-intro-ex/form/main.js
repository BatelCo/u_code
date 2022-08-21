const fname  = document.getElementById("name")
const dsalary  = document.getElementById("dsalary")
const date = document.getElementById("bday")
const phone = document.getElementById("phone")
const submit = document.getElementById("submit")
const errorMsg = document.createElement("label")
const form = document.getElementById("form")
const welcome = document.createElement("h3")

const sendForm= function(){
    let firstName = fname.value
    let salary = dsalary.value
    let birthday = bday.value
    let phoneNumber = phone.value
    

    if(firstName.length<=2){
      console.log("ERROR less than 2 char")
      errorMsg.innerText = "name error"

    }else if(salary<10000 || salary>16000){
        errorMsg.innerText = "salary error"
        console.log("ERROR salary")
    }else if(!birthday){
        errorMsg.innerText = "bday error"
    }else if(phoneNumber.length!=10){
        errorMsg.innerText = "phone error"
    }else{
        form.style.display="none"
        welcome.innerText=`welcome ${firstName}`
        document.body.appendChild(welcome)
        return
    }
    document.body.appendChild(errorMsg)

    

}
submit.onclick = sendForm
