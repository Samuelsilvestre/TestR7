
describe('Recuperar a senha', () => {
    
    beforeEach(() => {
        cy.visit(Cypress.env('URL_PASSWORD'));
    })

    it('Verificar a recuperação da senha sem estar registrado', () => {
        cy.get('#id_email_input').type(Cypress.env('EMAIL'));
        cy.get("button[type='submit']").click().should('not.exist');
        cy.screenshot('verificar a recuperação da senha sem registro');

    });
});