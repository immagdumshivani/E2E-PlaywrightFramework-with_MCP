export const LoginLocators = {
  email:
    "input[data-qa='login-email'], input[placeholder='Email Address'], input[type='email']",

  password:
    "input[data-qa='login-password'], input[placeholder='Password'], input[type='password']",

  loginButton: "button[data-qa='login-button'], button:has-text('Login')",

  loggedInUser: "a:has-text('Logged in as')",

  logout: "a[href='/logout'], a:has-text('Logout')",
};
