import HomePage from '../../support/PageObjects/HomePage';

describe('Automation Test Suite', () => {

  // before(function () {
  //   cy.fixture('profile').as('data')
  // })

  beforeEach(() => {
    // alias the data fixtures
    cy.fixture('profile.json').as('data')
  })

  it('Valid registration', () => {

    const homePage = new HomePage();
    cy.get('@data').then((data) => {
      cy.log(data)
      cy.visit('/my-account/')

      homePage.getUserName().type(data.UserName);
      homePage.getEmail().type(data.UsereEmail);
      homePage.getPassword().type(data.NewPassword);
      homePage.getRegisterButton().click();

    })




  })

})

// describe('Array', function() {
//   before(function() {
//     // ...
//   });

//   describe('#indexOf()', function() {
//     context('when not present', function() {
//       it('should not throw an error', function() {
//         (function() {
//           [1, 2, 3].indexOf(4);
//         }.should.not.throw());
//       });
//       it('should return -1', function() {
//         [1, 2, 3].indexOf(4).should.equal(-1);
//       });
//     });
//     context('when present', function() {
//       it('should return the index where the element first appears in the array', function() {
//         [1, 2, 3].indexOf(3).should.equal(2);
//       });
//     });
//   });
// });