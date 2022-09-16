

// -----------------------------------------------------------
const sendData = (sRate, count) => {
    if (sRate === count) {
  /*alert*/  swal("Welcome! "  , "registration Successful","success");
    }
}

// for final data validation

const successMsg = () => {
    let formCon = document.getElementsByClassName('form-control');
    let count = formCon.length - 1;
    for (let i = 0; i < formCon.length; i++){

        if (formCon[i].className === "form-control success") {
            let sRate = 0 + i; 
            sendData(sRate,count);
            return true;
        } else { return false}
        
    }
}



// define the validate function

const validate = () => {
  const usernameVal = username.value.trim();
  const emailVal = email.value.trim();
  const numberVal = number.value.trim();
  const passwordVal = password.value.trim();
  const cpasswordVal = cpassword.value.trim();

  

  // vadidate username
  if (usernameVal === "") {
    setErrorMsg(username, "username cannot be blank");
  } else if (usernameVal.length <= 2) {
    setErrorMsg(username, "username min 3 char");
  } else {
    setSuccessMsg(username);
  }

  // validate mail
  if (emailVal === "") {
    setErrorMsg(email, "email cannot be blank");
    } /*else if (!email(emailVal)) {
    setErrorMsg(emailVal, "email not valid");
  } */ else {
    setSuccessMsg(email);
    // setErrorMsg(email, "email cannot be blasessionStorage")
  }

  // validate age

  if (numberVal === "") {
    setErrorMsg(number, "age cannot be blank");
  }
  else if (numberVal > 130) {
    setErrorMsg(number, "you are too old!");
  }
  else if (numberVal < 1) {
    setErrorMsg(number, "you are too young!");
  } else {
    setSuccessMsg(number);
  }

    // validate password
  if (passwordVal === "") {
    setErrorMsg(password, "password cannot be blank");
  } else if (passwordVal.length < 6) {
    setErrorMsg(password, "password min 6 char");
  } else {
    setSuccessMsg(password);
  }

  // validate password
  if (cpasswordVal === "") {
    setErrorMsg(cpassword, "password cannot be blank");
  } else {
    setSuccessMsg(cpassword);
  }

  if(successMsg()){
    return true;
  }
    
}

// -- -- -- -- -- -- -- -- -- -- --

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
