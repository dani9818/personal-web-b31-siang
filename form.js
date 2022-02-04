function showData(){
    
    let name = document.getElementById("name_text").value
    let email = document.getElementById("email").value
    let phone = document.getElementById("phone").value
    let subject = document.getElementById("subject").value
    let message = document.getElementById("message").value

    // document.getElementById("name_text").value =""

    // console.log(name_text)

    // validasi
    // if (name == "laper"){
    //     console.log("yo makan");
    // }else if (name == "makan"){
    //     console.log("yo kenyang")
    // }else{
    //     console.log("yo mbuh");
    // }

    if (name == ""){
        alert('name input field must be not empty')
    }

    if (email == ""){
        alert('email input field must be not empty')
    }

    if (phone == ""){
        alert('phone input field must be not empty')
    }

    if (subject == ""){
        alert('subject input field must be not empty')
    }

    if (message == ""){
        alert('message input field must be not empty')
    }

    // dom create  
    let emailReciver ='daniramdhani404@gmail.com'
    
    let a = document.createElement("a")
    a.href = `mailto:${emailReciver}?subject=${subject}&body=Hello my name is${name},${subject},${message}, this is my phone number ${phone}`

    a.click()

    let dataObject ={
        name,
        email,
        phone,
        subject,
        message
    }
    console.table(dataObject)
}
