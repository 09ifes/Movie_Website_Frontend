import NavbarLinks from '../navbar_components/NavbarLinks';
import '../index.css';

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

describe('<HomePage>', () => {
    it('Should mount Homepage', () => {
        cy.mount(<NavbarLinks />)
    })

    it('Should have correct text for home link', () => {
        cy.mount(<NavbarLinks />)
        cy.get('[data-cy=navbar-home]').should('have.text', 'Home')
    })

    it('Should have correct text for categories link', () => {
        cy.mount(<NavbarLinks />)
        cy.get('[data-cy=navbar-categories]').should('have.text', 'Categories')
    })

    it('Should have correct text for add film link', () => {
        cy.mount(<NavbarLinks />)
        cy.get('[data-cy=navbar-add-film]').should('have.text', 'Add Film')
    })

    it('Should have correct text for login link', () => {
        cy.mount(<NavbarLinks />)
        cy.get('[data-cy=navbar-login]').should('have.text', 'Login')
    })

    it('Should redirect to homepage', () => {
        cy.mount(<NavbarLinks />)
        cy.get('[data-cy=navbar-home]').click()
    })
    

})

