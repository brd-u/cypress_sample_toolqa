import MyAccount from '../../support/PageObjects/MyAccount';
import Generator from '../../support/Helpers/dataGenerator'

describe('Automation Test Suite', () => {

  beforeEach(() => {
    cy.fixture('profile.json').as('data')
    cy.visit('/my-account/')
  })

  context('Registration', function () {

    it.skip('with valid data', () => {

      const myAccount = new MyAccount();
      cy.get('@data').then((data) => {
        cy.log(data)

        myAccount.getRegUserName().type(data.UserName);
        myAccount.getRegEmail().type(data.UserEmail);
        myAccount.getRegPassword().type(data.Password);
        myAccount.getRegisterButton().click();

        //TODO:Assertion

      })

    })

    it('try with incorrect e-mail', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();
      cy.get('@data').then((data) => {

        myAccount.getRegUserName().type(generator.randomString(10));
        myAccount.getRegEmail().type(`${generator.randomString(10)}@${generator.randomString(1)}`);
        myAccount.getRegPassword().type(data.Password);
        myAccount.getRegisterButton().click();
        myAccount.getRegisterError().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('Error: Please provide a valid email address.')
        })
      })
    })
    it('try with incorrect password', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();

      myAccount.getRegUserName().type(generator.randomString(10));
      myAccount.getRegEmail().type(`${generator.randomString(10)}@${generator.randomString(1)}.${generator.randomString(2)}`);
      myAccount.getRegPassword().type(generator.randomString(4)).then(() => {
        myAccount.getRegisterButton().should('have.attr', 'disabled', 'disabled')
      });
    })


    it('try with blank password', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();

      myAccount.getRegUserName().type(generator.randomString(10));
      myAccount.getRegEmail().type(`${generator.randomString(10)}@${generator.randomString(1)}.${generator.randomString(2)}`);
      myAccount.getRegisterButton().click();
      myAccount.getRegisterError().invoke('text').then((text) => {
        cy.expect(text.trim()).to.equal('Error: Please enter an account password.')
      })

    })

    it('try with blank e-mail adress', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();
      cy.get('@data').then((data) => {
        myAccount.getRegUserName().type(generator.randomString(10));
        myAccount.getRegPassword().type(data.Password);
        myAccount.getRegisterButton().click();
        myAccount.getRegisterError().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('Error: Please provide a valid email address.')
        })
      })
    })
  })

  context('Login', function () {

    it('with valid data (username)', () => {

      const myAccount = new MyAccount();
      cy.get('@data').then((data) => {
        myAccount.getUserName().type(data.UserName);
        myAccount.getPassword().type(data.Password);
        myAccount.getLoginButton().click();
        myAccount.getWelcomeText().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('Hello brd_u (not brd_u? Log out)')
        })
      })

    })

    it('with valid data (e-mail adress)', () => {

      const myAccount = new MyAccount();
      cy.get('@data').then((data) => {
        myAccount.getUserName().type(data.UserEmail);
        myAccount.getPassword().type(data.Password);
        myAccount.getLoginButton().click();
        myAccount.getWelcomeText().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('Hello brd_u (not brd_u? Log out)')
        })
      })
    })


    it('try with incorrect e-mail', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();
      cy.get('@data').then((data) => {
        myAccount.getUserName().type(`${data.UserEmail}${generator.randomString(2)}`);
        myAccount.getPassword().type(data.Password);
        myAccount.getLoginButton().click();
        myAccount.getRegisterError().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('ERROR: The username or password you entered is incorrect. Lost your password?')
        })

      })
    })


    it('try with incorrect password', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();
      cy.get('@data').then((data) => {
        myAccount.getUserName().type(data.UserEmail);
        myAccount.getPassword().type(`${data.Password}${generator.randomString(2)}`);
        myAccount.getLoginButton().click();
        myAccount.getRegisterError().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('ERROR: The username or password you entered is incorrect. Lost your password?')
        })

      })
    })


    it('try with blank password', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();
      cy.get('@data').then((data) => {
        myAccount.getUserName().type(data.UserEmail);
        myAccount.getLoginButton().click();
        myAccount.getRegisterError().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('Error: The password field is empty.')
        })

      })

    })


    it('try with blank e-mail adress', () => {

      const myAccount = new MyAccount();
      const generator = new Generator();
      cy.get('@data').then((data) => {
        myAccount.getPassword().type(data.Password);
        myAccount.getLoginButton().click();
        myAccount.getRegisterError().invoke('text').then((text) => {
          cy.expect(text.trim()).to.equal('Error: Username is required.')
        })

      })

    })
  })
})



