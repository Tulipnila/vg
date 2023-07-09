// loginController.js

import LoginModel from './loginModel.js';
import LoginView from './loginView.js';

class LoginController {
  constructor() {
    this.model = new LoginModel();
    this.view = new LoginView();

    // Initialize event listeners
    this.view.loginFormSubmitEvent(this.handleLoginSubmit);
  }

  handleLoginSubmit = (username, password) => {
    // Implement login form submit event handler
    this.model.loginUser(username, password);
  }
}

// Instantiate the LoginController
const loginController = new LoginController();
