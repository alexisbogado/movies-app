describe('Main page test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('renders without crashing', () => {
    cy.get('a')
      .contains('Wesley')
  })
})
