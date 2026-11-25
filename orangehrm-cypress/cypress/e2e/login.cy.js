describe('Orange HRM Tests', () => {
  const SelectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button",
    selectionTitleTopBar: ".oxd-topbar-header-breadcrumb .oxd-text",
    wrongCredentialsAlert: ".oxd-alert",
    myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input",
    dataField: ".oxd-date-input",
    dateCloseButton: ".oxd-date-input-link.--close",
    submitButton: "[type='submit']"

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
    cy.get(SelectorsList.myInfoButton).click()
    cy.get(SelectorsList.firstNameField).type('FirstNameTest')
    cy.get(SelectorsList.lastNameField).type('LastNameTest')
     cy.get(SelectorsList.genericField).eq(3).clear().type('EmployeeFullTest')
    cy.get(SelectorsList.genericField).eq(4).clear().type('EmployeeId')
    cy.get(SelectorsList.genericField).eq(5).clear().type('Other Id Test')
    cy.get(SelectorsList.genericField).eq(6).clear().type('Drivers License Number Test')
    cy.get(SelectorsList.genericField).eq(7).clear().type('2005-01-23')
    cy.get(SelectorsList.dateCloseButton).click()
    cy.get(SelectorsList.submitButton).eq(0).click()
    cy.get('body', { timeout: 10000 }).should('contain', 'Successfully Updated')
     cy.get('.oxd-toast-close')
   

  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(SelectorsList.usernameField).type(userData.userFail.username)
    cy.get(SelectorsList.passwordField).type(userData.userFail.password)
    cy.get(SelectorsList.loginButton).click()
    cy.get(SelectorsList.wrongCredentialsAlert).should('be.visible')
  })
})