import NavbarSearch from '../navbar_components/NavbarSearch';
import '../index.css';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })

  if (window.parent != window.top) {
    window.top && window.top.__Cypress__ ? r = window.parent === window.top ? window : window.parent : window.top && (r = window.top, window.top, window.self)
    }

    describe('<NavbarSearch>', () => {
        it('Should mount navbar', () => {
            cy.mount(<NavbarSearch />)
        })
    
        // it('Should have correct text for search button', () => {
        //     cy.mount(<NavbarSearch />)
        //     cy.get('[data-cy=search-button-navbar]').should('have.text', 'Search')
        // })
    
        // it('Should execute search of films', () => {
        //     cy.mount(<NavbarSearch />)
        //     cy.get('[data-cy=search-button-navbar]').click()
        // })
        
        
    
    })