describe('Login', () => {
  it('Acesso aconta sem registro', () => {
    cy.visit(Cypress.env('URL_LOGIN'));
    cy.get('#id_email_input').type(Cypress.env('EMAIL'));
    cy.get('#id_password_input').type(Cypress.env('PASSWORD'));
    cy.get("button[type='submit']").click();
    cy.get("p[class='jarvics:base-text-neutral-high-400 base-text-xxs base-font-normal base-font-primary base-text-neutral-low-500']")
      .should('contain', "Email ou senha inválido");
    cy.url().should('eq', Cypress.env('URL_LOGIN'));
    cy.screenshot('Acesso a conta sem registro')
  });
});
