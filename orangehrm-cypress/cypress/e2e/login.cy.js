describe('Orange HRM Tests', () => {
  const SelectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb .oxd-text",
    wrongCredentialsAlert: ".oxd-alert"
  }

  const userData = {
    userSuccess:{
      username: 'Admin',
      password: 'admin123'
    },
    userFail:{
      username: 'teste',
      password: '123' 
    
    }
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(SelectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.selectionTitleTopBar).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialsAlert)
  })
})