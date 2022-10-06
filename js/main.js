// USER LOGIN / SIGNUP

// HTML VARIABLES
let signInBtn = document.getElementById('sign-in-btn');
let signUpBtn = document.getElementById('sign-up-btn');

// SIGN UP BTN CLICKED
signUpBtn.addEventListener('click', signUpHandler);

let users = JSON.parse(localStorage.getItem("users")) ?? [];
function signUpHandler() {
  console.log('Sign Up Btn Clicked');
  let username = document.getElementById('usernameInput').value
  let password  = document.getElementById('passwordInput').value
  let pswdConfirmation = document.getElementById('confirmPswdInput').value
  let valid = true
  if(username !== "" && password !== "" && pswdConfirmation !== "") {
    for(let i = 0; i < users.length; i++) {
      console.log(i)
      if(users[i].name === username) {
        valid = false
        alert("username already taken")
        break;
      }
    }
    if(valid) {
      if(password === pswdConfirmation) {
        users.push(newUser(username, password))
        save()
        alert("Signed up!")
      } else {
        alert("both passwords must be identical")
      }
    }
  } else {
    alert("all required fields must be filled")
  }
}

// SIGN IN BTN CLICKED
signInBtn.addEventListener('click', signInHandler);

function newUser(username, userPassword) {
  return {
    name: username,
    password: userPassword,
  }
}

function save() {
  localStorage.setItem("users", JSON.stringify(users))
}

function signInHandler() {
  let username = document.getElementById('usernameInput').value
  let password  = document.getElementById('passwordInput').value
  let valid = false
  console.log(password)
  for(let i = 0; i < users.length; i++) {
    console.log(users[i].password)
    if(username === users[i].name && password === users[i].password) {
      alert("Success!")
      valid = true
      break;
    }
  }

  if(!valid) {
    alert("Wrong!")
  }
}
