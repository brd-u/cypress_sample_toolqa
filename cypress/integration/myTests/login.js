describe('My First Test', () => {
  it('Visits the Kitchen Sink', () => {
    cy.visit('/')

    // cy.get('[href="https://www.behance.net/brd-u"] > .ra-icon').click()

  //   cy.location().should((loc) => {




  //     cy.log(loc.href)
  //     expect(loc).to.eq('#ds/')
   


  //   // cy.contains('type').click()

  //   // // Should be on a new URL which includes '/commands/actions'
  //   // cy.url().should('include', '/commands/actions')

  //   // // Get an input, type into it and verify that the value has been updated
  //   // cy.get('.action-email')
  //   //   .type('fake@email.com')
  //   //   .should('have.value', 'fake@emaildf.com')
  // })
  })
  // it('Visits the Kitchen Sink pause', () => {
  //   cy.visit('/')
  //   cy.pause()
  //   cy.contains('type').click()

  //   // Should be on a new URL which includes '/commands/actions'
  //   cy.url().should('include', '/commands/actions')

  //   // Get an input, type into it and verify that the value has been updated
  //   cy.get('.action-email')
  //     .type('fake@email.com')
  //     .should('have.value', 'fake@emaildf.com')
  // })
})