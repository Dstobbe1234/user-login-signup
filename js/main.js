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
  for(let i = 0; i < users.length; i++) {
    if(users[i].username !== username) {
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
  for(let i = 0; i < users.length; i++) {
    if(username === users[i].name) {
      if(password !== users[i].password) {
        alert("Not a valid password")
        break;
      } else {
        alert("Success!")
      }
    }
  }
  
}
