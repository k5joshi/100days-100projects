const submit_btn = document.querySelector("button");
const eyeIcon =document.querySelector(".ri-eye-off-fill");
const passwordInputField = document.querySelector("#password");

submit_btn.addEventListener('click',function name(params) {
    console.log("submitted")
})

eyeIcon.addEventListener("click",function name(params){

    if(passwordInputField.type === "password"){
        password.type = "text";
        eyeIcon.className = "ri-eye-fill"
    }else{
        password.type = "password";
        eyeIcon.className = "ri-eye-off-fill"
    }
} )