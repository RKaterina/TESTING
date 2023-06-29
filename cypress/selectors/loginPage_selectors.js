// Selectors for Login page

export default class LoginPage_selectors {

    loginPage = ".login"
    emailInputField = "#login_username"
    passwordInputField = "#loginPassword"
    submitButton = "#login_form_submit"
    emailIncorrectErrorMessage = ".alert"
    
  //data json:
    myAccountURL = "/myaccount"
    emailCorrectData = "edaglidenok.86+86@gmail.com"
    noSymbolsBeforeAt = "@gmail.com"
    noSymbolsAfterAt = "edaglidenok.86+86@"
    noSymbolsAfterDot = "edaglidenok.86+86@gmail."
    noDot = "edaglidenok.86+86@gmailcom"
    noAt = "edaglidenok.86+86gmail.com"
    oneSymbolsAfterDot = "edaglidenok.86+86@gmail.c"
}