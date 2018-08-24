describe('Modal', () => {
  const openModal = () => {
    cy.contains('Open Modal').click()
  }

  const closeModal = () => {
    cy.contains('OK').click('left')
  }

  it('should sucessfully load', () => {
    cy.visit('/example/demo.html')
  })

  it('should see the demo button', () => {
    cy.contains('Open Modal').as('modalBtn')
  })

  it('should not see the modal by default', () => {
    cy.get('#modal1').and('not.be.visible')
    cy.get('#modal1 .modal-overlay').and('not.be.visible')
  })

  /**
   * Checking overlay because the height of
   * .modal is zero and cypress treats that
   * as hidden
   */
  it('should fire modal on clicking button', () => {
    openModal()
    cy.get('#modal1 .modal-overlay').and('be.visible')
  })

  it('should close modal on overlay click', () => {
    closeModal()
    cy.get('#modal1 .modal-overlay').and('not.be.visible')
  })

  it('should close modal on escape button press', () => {
    openModal()
    cy.get('body').type('{esc}')
    cy.get('#modal1 .modal-overlay').and('not.be.visible')
  })
})
