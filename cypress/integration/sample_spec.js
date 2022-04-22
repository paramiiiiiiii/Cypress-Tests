/// <reference types="cypress" />

describe('My First Test', () => {
  it('google visit', () => {
    cy.visit('https://www.google.com/')

    cy.get('input.gLFyf.gsfi')
      .type('cypress{enter}')

    


  })
})