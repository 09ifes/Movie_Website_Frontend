import HomePage from "../HomePage";
import '../index.css';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  if (window.parent != window.top) {
    window.top && window.top.__Cypress__ ? r = window.parent === window.top ? window : window.parent : window.top && (r = window.top, window.top, window.self)
    }
  
describe('<HomePage>', () => {
  it('Should mount Homepage', () => {
    cy.mount(<HomePage />)
  })
  it('Should have correct title for all films', () => {
    cy.mount(<HomePage />)
    cy.get('[data-cy=home-all-films-title]').should('have.text', 'All Films')

  })

  it('Should have correct title for most popular', () => {
    cy.mount(<HomePage />)
    cy.get('[data-cy=home-most-popular-title]').should('have.text', 'Most Popular')

  })

  it('Should have correct title for most recent', () => {
    cy.mount(<HomePage />)
    cy.get('[data-cy=home-most-recent-title]').should('have.text', 'Most Recent')

  })

  it('Should have correct view more text', () => {
    cy.mount(<HomePage />)
    cy.get('[data-cy=all-films-view-more]').should('have.text', 'View More')
  })

  it('Should redirect to the all films page', () => {
    cy.mount(<HomePage />)
    cy.get('[data-cy=all-films-view-more]').click() 
  })

  
  
//    it('Should redirect to the most popular page', () => {
//      //cy.mount(<HomePage />)
//      cy.get('[data-cy=partial-details-732]').click() 
//    })

//   it('Should redirect to the most recent page', () => {
//     cy.mount(<HomePage />)
//     cy.get('[data-cy=most-recent-view-more]').click()
    
//   })
















})