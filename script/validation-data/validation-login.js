const sendData2 = (sRate, count) => {
    if (sRate === count) {
        swal("Welcome! "  , "registration Successful","success");
    }
}

// for final data validation

const successMsg2 = () => {
    let formCon2 = document.getElementsByClassName('form-control');
    let count = formCon2.length - 1;
    for (let i = 0; i < formCon2.length; i++){

        if (formCon2[i].className === "form-control success") {
            let sRate = 0 + i; 
            sendData2(sRate,count);
        } else { return false}
        
    }
}

// more emai validate

const isEmail = (emailVal) => {
  var atSymbol = emailVal.index0f("@");
  if (atSymbol < 1) return false;
  var dot = emailVal.lastindex0f(".");
  if (dot <= atSymbol + 3) return false;
  if (dot === emailVal.length - 1) return false;
  return true;
};  

// define the validate function

const validate2 = () => {
    const emailVal2 = email2.value.trim();
    const passwordVal2 = password2.value.trim();


    // validate mail
    if (emailVal2 === "") {
        setErrorMsg(email2, "email cannot be blank");
    }/*  else if (!email2(emailVal2)) {
    setErrorMsg(emailVal2, "email not valid");
  } */ else {
        setSuccessMsg(email2);
    }

  
    // validate password
    if (passwordVal2 === "") {
        setErrorMsg(password2, "password cannot be blank");
    } else if (passwordVal2.length < 6) {
        setErrorMsg(password2, "password min 6 char");
    } else {
        setSuccessMsg(password2);
    }
 

    function setErrorMsg(input, errormsgs) {
        const formControl = input.parentElement;
        const small = formControl.querySelector("small");
        formControl.className = "form-control error";
        small.innerText = errormsgs;
    }
    function setSuccessMsg(input) {
        const formControl = input.parentElement;
        formControl.className = "form-control success";
    }
}
