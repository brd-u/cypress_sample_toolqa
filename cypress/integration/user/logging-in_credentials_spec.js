describe('Logging in credentials', () => {


    beforeEach(() => {
        cy.login()
    })

    
    it('log in using cy.request', () => {

        cy.visit('/')
        cy.get('app-menu-item').contains('Logowanie').should('not.exist')
        cy.get('app-menu-item').contains('Rejestracja').should('not.exist')

    })
})