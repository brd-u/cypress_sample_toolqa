describe('Login', () => {


    beforeEach(() => {
        cy.visit('/login')
    })

    it('greets with Sign in', () => {
        cy.contains('.login-header', 'Logowanie')

    })

    it('links to Register', () => {
        cy
            .contains('tutaj')
            .should('have.attr', 'href', '/register')
    })

    it('requires email and password', () => {
        cy.get('.mat-button-wrapper').contains('ZALOGUJ').click()
        cy.get('mat-error[id="mat-error-0"]')
            .should('contain', 'Pole wymagane')
        cy.get('mat-error[id="mat-error-1"]')
            .should('contain', 'Pole wymagane')
    })

    it('requires password', () => {
        cy.get('input[name="forname"]').type('test@test.com{enter}')

        cy.get('mat-error[id="mat-error-0"]')
            .should('not.exist')
        cy.get('mat-error[id="mat-error-1"]')
            .should('contain', 'Pole wymagane')
    })

    it('navigates to home page on successful login', () => {
        const userMail = Cypress.env('userMail')
        const password = Cypress.env('password')
        cy.get('app-menu-item').contains('Logowanie')
        cy.get('app-menu-item').contains('Rejestracja')
        cy.get('input[name="forname"]').type(userMail, { log: false })
        cy.get('input[name="forpass"]').type(password, { log: false })
        cy.get('.mat-button-wrapper').contains('ZALOGUJ').click()
        cy.get('app-menu-item').contains('Logowanie').should('not.exist')
        cy.get('app-menu-item').contains('Rejestracja').should('not.exist')
        cy.hash().should('eq', '')
    })



    it('requires valid username and password', () => {

        cy.get('app-menu-item').contains('Logowanie')
        cy.get('app-menu-item').contains('Rejestracja')
        cy.get('input[name="forname"]').type("test@test.mail", { log: false })
        cy.get('input[name="forpass"]').type("wrongPass", { log: false })
        cy.get('.mat-button-wrapper').contains('ZALOGUJ').click()
        cy.get('mat-error[id="mat-error-0"]')
            .should('contain', 'Niepoprawne dane logowania.')
        cy.get('mat-error[id="mat-error-1"]')
            .should('contain', 'Niepoprawne dane logowania.')
        cy.get(".toaster-message")
            .should('contain', "Niepoprawne dane logowania.")
    })

})