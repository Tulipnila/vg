document.addEventListener('DOMContentLoaded', function() {
  const container = document.getElementById('container');
  const loginContainer = document.getElementById('loginbox');
  
  const heading = document.createElement('h1');
  heading.textContent = 'LOGIN';
  loginContainer.appendChild(heading);
  
  const subHead = document.createElement('h3');
  subHead.textContent = 'Welcome back! Please login to your account.';
  loginContainer.appendChild(subHead);
  
  const userNameField = document.createElement('div');
  loginContainer.appendChild(userNameField);
  
  const userNameInput = document.createElement('input');
  userNameInput.type = 'text';
  userNameInput.placeholder = 'Username';
  userNameField.appendChild(userNameInput);
  
  const passwordField = document.createElement('div');
  loginContainer.appendChild(passwordField);
  
  const passwordInput = document.createElement('input');
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Password';
  passwordField.appendChild(passwordInput);
  
  const errorMsg = document.createElement('div');
  errorMsg.id = 'error';
  passwordField.appendChild(errorMsg);
  errorMsg.style.display = 'none';
  
  const loginButton = document.createElement('button');
  loginButton.textContent = 'Login';
  loginButton.id = 'submit';
  loginContainer.appendChild(loginButton);
  
  loginButton.addEventListener('click', function() {
    const userNameInputValue = userNameInput.value.trim();
    const passwordInputValue = passwordInput.value.trim();
    if (userNameInputValue === '' || passwordInputValue === '') {
      errorMsg.innerText = 'Input fields cannot be blank';
      errorMsg.style.cssText = 'display:block; color:red;';
    } else {
      // Fetch JSON data
      fetch('users.json')
        .then(response => response.json())
        .then(data => {
          const accountHolders = data.accountHolders;
          const isValidCredentials = accountHolders.some(accountHolder =>
            accountHolder.username === userNameInputValue && accountHolder.password === passwordInputValue
          );
          if (isValidCredentials) {
            window.location.href = 'dashboard.html';
          } else {
            errorMsg.innerText = 'Invalid username or password';
            errorMsg.style.cssText = 'display:block; color:red;';
          }
        })
        .catch(error => {
          console.error('Error fetching JSON data:', error);
        });
    }
  });
     //crate userpass
  const userPass = document.createElement('div');
  userPass.id = 'userPass'
  loginContainer.appendChild(userPass);


      //create newuser
  const newUser = document.createElement('div');
  newUser.id = 'newUser';
  newUser.textContent = 'New user'
  document.getElementById('userPass').appendChild(newUser);

      //create forgotpassword
  const forgot = document.createElement('div');
  forgot.id = 'pass';
  forgot.textContent = 'Forgot password'
  document.getElementById('userPass').appendChild(forgot);

  newUser.addEventListener('click', function(){
      window.location.href = "newuser.html";  

  })
});
