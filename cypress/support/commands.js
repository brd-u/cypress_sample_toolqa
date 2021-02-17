Cypress.Commands.add('login', () => {

    const userMail = Cypress.env('userMail')
    const password = Cypress.env('password')

    if (typeof password !== 'string' || !password && typeof userMail !== 'string' || !userMail) {
        throw new Error('Missing password or user mail value!')
    }

    cy.request({
        method: 'POST',
        url: '/api/api/login',
        body: {
            email: userMail,
            password: password
        }
    }).its('body')
    .then((re)=>(cy.log(window.document.cookie)))
        .then((resp) => {
            window.localStorage.setItem('credentials', resp.access_token)    
            
        })
})