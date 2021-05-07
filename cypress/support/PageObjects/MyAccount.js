class MyAccount {

   //REGISTRATION
   getRegUserName() {
      return cy.get('#reg_username');
   }
   getRegEmail() {
      return cy.get('#reg_email');
   }
   getRegPassword() {
      return cy.get('#reg_password');
   }
   getRegisterButton() {
      return cy.get('.woocommerce-Button');
   }

   //LOGIN
   getUserName() {
      return cy.get('#username');
   }
   getPassword() {
      return cy.get('#password');
   }
   getLoginButton() {
      return cy.get(':nth-child(3) > .woocommerce-button')
   }

   //MY ACCOUNTR

   getWelcomeText() {
      return cy.get('.woocommerce-MyAccount-content > :nth-child(2)')
   }

   //OTHER
   getRegisterError() {
      return cy.get('.woocommerce-error > li')
   }

}
export default MyAccount