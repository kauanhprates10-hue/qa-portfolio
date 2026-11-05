describe('Orange HRM Tests', () => {
  const SelectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb .oxd-text",
    wrongCredentialsAlert: ".oxd-alert"
  }

  it('Login com sucesso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type('Admin')
    cy.get(SelectorsList.passwordField).type('admin123')
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.selectionTitleTopBar).contains('Dashboard')
  })

  it('Login com falha', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type('Admin')
    cy.get(SelectorsList.passwordField).type('admin')
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialsAlert)
  })
})