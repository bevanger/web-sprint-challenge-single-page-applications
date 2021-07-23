describe('Pizza App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    });
const nameInput = () => cy.get('input[name="name"]');
const instructionsInput = () => cy.get('input[name="instructions"]');
const cheeseInput = () => cy.get('input[name="cheese"]');
const pepperoniInput = () => cy.get('input[name="pepperoni"]');
const baconInput = () => cy.get('input[name="bacon"]');
const sausageInput = () => cy.get('input[name="sausage"]');
const orderBtn = () => cy.get('button[id="order-button"]');

it('sanity test to make sure our tests work', () => {
    expect(1+2).to.equal(3);
});
it('can add text to the box', () => {
    nameInput()
        .should("have.value", "")
        .type("Bailey")
        .should("have.value", "Bailey");

    instructionsInput()
        .should("have.value", "")
        .type("Extra cheese")
        .should("have.value", "Extra cheese");
});
it('can select multiple toppings', () => {
    cheeseInput()
        .should('not.be.checked')
        .click()
        .should('be.checked')
    pepperoniInput()
        .should('not.be.checked')
        .click()
        .should('be.checked')
    baconInput()
        .should('not.be.checked')
        .click()
        .should('be.checked')
    sausageInput()
        .should('not.be.checked')
        .click()
        .should('be.checked');
});
it('can submit the form ', () => {
    nameInput().type("Bailey")
    instructionsInput().type("Extra cheese")
    cheeseInput().check()
    orderBtn().click()
    cy.contains("Bailey")
});
});