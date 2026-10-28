describe('Teste de Cadastro de Usuário', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('deve cadastrar um novo usuário com sucesso', () => {
    cy.get('input[name="nome"]').type('João Silva');
    cy.get('input[name="email"]').type('joao@example.com');
    cy.get('input[name="senha"]').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.contains('Cadastro realizado com sucesso!')
      .should('be.visible');
  });

  it('deve impedir o envio de um e-mail inválido', () => {
    cy.get('input[name="nome"]').type('Maria Silva');
    cy.get('input[name="email"]').type('email-invalido');
    cy.get('input[name="senha"]').type('senha123');
    cy.get('button[type="submit"]').click();

    cy.get('input[name="email"]').then(($email) => {
      expect($email[0].checkValidity()).to.be.false;
    });

    cy.get('#mensagem').should('be.empty');
  });
});
