describe('HW tests', () => {
    const testForm = (testData, testData1, testData2, testData3) =>
  
    function () {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com');
      cy.get('[alt="Material Light Theme"]').click();
      cy.get('[title="Forms"]').click();
      cy.get('[class="menu-title ng-tns-c141-11"]').click();
      cy.get('#inputFirstName').type(`${testData}`).should('have.value',testData);
      cy.get('#inputLastName').type(`${testData1}`).should('have.value', testData1);
      cy.get('#inputEmail').type(`${testData2}`).should('have.value', testData2);
      cy.get('#inputWebsite').type(`${testData3}`).should('have.value', testData3);
    };
  
  it('search for HW', testForm('Anatolik','Potugniy','test@tester.com', 'piupiu.com'));
  })